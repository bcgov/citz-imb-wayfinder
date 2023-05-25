import requests
from bs4 import BeautifulSoup

#Constants for beginning search and filtering initial results
BASE_URL = "https://www2.gov.bc.ca"
START_POINT = '/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc'
FILTER = "/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-"

#############################################################################
# @desc : Given a URL, requests the data and returns the soup object
#         BeautifulSoup makes the content parsable for digestion
# @return: Parsable html of given URL
############################################################################# 
def SoupifyDocument(URL):
  #Without the Headers the Root website denies our connection
  HEADERS = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0"}
  response = requests.get(url=URL, headers=HEADERS)
  return BeautifulSoup(response.content, "html.parser")

#############################################################################
# @desc : Taking the Soup'd content of the original URL, creates an array of URL's
# @return : Array of URL's to further parse out
#############################################################################
def GetInitialURLs(soup):
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


links = GetInitialURLs(SoupifyDocument(BASE_URL+START_POINT))

for link in links:
  print(link);