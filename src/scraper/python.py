import requests
from bs4 import BeautifulSoup

URL = "https://realpython.github.io/fake-jobs/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

results = soup.find(id="ResultsContainer")

job_elements = results.find_all("div", class_="card-content")
resultsDiff = results.find_all(
  "h2", string=lambda text: "python" in text.lower()
)

for job_element in job_elements:
  title_element = job_element.find("h2", class_="title")
  company_element = job_element.find("h3", class_="company")
  print(title_element.text)
  print(company_element.text)
  print()

for job_element in resultsDiff:
  print(job_element.text)