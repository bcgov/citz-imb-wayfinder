db = new Mongo().getDB('wf-db');

db.createUser({
    user: "wf-admin",
    pwd: "wf-admin",
    roles: [{role: 'readWrite', db: 'wf-db'}],
});

db.createCollection("locations", {capped: false});
db.locations.insertMany([
    {
        "contact": {
          "fax": "250 952-4124",
          "phone": "250 387-6121"
        },
        "services": [
          "Elections BC",
          "Manufactured Home Searches, Relocation Permits and Initial Registrations - Online",
          "BC Cooperatives",
          "Address Change BC",
          "Exam Invigilation Services\u00a0- please call the office to set up an appointment",
          "Angling Guide Exams",
        ],
        "address": {
          "province": "BC",
          "postal_code": "V8X 5A7",
          "region": "British Columbia",
          "county": "Capital",
          "locality": "Saanich",
          "label": "771 Vernon Ave, Saanich, BC, Canada"
        },
        "locale": "Victoria (Gateway Village)",
        "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-victoria",
        "latitude": 48.457966,
        "longitude": -123.376752
      },
      {
        "contact": {
          "fax": "250 334-1209",
          "phone": "250 897-7500"
        },
        "services": [
          "Ambulance Service Fee Payments",
          "Fishing (Angling) Licences - Online",
          "Identity Verification",
          "BC Societies",
          "Guide Outfitter Exams",
          "Hunting Licence (BC Resident) - Online",
          "BC Online (Government Services Online)",
          "Court Registry Services",
          "BC Vital Statistics Services"
        ],
        "address": {
          "province": "BC",
          "street": "2500 Cliffe Ave",
          "postal_code": "V9N 2L6",
          "region": "British Columbia",
          "county": "Comox Valley",
          "locality": "Courtenay",
          "label": "2500 Cliffe Ave, Courtenay, BC, Canada"
        },
        "locale": "Courtenay",
        "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-courtenay",
        "latitude": 49.676332,
        "longitude": -124.982398
      },
      {
        "contact": {
          "fax": "1 250 442-4317",
          "phone": "1 250 442-4306"
        },
        "services": [
          "Manufactured Home Searches, Relocation Permits and Initial Registrations - Online",
          "BC Services Card",
          "BC Corporations",
          "Industry Training Authority (ITA) Exams - Online",
          "Court Registry Services",
          "BC Vital Statistics Services"
        ],
        "address": {
          "province": "BC",
          "region": "British Columbia",
          "county": "Kootenay Boundary",
          "locality": "Grand Forks",
          "label": "Grand Forks, BC, Canada"
        },
        "locale": "Grand Forks",
        "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-grand-forks",
        "latitude": 49.028372,
        "longitude": -118.443979
      },
      {
        "contact": {
          "fax": "250 559-4798",
          "phone": "250 559-4452"
        },
        "services": [
          "Elections BC",
        ],
        "address": {
          "province": "BC",
          "street": "216 Oceanview Dr",
          "postal_code": "V0T 1S0",
          "region": "British Columbia",
          "county": null,
          "locality": "Queen Charlotte (Village)",
          "label": "Queen Charlotte (Village), BC, Canada"
        },
        "locale": " Daajing Giids (formerly Village of Queen Charlotte)",
        "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-daajing-giids",
        "latitude": 53.248288,
        "longitude": -132.093399
      },
      {
        "contact": {
          "fax": "250 837-4669",
          "phone": "250 837-6981"
        },
        "services": [
          "Elections BC",
          "Manufactured Home Searches, Relocation Permits and Initial Registrations - Online",
          "BC Hydro",
          "Corporate Registry Services",
          "Pesticide Exams - Online",
          "Court Registry Services",
          "BC Vital Statistics Services"
        ],
        "address": {
          "province": "BC",
          "region": "British Columbia",
          "county": "Columbia-Shuswap",
          "locality": "Revelstoke",
          "label": "1123 Second St St West, Revelstoke, BC, Canada"
        },
        "locale": "Revelstoke",
        "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-revelstoke",
        "latitude": 51.004556,
        "longitude": -118.207672
      },
]);
