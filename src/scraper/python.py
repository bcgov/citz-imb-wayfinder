import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www2.gov.bc.ca"
START_POINT = '/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc'
FILTER = "/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-"

headers = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0"}

response = requests.get(url=BASE_URL+START_POINT, headers=headers)

soup = BeautifulSoup(response.content, "html.parser")

resultsDiff = soup.find_all(
  "a", href=lambda href: href is not None and FILTER in href
)

for url in resultsDiff:
  if BASE_URL in url['href']:
    print(url['href'])
  else:
    print(BASE_URL+url['href'])
print()
