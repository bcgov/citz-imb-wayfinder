/**
 * @desc  Seed Data for Development MongoDB Database, contains: 
 *  - initial user account for database access
 *  - Sample set of location data for Hospitals, Courts, ServiceBC, ICBC, and BC Housing 
 *  - Set of 'UpdateDate' data for frontend testing
 */

db = new Mongo().getDB('wf-db');

db.createUser({
    user: "wf-admin",
    pwd: "wf-admin",
    roles: [{role: 'readWrite', db: 'wf-db'}],
});

db.createCollection("locations", {capped: false});
db.createCollection("reports", {capped: false});
db.createCollection("updatedates", {capped: false});

// Add ServiceBC data
db.locations.insertMany([
  {
    "contact": {
      "fax": "250 566-4620",
      "phone": "250 566-4448"
    },
    "services": [
      "Address Change BC",
      "Affordable Child Care Benefit",
      "Ambulance Service Fee Payments",
      "Angling Guide Exams",
      "BC Birth Certificate",
      "BC Business Registration",
      "BC Cooperatives",
      "BC Corporations",
      "BC Death Certificate",
      "BC Hydro",
      "BC Marriage Certificate",
      "BC Online (Government Services Online)",
      "BC Services Card",
      "BC Societies",
      "BC Transplant Registration",
      "BC Vital Statistics Services Marriage Licence Issuance in office only;",
      "BCeID (ID for Online Government Services)",
      "Cannabis Worker/Associate Attestation",
      "Claim Rural Home Owner Grant",
      "Commissioner for Taking Affidavits (limited authority)",
      "Community Crisis Fund",
      "Corporate Registry Services",
      "Court Registry Services",
      "Elections BC",
      "Exam Invigilation Services- please call the office to set up an appointment",
      "Fishing (Angling) Licences",
      "Forestry Worker Support Program",
      "Guide Outfitter Exams",
      "Hunting Licence (BC Resident)",
      "Identity Verification",
      "Industry Training Authority (ITA) Exams",
      "Manufactured Home Searches, Relocation Permits and Initial Registrations",
      "Medical Services Plan/Health Insurance BC",
      "Personal Property (Motor Vehicle) Lien Search",
      "Pesticide Exams",
      "Residential Tenancy Forms and Application Submission",
      "Rural Property Tax Services",
      "Water Rental Payments"
    ],
    "address": {
      "province": "BC",
      "street": "1300 W 4th Ave",
      "postal_code": "V6H 4A3",
      "region": "British Columbia",
      "county": "Fraser-Fort George",
      "locality": "Valemount",
      "label": "1300 4th Avenue, Valemount, BC, Canada"
    },
    "locale": "Valemount",
    "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-valemount",
    "serviceType": "ServiceBC",
    "latitude": 52.831912,
    "longitude": -119.264603
  },
  {
    "contact": {
      "fax": "",
      "phone": "1 800 663-7867"
    },
    "services": [
      "BC Services Card",
      "BCeID (ID for Online Government Services)",
      "Hazardous Waste License to Transport Applications (new and renewals).Email your application package to: applications.sbc@gov.bc.ca",
      "Identity Verification",
      "Pesticide License Applications (new and renewals).Email your application package to: applications.sbc@gov.bc.ca"
    ],
    "address": {
      "province": "BC",
      "region": "British Columbia",
      "county": "Greater Vancouver",
      "locality": "Vancouver",
      "label": "865 Hornby St, Vancouver, BC, Canada"
    },
    "locale": "Vancouver",
    "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-vancouver",
    "serviceType": "ServiceBC",
    "latitude": 49.281992,
    "longitude": -123.123303
  },
  {
    "contact": {
      "fax": "250 567-6303",
      "phone": "250 567-6301"
    },
    "services": [
      "Address Change BC",
      "Affordable Child Care Benefit",
      "Ambulance Service Fee Payments",
      "Angling Guide Exams",
      "BC Birth Certificate",
      "BC Business Registration",
      "BC Cooperatives",
      "BC Corporations",
      "BC Death Certificate",
      "BC Hydro",
      "BC Marriage Certificate",
      "BC Online (Government Services Online)",
      "BC Services Card",
      "BC Societies",
      "BC Transplant Registration",
      "BC Vital Statistics Services Marriage Licence Issuance in office only;",
      "BCeID (ID for Online Government Services)",
      "Cannabis Worker/Associate Attestation",
      "Claim Rural Home Owner Grant",
      "Commissioner for Taking Affidavits (limited authority)",
      "Community Crisis Fund",
      "Corporate Registry Services",
      "Court Registry Services",
      "Elections BC",
      "Exam Invigilation Services- please call the office to set up an appointment",
      "Fishing (Angling) Licences",
      "Forestry Worker Support Program",
      "Guide Outfitter Exams",
      "Hunting Licence (BC Resident)",
      "Identity Verification",
      "Industry Training Authority (ITA) Exams",
      "Manufactured Home Searches, Relocation Permits and Initial Registrations",
      "Medical Services Plan/Health Insurance BC",
      "Personal Property (Motor Vehicle) Lien Search",
      "Pesticide Exams",
      "Residential Tenancy Forms and Application Submission",
      "Rural Property Tax Services",
      "Water Rental Payments"
    ],
    "address": {
      "province": "BC",
      "street": "189 Stewart St E",
      "postal_code": "V0J 3A0",
      "region": "British Columbia",
      "county": "Bulkley-Nechako",
      "locality": "Vanderhoof",
      "label": "Vanderhoof, BC, Canada"
    },
    "locale": "Vanderhoof",
    "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-vanderhoof",
    "serviceType": "ServiceBC",
    "latitude": 54.009225,
    "longitude": -123.976597
  },
  {
    "contact": {
      "fax": "250 549-5508",
      "phone": "250 549-5511"
    },
    "services": [
      "Address Change BC",
      "Affordable Child Care Benefit",
      "Ambulance Service Fee Payments",
      "Angling Guide Exams",
      "BC Birth Certificate",
      "BC Business Registration",
      "BC Cooperatives",
      "BC Corporations",
      "BC Death Certificate",
      "BC Hydro",
      "BC Marriage Certificate",
      "BC Online (Government Services Online)",
      "BC Services Card",
      "BC Societies",
      "BC Transplant Registration",
      "BC Vital Statistics Services Marriage Licence Issuance in office only;",
      "BCeID (ID for Online Government Services)",
      "Cannabis Worker/Associate Attestation",
      "Claim Rural Home Owner Grant",
      "Commissioner for Taking Affidavits (limited authority)",
      "Community Crisis Fund",
      "Corporate Registry Services",
      "Court Registry Services",
      "Elections BC",
      "Exam Invigilation Services- please call the office to set up an appointment",
      "Fishing (Angling) Licences",
      "Forestry Worker Support Program",
      "Guide Outfitter Exams",
      "Hunting Licence (BC Resident)",
      "ICBC Driver Licence Services",
      "Identity Verification",
      "Industry Training Authority (ITA) Exams",
      "Manufactured Home Searches, Relocation Permits and Initial Registrations",
      "Medical Services Plan/Health Insurance BC",
      "Personal Property (Motor Vehicle) Lien Search",
      "Pesticide Exams",
      "Residential Tenancy Forms and Application Submission",
      "Rural Property Tax Services",
      "Water Rental Payments"
    ],
    "address": {
      "province": "BC",
      "postal_code": "V1T 9G3",
      "region": "British Columbia",
      "county": "North Okanagan",
      "locality": "Vernon",
      "label": "3201 30 St, Vernon, BC, Canada"
    },
    "locale": "Vernon",
    "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-vernon",
    "serviceType": "ServiceBC",
    "latitude": 50.265704,
    "longitude": -119.270249
  },
  {
    "contact": {
      "fax": "250 952-4124",
      "phone": "250 387-6121"
    },
    "services": [
      "Address Change BC",
      "Affordable Child Care Benefit",
      "Ambulance Service Fee Payments",
      "Angling Guide Exams",
      "BC Birth Certificate",
      "BC Business Registration",
      "BC Cooperatives",
      "BC Corporations",
      "BC Death Certificate",
      "BC Hydro",
      "BC Marriage Certificate",
      "BC Online (Government Services Online)",
      "BC Services Card",
      "BC Societies",
      "BC Transplant Registration",
      "BC Vital Statistics Services Marriage Licence Issuance in office only;",
      "BCeID (ID for Online Government Services)",
      "Cannabis Worker/Associate Attestation",
      "Claim Rural Home Owner Grant",
      "Commissioner for Taking Affidavits (limited authority)",
      "Community Crisis Fund",
      "Corporate Registry Services",
      "Court Registry Services",
      "Elections BC",
      "Exam Invigilation Services- please call the office to set up an appointment",
      "Fishing (Angling) Licences",
      "Forestry Worker Support Program",
      "Guide Outfitter Exams",
      "Hunting Licence (BC Resident)",
      "Identity Verification",
      "Industry Training Authority (ITA) Exams",
      "Manufactured Home Searches, Relocation Permits and Initial Registrations",
      "Medical Services Plan/Health Insurance BC",
      "Personal Property (Motor Vehicle) Lien Search",
      "Pesticide Exams",
      "Residential Tenancy Forms and Application Submission",
      "Rural Property Tax Services",
      "Water Rental Payments"
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
    "serviceType": "ServiceBC",
    "latitude": 48.457966,
    "longitude": -123.376752
  },
  {
    "contact": {
      "fax": "250 398-4208",
      "phone": "250 398-4211"
    },
    "services": [
      "Address Change BC",
      "Affordable Child Care Benefit",
      "Ambulance Service Fee Payments",
      "Angling Guide Exams",
      "BC Birth Certificate",
      "BC Business Registration",
      "BC Cooperatives",
      "BC Corporations",
      "BC Death Certificate",
      "BC Hydro",
      "BC Marriage Certificate",
      "BC Online (Government Services Online)",
      "BC Services Card",
      "BC Societies",
      "BC Transplant Registration",
      "BC Vital Statistics Services Marriage Licence Issuance in office only;",
      "BCeID (ID for Online Government Services)",
      "Cannabis Worker/Associate Attestation",
      "Claim Rural Home Owner Grant",
      "Commissioner for Taking Affidavits (limited authority)",
      "Community Crisis Fund",
      "Corporate Registry Services",
      "Court Registry Services",
      "Elections BC",
      "Exam Invigilation Services- please call the office to set up an appointment",
      "Fishing (Angling) Licences",
      "Forestry Worker Support Program",
      "Guide Outfitter Exams",
      "Hunting Licence (BC Resident)",
      "ICBC Driver Licence Services",
      "Identity Verification",
      "Industry Training Authority (ITA) Exams",
      "Manufactured Home Searches, Relocation Permits and Initial Registrations",
      "Medical Services Plan/Health Insurance BC",
      "Personal Property (Motor Vehicle) Lien Search",
      "Pesticide Exams",
      "Residential Tenancy Forms and Application Submission",
      "Rural Property Tax Services",
      "Water Rental Payments"
    ],
    "address": {
      "province": "BC",
      "postal_code": "V2G 1R8",
      "region": "British Columbia",
      "county": "Cariboo",
      "locality": "Williams Lake",
      "label": "540 Borland St, Williams Lake, BC, Canada"
    },
    "locale": "Williams Lake",
    "website": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc/service-bc-location-williams-lake",
    "serviceType": "ServiceBC",
    "latitude": 52.130302,
    "longitude": -122.138063
  }
]);

// Add ICBC data
db.locations.insertMany([
  {
    contact: { phone: "(250) 787-3350" },
    services: ["Driver Licensing"],
    address: {
      province: "BC",
      label: "10600 - 100th St.",
      locality: "Fort St. John",
      postal_code: "",
      region: "British Columbia",
      county: "Peace River",
    },
    serviceType: "ICBC",
    latitude: "56.252076",
    longitude: "-120.847403",
    website: "https://www.icbc.com/driver-licensing/Pages/default.aspx",
    locale: "Fort St. John Service BC centre",
  },
  {
    contact: { phone: "(250) 636-2294" },
    services: ["Driver Licensing"],
    address: {
      province: "BC",
      label: "703 Brightwell St.",
      locality: "Stewart",
      postal_code: "V0T 1W0",
      region: "British Columbia",
      county: "Kitimat-Stikine",
    },
    serviceType: "ICBC",
    latitude: "55.939018",
    longitude: "-129.99075",
    website: "https://www.icbc.com/driver-licensing/Pages/default.aspx",
    locale: "Stewart Service BC centre",
  },
  {
    contact: { phone: "(250) 774-5555" },
    services: ["Driver Licensing"],
    address: {
      province: "BC",
      label: "A7-5319 50th Ave. S. ",
      locality: "Fort Nelson 2",
      postal_code: "V0C 1R0",
      region: "British Columbia",
      county: "Northern Rockies",
    },
    serviceType: "ICBC",
    latitude: "58.8044321",
    longitude: "-122.7066311",
    website: "https://www.icbc.com/driver-licensing/Pages/default.aspx",
    locale: "Fort Nelson Service BC (centreTown Square)",
  },
  {
    contact: { phone: "(250) 771-3700" },
    services: ["Driver Licensing"],
    address: {
      province: "BC",
      label: "Block D Hwy 37 North",
      locality: "Dease Lake 9",
      postal_code: "",
      region: "British Columbia",
      county: "Kitimat-Stikine",
    },
    serviceType: "ICBC",
    latitude: "58.437379",
    longitude: "-129.991179",
    website: "https://www.icbc.com/driver-licensing/Pages/default.aspx",
    locale: "Dease Lake Service BC centre",
  },
  {
    contact: { phone: "(250) 651-7595" },
    services: ["Driver Licensing"],
    address: {
      province: "BC",
      label: "100 - 3rd st",
      locality: "Atlin-Teslin Indian Cemetery 4",
      postal_code: "",
      region: "British Columbia",
      county: "Stikine",
    },
    serviceType: "ICBC",
    latitude: "59.56752767",
    longitude: "-133.701725",
    website: "https://www.icbc.com/driver-licensing/Pages/default.aspx",
    locale: "Atlin Service BC centre ",
  }
]);

// Add Courts data
db.locations.insertMany([
  {
    "address": {
      "label": "1300 - 4th Avenue, Valemount, BC",
      "locality": "Valemount",
      "postal_code": "V0E 2Z0",
      "province": "BC",
      "region": "British Columbia",
      "street": "1300 - 4th Avenue"
    },
    "contact": {
      "fax": "(250)566-4620",
      "phone": "(250)566-4652"
    },
    "latitude": 52.826355,
    "locale": "Valemount provincial",
    "longitude": -119.267277,
    "serviceType": "Courts",
    "services": [
      "Processing bail applications, pardon applications and waivers",
      "Fine payments",
      "Traffic disputes"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/justice/courthouse-services"
  },
  {
    "address": {
      "label": "222 Main Street, Vancouver, BC",
      "locality": "Vancouver",
      "postal_code": "V6A 2S8",
      "province": "BC",
      "region": "British Columbia",
      "street": "222 Main Street"
    },
    "contact": {
      "fax": "(604)775-1134",
      "phone": "(604)660-4239"
    },
    "latitude": 49.282955,
    "locale": "Vancouver provincial",
    "longitude": -123.099662,
    "serviceType": "Courts",
    "services": [
      "Processing bail applications, pardon applications and waivers",
      "Fine payments",
      "Traffic disputes"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/justice/courthouse-services"
  },
  {
    "address": {
      "label": "1366 Aster Street, Pemberton, BC",
      "locality": "Pemberton",
      "postal_code": "V0N2L0",
      "province": "BC",
      "region": "British Columbia",
      "street": "1366 Aster Street"
    },
    "contact": {
      "fax": "-",
      "phone": "(604)981-0200"
    },
    "latitude": 50.321284,
    "locale": "Pemberton provincial",
    "longitude": -122.808952,
    "serviceType": "Courts",
    "services": [
      "Processing bail applications, pardon applications and waivers",
      "Fine payments",
      "Traffic disputes"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/justice/courthouse-services"
  },
  {
    "address": {
      "label": "615 Main Street, Lillooet, BC",
      "locality": "Lillooet",
      "postal_code": "V0K1V0",
      "province": "BC",
      "region": "British Columbia",
      "street": "615 Main Street"
    },
    "contact": {
      "fax": "-",
      "phone": "(250)828-4344"
    },
    "latitude": 50.693708,
    "locale": "Lillooet law courts",
    "longitude": -121.933537,
    "serviceType": "Courts",
    "services": [
      "Processing bail applications, pardon applications and waivers",
      "Fine payments",
      "Traffic disputes"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/justice/courthouse-services"
  },
  {
    "address": {
      "label": "5216 Morven Street, New Aiyansh, BC",
      "locality": "New Aiyansh",
      "postal_code": "V0J 1A0",
      "province": "BC",
      "region": "British Columbia",
      "street": "5216 Morven Street"
    },
    "contact": {
      "fax": "(250)638-2123",
      "phone": "(250)638-2111"
    },
    "latitude": 55.206424,
    "locale": "New aiyansh",
    "longitude": -129.083061,
    "serviceType": "Courts",
    "services": [
      "Processing bail applications, pardon applications and waivers",
      "Fine payments",
      "Traffic disputes"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/justice/courthouse-services"
  }
]);

// Add Hospital data
db.locations.insertMany([
  {
    "address": {
      "label": "8407 112 Avenue , Fort St. John, BC, Peace River North, BC",
      "locality": "Fort St. John General Hospital & Peace Villa",
      "postal_code": "V1J 0J5",
      "province": "BC",
      "region": "British Columbia",
      "street": "8407 112 Avenue , Fort St. John, BC"
    },
    "contact": {
      "fax": null,
      "phone": "250-262-5200"
    },
    "latitude": 56.256037,
    "locale": "Fort St. John General Hospital & Peace Villa",
    "longitude": -120.816344,
    "serviceType": "HealthBC",
    "services": [
      "Emergency care",
      "Surgery",
      "Diagnostic tests",
      "In-patient care",
      "Primary care"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/health"
  },
  {
    "address": {
      "label": "1275 7th Avenue, Hope, BC, Hope, BC",
      "locality": "Fraser Canyon Hospital",
      "postal_code": "V0X 1L4",
      "province": "BC",
      "region": "British Columbia",
      "street": "1275 7th Avenue, Hope, BC"
    },
    "contact": {
      "fax": null,
      "phone": "604-869-5656"
    },
    "latitude": 49.377254,
    "locale": "Fraser Canyon Hospital",
    "longitude": -121.423896,
    "serviceType": "HealthBC",
    "services": [
      "Emergency care",
      "Surgery",
      "Diagnostic tests",
      "In-patient care",
      "Primary care"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/health"
  },
  {
    "address": {
      "label": "543 Front Street, Quesnel, BC, Quesnel, BC",
      "locality": "G.R. Baker Memorial Hospital",
      "postal_code": "V2J 2K7",
      "province": "BC",
      "region": "British Columbia",
      "street": "543 Front Street, Quesnel, BC"
    },
    "contact": {
      "fax": null,
      "phone": "250-985-5600"
    },
    "latitude": 52.981336,
    "locale": "G.R. Baker Memorial Hospital",
    "longitude": -122.499541,
    "serviceType": "HealthBC",
    "services": [
      "Emergency care",
      "Surgery",
      "Diagnostic tests",
      "In-patient care",
      "Primary care"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/health"
  },
  {
    "address": {
      "label": "835 - 9th Avenue South, Golden, BC, Golden, BC",
      "locality": "Golden and District General Hospital",
      "postal_code": "V0A 1H0",
      "province": "BC",
      "region": "British Columbia",
      "street": "835 - 9th Avenue South, Golden, BC"
    },
    "contact": {
      "fax": null,
      "phone": "250-344-5271"
    },
    "latitude": 51.297226,
    "locale": "Golden and District General Hospital",
    "longitude": -116.966551,
    "serviceType": "HealthBC",
    "services": [
      "Emergency care",
      "Surgery",
      "Diagnostic tests",
      "In-patient care",
      "Primary care"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/health"
  },
  {
    "address": {
      "label": "3209 Oceanview Drive, Queen Charlotte, BC, Queen Charlotte, BC",
      "locality": "Haida Gwaii Hospital and Health Centre - Xaayda Gwaay Ngaaysdll Naay",
      "postal_code": "V0T 1S1",
      "province": "BC",
      "region": "British Columbia",
      "street": "3209 Oceanview Drive, Queen Charlotte, BC"
    },
    "contact": {
      "fax": null,
      "phone": "250-559-4301"
    },
    "latitude": 53.2548118,
    "locale": "Haida Gwaii Hospital and Health Centre - Xaayda Gwaay Ngaaysdll Naay",
    "longitude": -132.0705826,
    "serviceType": "HealthBC",
    "services": [
      "Emergency care",
      "Surgery",
      "Diagnostic tests",
      "In-patient care",
      "Primary care"
    ],
    "website": "https://www2.gov.bc.ca/gov/content/health"
  }
]);

// Add BCHousing data
db.locations.insertMany([
  {
    "address": {
      "label": "451 Winnipeg Street, Penticton, BC V2A 5M6",
      "locality": "Penticton",
      "postal_code": "V2A 5M6",
      "province": "BC",
      "region": "British Columbia",
      "street": "541 Winnipeg Street"
    },
    "contact": {
      "fax": "250-492-1080",
      "phone": "250-493-0301"
    },
    "latitude": 49.4961791,
    "locale": "Interior Region Office",
    "longitude": -119.5946708,
    "serviceType": "BCHousing",
    "services": [
    ],
    "website": "https://www.bchousing.org/contact"
  },
  {
    "address": {
      "label": "Suite 510-369 Terminal Avenue, Vancouver, BC V6A 4C4",
      "locality": "Vancouver",
      "postal_code": "V6A 4C4",
      "province": "BC",
      "region": "British Columbia",
      "street": "Suite 510-369 Terminal Avenue"
    },
    "contact": {
      "fax": "604-609-7031",
      "phone": "604-609-7024"
    },
    "latitude": 49.2720971,
    "locale": "Lower Mainland Directly Managed Office",
    "longitude": -123.096949,
    "serviceType": "BCHousing",
    "services": [
    ],
    "website": "https://www.bchousing.org/contact"
  },
  {
    "address": {
      "label": "1380-2nd Avenue, Prince George, BC V2L 3B5",
      "locality": "Prince George",
      "postal_code": "V2L 3B5",
      "province": "BC",
      "region": "British Columbia",
      "street": "1380-2nd Avenue"
    },
    "contact": {
      "fax": "250-562-6488",
      "phone": "250-562-9251"
    },
    "latitude": 53.9182494,
    "locale": "Northern Region Office",
    "longitude": -122.7490703,
    "serviceType": "BCHousing",
    "services": [
    ],
    "website": "https://www.bchousing.org/contact"
  },
  {
    "address": {
      "label": "Suite 201-3440 Douglas Street, Victoria, BC V8Z 3L5",
      "locality": "Victoria",
      "postal_code": "V8Z 3L5",
      "province": "BC",
      "region": "British Columbia",
      "street": "Suite 201-3440 Douglas Street"
    },
    "contact": {
      "fax": "250-475-7551",
      "phone": "250-475-7550"
    },
    "latitude": 48.4537354,
    "locale": "Vancouver Island Region Office",
    "longitude": -123.3763093,
    "serviceType": "BCHousing",
    "services": [
    ],
    "website": "https://www.bchousing.org/contact"
  },
  {
    "address": {
      "label": "Suite 1701-4555 Kingsway, Burnaby, BC V5H 4V8",
      "locality": "Burnaby",
      "postal_code": "V5H 4V8",
      "province": "BC",
      "region": "British Columbia",
      "street": "Suite 1701-4555 Kingsway"
    },
    "contact": {
      "fax": "604-525-8201",
      "phone": "604-433-1711"
    },
    "latitude": 49.2300059,
    "locale": "Lower Mainland Non Profit Office",
    "longitude": -123.0054658,
    "serviceType": "BCHousing",
    "services": [
    ],
    "website": "https://www.bchousing.org/contact"
  }
]);

// Add LastUpdated data
db.updatedates.insertMany([
  {
    serviceType: "BCHousing",
    dateModified: ISODate("2023-07-17T22:55:50.805Z"),
  },
  {
    serviceType: "Courts",
    dateModified: ISODate("2023-07-17T22:56:14.918Z"),
  },
  {
    serviceType: "ServiceBC",
    dateModified: ISODate("2023-07-17T22:56:44.817Z"),
  },
  {
    serviceType: "ICBC",
    dateModified: ISODate("2023-07-17T22:57:06.524Z"),
  },
  {
    serviceType: "HealthBC",
    dateModified: ISODate("2023-07-17T22:58:12.866Z"),
  },
]);

// Add Service BC
db.reports.insertMany([
  {
    "latitude" : 48.47775,
    "longitude" : -123.40393,
    "time" : ISODate("2023-07-04T17:25:26.041Z"),
    "eventType" : "Suggestion/Complaint",
    "details" : "The front lawn at Camosun College is a wreck!",
},
{
  "latitude" : 48.49047,
  "longitude" : -123.41627,
  "time" : ISODate("2023-07-04T17:55:46.616Z"),
  "eventType" : "Animal Sighting",
  "details" : "Goose on the loose at college campus",
}
]);
