# coding=utf8
import requests
from bs4 import BeautifulSoup  # Web Scraper Library
import json
import re
from dotenv import dotenv_values
import urllib  # Encodes URLs for HTTP requests
from tqdm import tqdm  # Gives the CLI progress bar
import concurrent.futures

#############################################################################
# PURPOSE: To assist Project Wayfinder in collecting and holding data about
#          BC Services locations. This Script leverages the positionStack API
#          to gather latitude and longtitude the information scraped, as well as
#          add additional details regarding locations.
#
# USE:     Using the Script is simple, run pipenv install and pipenv shell in terminal
#          to have all extra libraries imported and running
#
# Note:    If you see the error "Error occurred while scraping URL: 'NoneType' object 
#          has no attribute 'find'" printing in the console, reduce the number of 
#          MAX_WORKERS until error no longer occurs.
#          MAX_WORKERS is based on system capability and is not standardized
#
#############################################################################

MAX_WORKERS = 3 # Adjust the value based on the system capabilities
CONFIG = dotenv_values(".env")
BASE_URL = "https://www2.gov.bc.ca"
START_POINT = '/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc'
FILTER = "/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-"
OUTPUT_FILE = "results.json"
GOOGLE = "https://www.google.com/search?q="

#############################################################################
# @desc : Given a URL, requests the data and returns the soup object
#         BeautifulSoup makes the content parsable for digestion
# @return: Parsable html of given URL
#############################################################################
def soupifyDocument(url):
    HEADERS = {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0"}
    http_response = requests.get(url=url, headers=HEADERS)

    return BeautifulSoup(http_response.content, "html.parser")

#############################################################################
# @desc : Taking the Soup'd content of the base URL, creates an array of URL's
#         Links from website use both absolute and relational URLs
# @return : Array of URL's to further parse out
#############################################################################
def scrape_initial_urls(soup):
    url_collection = []
    initialLinks = soup.find_all("a", href=lambda href: href and FILTER in href)

    for url in initialLinks:
        href = url['href']
        if BASE_URL in href:
            url_collection.append(href)
        else:
            url_collection.append(BASE_URL + href)

    return url_collection

#############################################################################
# @desc: Take the location string scraped, refined with the locale, and gather
#        additional details from a third party API
#        Added a second API for refining locations in the event that the first one
#        fails, a second chance is made somewhere else
# @return: supplementary API data
#############################################################################
def get_supplementary_api_data(locationString, localeString):
    queryString = f"{locationString}, {localeString}, ca"
    response = requests.get(CONFIG['API_URL'] + urllib.parse.quote_plus(queryString))
    if len(response.json()['data']) == 0:
        locationString = locationString.replace("  ", " ")
        locationString = locationString.replace("  ", " ")
        locationString = locationString.replace("Suite 1 -", "")
        response = requests.get("https://api.geoapify.com/v1/geocode/search?text=" + urllib.parse.quote_plus(locationString) + "&apiKey=" + CONFIG['GEO_API_KEY'])
        
    return response.json()

#############################################################################
# @desc: Parse the address string to acquire the postal code, if there is no
#        address present, scrapes google for the address + postal code
# @returns: Dictionary Object of broken down string
#############################################################################
# Precompile the regular expression pattern for improved performance
POSTAL_REGEX = re.compile(r'[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d')

def scrape_postal_code(mailingStr):
    street_address = {
        "province": "BC"
    }
    postal_code_match = POSTAL_REGEX.search(mailingStr)

    if postal_code_match:
        street_address["postal_code"] = postal_code_match.group()
    else:
        try:
            googleSearch = soupifyDocument(GOOGLE + urllib.parse.quote_plus(mailingStr + ", Canada, BC"))
            new_mailer = googleSearch.find(class_="fMYBhe")
            google_address = googleSearch.find(class_="aiAXrc")
            if google_address:
              street_address["street"] = google_address.text
            if new_mailer:
                postal_code_match = POSTAL_REGEX.search(new_mailer.text)
                if postal_code_match:
                    street_address["postal_code"] = postal_code_match.group()
        except Exception as e:
            # Handle any exceptions that might occur during the Google search
            print(f"An error occurred during the Google search: {str(e)}")

    return street_address

#############################################################################
# @desc: Parses Locale data from page header
# @returns: Locale String
#############################################################################
def scrape_locale(soup):
    location = soup.find('h1', string=lambda text: text is not None)
    return location.text.removeprefix("Service BC Location: ").strip()

#############################################################################
# @desc: Parses the Web pages for available services offered by each
#        Service BC Location. Sublist items are filtered if they do not
#        include an item from the allow_list
# @returns: [String] Services list
#############################################################################
def scrape_services(soup):
    services = []
    allow_list = ["BC", "Exam"]
    service_divs = soup.find_all("div", class_="panel-text")
    for service_div in service_divs:
        header_two = service_div.find('h2', class_='bc_h2')
        if header_two is not None and "Services Available at this Location:" in header_two.text:
            ul = service_div.find("ul")
            for list_item in ul:
                if list_item.find('ul'):
                    sublist_items = list_item.text.split("\n")
                    for sublist_item in sublist_items:
                        if (substring in allow_list for substring in sublist_item): # Change to make work
                            services.append(tidyServiceItem(sublist_item))
                else:
                    services.append(tidyServiceItem(list_item.text))
    return list(set((x for x in services if x != ''))) # Remove any empty entries

#############################################################################
# @desc: Parses the Web pages for available services offered by each
#        Service BC Location when they offer limited service. Sublist items
#        are filtered if they don't include an item in the allow_list
# @returns: [String] Services list
#############################################################################
def scrape_limited_services(soup):
    results = []
    allow_list = ["BC", "Exam"]
    service_div = soup.find("div", class_="callout")
    services_list = service_div.find('ul')
    for list_item in services_list:
        if list_item.find('ul'):
            sublist_items = list_item.text.split("\n")
            for sublist_item in sublist_items:
                if(substring in allow_list for substring in sublist_item):
                    results.append(tidyServiceItem(sublist_item))
        else:
            results.append(tidyServiceItem(list_item.text))
    return list(set((x for x in results if x != ''))) # Remove any empty entries


#############################################################################
# @desc: Iterate through a string removing commonly appearing characters and expressions
#        that aren't needed in the end result. Joins the filters into a single regex pattern,
#        passes through them all in a single take, and removes 'Online' Suffixs
# @return: String - tidied version of the argument
#############################################################################
def tidyServiceItem(serviceItem):
    filters = ["Pay\u00a0Online","\u2013", " - ", "\u00a0", "\t", "\u00a0", "Pay Online"]
    removeOnline = r'Online$'

    # Combine all filters into a single regular expression pattern
    pattern = re.compile("|".join(map(re.escape, filters)))

    # Apply the pattern substitution in a single pass
    serviceItem = pattern.sub("", serviceItem)

    # Remove trailing "Online" using regex substitution
    serviceItem = re.sub(removeOnline, "", serviceItem)
    
    # Replace multiple spaces with a single space
    serviceItem = " ".join(serviceItem.split())

    return serviceItem.strip()

#############################################################################
# @desc - extract data from the URL's and parse them for location data
#         using an auxiliary API, gathers more information from whats gathered
#         to help standardize the data available
#         Many containers being scraped use the same classes or do not exist
#         so many checks are in place to confirm there are values
#############################################################################
def scrape_url(url):
    locationData = {
        "contact": {},
        "services": [],
        "address": {}
    }
    soup = soupifyDocument(url)

    # Extract desired data
    localeString = scrape_locale(soup)
    if "services ONLY" in localeString:
        locationData["services"] = sorted(scrape_limited_services(soup))
        if "*" in localeString:
          localeString = localeString[:localeString.index('*')].strip()
    else:
        locationData["services"] = sorted(scrape_services(soup))

    locationData["locale"] = localeString
    locationData["website"] = url

    contacts = soup.find('div', class_='contacts')
    fax = contacts.find('div', itemprop="faxNumber")
    streetsCollection = contacts.find_all('div', class_="contactRow")
    street_address = None  # Variable to store the street address

    for streets in streetsCollection:
        h3 = streets.find('h3')
        if h3 and h3.text.strip() == "Street:" or h3.text.strip() == "Address:":
            street_address = streets.find('pre').text  # Store the street address
            break
        
    if not street_address:
        for streets in streetsCollection:
            h3 = streets.find('h3')
            if h3 and h3.text.strip() == "Mailing:":
                street_address = streets.find('pre').text

    phone = contacts.find('div', itemprop="telephone")

    # Verify data was extracted in scrape
    locationData["contact"]["fax"] = fax.text.strip() if fax else ""
    locationData["contact"]["phone"] = phone.text.strip() if phone else ""

    if street_address:
        locationData["address"] = scrape_postal_code(street_address) or {}

    # Use scraped data to gather meta data
    supplement_data = get_supplementary_api_data(street_address, locationData["locale"]) if street_address else {}

    # Verify the API returned valid data, then take what's important
    if supplement_data.get('data'):
        data = supplement_data['data'][0]
        locationData["latitude"] = data.get('latitude', "")
        locationData["longitude"] = data.get('longitude', "")
        locationData["address"]["region"] = data.get('region', "")
        locationData["address"]["county"] = data.get('county', "")
        locationData["address"]["locality"] = data.get('locality', "")
        locationData["address"]["label"] = data.get('label', "")
    elif supplement_data.get('features'):
        data = supplement_data['features'][0]['properties']
        locationData["latitude"] = data.get('lat', "")
        locationData["longitude"] = data.get('lon', "")
        locationData["address"]["region"] = data.get('state', "")
        locationData["address"]["county"] = data.get('county', "")
        locationData["address"]["locality"] = data.get('city', "")
        locationData["address"]["label"] = data.get('formatted', "")

    return locationData

#############################################################################
##                           Start of Script                               ##
#############################################################################
try:
    print("\033[1;32m Beginning Scrape of BC Services")
    # Create or overwrite output file
    with open(OUTPUT_FILE, "w+") as jsonDoc:
        links = list(set(scrape_initial_urls(soupifyDocument(BASE_URL + START_POINT))))
        results = []  # List to store the scraping results

        # Define a function to scrape a single URL
        def scrape_single_url(url):
            return scrape_url(url)

        # Set the maximum number of concurrent workers
        with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            # Submit the scraping tasks to the executor and track the progress
            futures = [executor.submit(scrape_single_url, link) for link in links]
            # futures = [executor.submit(scrape_single_url, links[i]) for i in range(5)]
            with tqdm(total=len(futures), ncols=100, colour="#669966", desc="Progress: ") as pbar:
                # Iterate through the completed futures and retrieve the results
                for future in concurrent.futures.as_completed(futures):
                    try:
                        result = future.result()
                        results.append(result)
                    except Exception as err:
                        print(f"Error occurred while scraping URL: {err}")
                    pbar.update(1)  # Update the progress bar

        # Format Data into JSON, Pretty print, and write to Output file
        jsonDoc.write(json.dumps(sorted(results, key=lambda k: k['locale']), indent=2))
    print(f"\033[1;32m Scraping successfully completed, view results in {OUTPUT_FILE}")

except Exception as err:
    print(f"\033[1;31m {err}")
    print("Script Terminated")
