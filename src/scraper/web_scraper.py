import requests
from bs4 import BeautifulSoup
import json
import re

#Constants for beginning search and filtering initial results
BASE_URL = "https://www2.gov.bc.ca"
START_POINT = '/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc'
FILTER = "/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-"

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
def getInitialURLs(soup):
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
# @desc: Given the Address string from previous linting, parses the string to 
#        be more granular
# @returns: Dictionary Object of broken down string
#############################################################################
def refineMailingAddress(mailingStr):
  ADDRESS = 0
  LOCALE = 1
  POSTAL_REGEX = r'[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d'
  mailingAddress = {}
  mailingArr = mailingStr.strip().split(',')
  if len(mailingArr) > 0: #Confirm Address is present
    mailingAddress["address"] = mailingArr[ADDRESS]
  if len(mailingArr) > 1: #Confirm Locale is present
    mailingAddress["locale"] = mailingArr[LOCALE]
    
  postal_code_match = re.search(POSTAL_REGEX, mailingStr)
  if postal_code_match:
    sub_string = postal_code_match.group()
    mailingAddress["postal_code"] = sub_string
  mailingAddress["province"] = "BC"
  return mailingAddress
  
def extractData(url):
  STREET = 0
  MAILING = 1
  locationData = {}
  soup = soupifyDocument(url)
  # Find the desired data
  contacts = soup.find('div', class_='contacts')
  fax = contacts.find('div', itemprop="faxNumber")
  streetsCollection = contacts.find_all('pre', itemprop="streetAddress")
  phone = contacts.find('div', itemprop="telephone")  

  #Verify data exists individually
  if fax is not None:
    locationData["fax"] = fax.text.strip()
  if phone is not None: 
    locationData["phone"] = phone.text.strip()
  if streetsCollection is not None and len(streetsCollection) > 0: #Verify 
    locationData["street"] = streetsCollection[STREET].text.strip();
    if len(streetsCollection) > 1: #Mailing address follows the same category as regular address, must check it exists
      locationData["mailing_address"] = refineMailingAddress(streetsCollection[MAILING].text)
  return locationData

links = getInitialURLs(soupifyDocument(BASE_URL+START_POINT))

for link in links:
  print(extractData(link))
