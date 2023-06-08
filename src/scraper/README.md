# Web Scraper

## Purpose: 
To assist Project Wayfinder in collecting and holding data about
BC Services locations. This Script leverages the positionStack API
to gather latitude and longtitude the information scraped, as well as
add additional details regarding locations.
## Use:     

Using the Script is simple:
- Run Pipenv install -> Pipenv shell
- run `python web_scraper.py`

The script will take care of the rest and create or update `results.json`
## Note:

`web_scraper.py` script utilizes multiprocessing to expedite the scraping process. this allows the script to run in roughly 20% the time as a single process would.

If you see the error `Error occurred while scraping URL: 'NoneType' object 
has no attribute 'find'` printing in the console, reduce the number of 
MAX_WORKERS until error no longer occurs.

MAX_WORKERS is based on system capability and is not standard for any one machine

## Keys

This tool uses the following `environment variables` for operation

| KEY | EXAMPLE | DESCRIPTION |
| --- | ------- | ----------- |
| API_URL | `http://api.positionstack.com/v1/forward?access_key={KEY}&country=ca&query=` | URL with Key and setup to keep in one place
| GEO_API_KEY | 4fg1sw3e265g1 | API Key for `https://www.geoapify.com/geocoding-api` |
