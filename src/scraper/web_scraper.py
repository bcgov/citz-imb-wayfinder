#############################################################################
# PURPOSE: To assist Project Wayfinder in collecting and holding data about
#          BC Services locations. This Script leverages the positionStack API
#          to gather latitude and longtitude the information scraped, as well as 
#          add additional details regarding locations.
#
# USE:     Using the Script is simple, run pipenv install and pipenv shell in terminal
#          to have all extra libraries imported and running
#############################################################################

import requests
from bs4 import BeautifulSoup #Web Scraper Library
import json
import re
from dotenv import dotenv_values
import urllib #Encodes URLs for HTTP requests 
from tqdm import tqdm # Gives the CLI progress bar

CONFIG = dotenv_values(".env")

BASE_URL = "https://www2.gov.bc.ca"
START_POINT = '/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc'
FILTER = "/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-"
OUTPUT_FILE="results.json"

#############################################################################
# @desc : Given a URL, requests the data and returns the soup object
#         BeautifulSoup makes the content parsable for digestion
# @return: Parsable html of given URL
############################################################################# 
def soupifyDocument(url):
  #Without the Headers the Root website denies our connection
  HEADERS = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0"}
  response = requests.get(url=url, headers=HEADERS)
  return BeautifulSoup(response.content, "html.parser")

#############################################################################
# @desc : Taking the Soup'd content of the original URL, creates an array of URL's
# @return : Array of URL's to further parse out
#############################################################################
def scrape_initial_urls(soup):
  destinations = []
  initialLinks = soup.find_all(
    "a", href=lambda href: href is not None and FILTER in href
  )
  for url in initialLinks: #Aim for consistency in the URLs
    if BASE_URL in url['href']: 
      destinations.append(url['href'])
    else:
      destinations.append(BASE_URL+url['href'])
  return destinations

#############################################################################
# @desc: Take the location string scraped, refined with the locale, and gather
#        additional details from a third party API 
#############################################################################
def get_supplementary_api_data(locationString, localeString):
  queryString = f"{locationString}, {localeString}, ca"
  response = requests.get(CONFIG['API_URL'] + urllib.parse.quote_plus(queryString))
  return response.json()

#############################################################################
# @desc: Given the Address string from previous linting, parses the string to 
#        be more granular
# @returns: Dictionary Object of broken down string
#############################################################################
def scrape_postal_code(mailingStr):
  POSTAL_REGEX = r'[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d'
  street_address = {}
  postal_code_match = re.search(POSTAL_REGEX, mailingStr)
  if postal_code_match:
    sub_string = postal_code_match.group()
    street_address["postal_code"] = sub_string
  street_address["province"] = "BC"
  return street_address

#############################################################################
# @desc: Parses Locale data from Soup object
# @returns: Locale String
#############################################################################
def scrape_locale(soup):
  location = soup.find('h1', string=lambda text: text is not None)
  return location.text.removeprefix("Service BC Location: ")

#############################################################################
# @desc: Parses the Web pages for available services offered by each 
#        Service BC Location
# @returns: [String] Services list
#############################################################################
def scrape_services(soup):
  services = []
  service_divs = soup.find_all("div", class_="panel-text")
  for service_div in service_divs:
    header_two = service_div.find('h2', class_="bc_h2")
    
    if header_two is not None and "Services Available at this Location:" in header_two.text: 
      ul = service_div.find_all("ul")
      for li in ul:
        service_list_items = li.find_all("li")
        for service_list_item in service_list_items:
          if service_list_item is not None:
            split_service = service_list_item.text.split("\n")
            for splits in split_service:
              if splits != "\t" and len(splits) > 0:
                services.append(splits)
  return list(set(services))
    
#############################################################################
# @desc - extract data from the URL's and parse them for location data 
#         using an auxiliary API, gathers more information from whats gathered
#         to help standardize the data available
#############################################################################
def scrape_url(url):
  STREET = 0
  locationData = {}
  locationData["contact"] = {}
  
  soup = soupifyDocument(url)
  locationData["services"] = scrape_services(soup)
  # Extract desired data
  locationData["locale"] = scrape_locale(soup)
  locationData["website"] = url
  contacts = soup.find('div', class_='contacts')
  fax = contacts.find('div', itemprop="faxNumber")
  streetsCollection = contacts.find_all('pre', itemprop="streetAddress")
  phone = contacts.find('div', itemprop="telephone")
  
  # Verify data was extracted in scrape
  if fax is not None:
    locationData["contact"]["fax"] = fax.text.strip() or ""
  if phone is not None: 
    locationData["contact"]["phone"] = phone.text.strip() or ""
  if streetsCollection is not None and len(streetsCollection) > 0: #Verify 
    locationData["address"] = scrape_postal_code(streetsCollection[STREET].text) or ""

  # Use scraped data to gather meta data
  supplement_data = get_supplementary_api_data(streetsCollection[STREET].text, locationData["locale"])

  # Verify the API returned valid data, then take whats important
  if len(supplement_data['data']) > 0:
    locationData["latitude"] = supplement_data['data'][0]['latitude'] or ""
    locationData["longitude"] = supplement_data['data'][0]['longitude'] or ""
    locationData["address"]["region"] = supplement_data['data'][0]['region'] or ""
    locationData["address"]["county"] = supplement_data['data'][0]['county'] or ""
    locationData["address"]["locality"] = supplement_data['data'][0]['locality'] or ""
    locationData["address"]["label"] = supplement_data['data'][0]['label'] or ""  

  return locationData

try:
  print("\033[1;32m Beginning Scrape of BC Services")
  #Create or overwrite output file
  jsonDoc = open(OUTPUT_FILE, "w+")
  links = list(set(scrape_initial_urls(soupifyDocument(BASE_URL+START_POINT))))
  results = []

  # for link in links:
  for i in tqdm(range(0, len(links)), ncols=100, colour="#669966", desc = "Progress: "):
    results.append(scrape_url(links[i]))
    
  # Format Data into JSON, Pretty print, and write to Output file
  jsonDoc.write(json.dumps(results, indent=2));
  print(f"\033[1;32m Scraping successfully completed, view results in {OUTPUT_FILE}")
except Exception as err:
  print(f"\033[1;31m err")
finally:
  print("Script Terminated")