db = new Mongo().getDB('wf-db');

db.createUser({
    user: "wf-admin",
    pwd: "wf-admin",
    roles: [{role: 'readWrite', db: 'wf-db'}],
});

db.createCollection("locations", {capped: false});
db.locations.insertMany([
    {
        External_Site: "",
        Address: "123 Street",
        Locality: "Victoria",
        Site_Phone_No: "555-555-5555",
        Site_Fax_no: "555-555-1234",
        Website_URL: "https://google.ca",
        Site_Email: "anEmail@email.com",
        Latitude: 10.27,
        Longitude: 13.43,
        Office_Code: "00073"
    },
    {
        External_Site: "",
        Address: "124 Street",
        Locality: "Victoria",
        Site_Phone_No: "555-555-5555",
        Site_Fax_no: "555-555-1234",
        Website_URL: "https://google.ca",
        Site_Email: "anEmail@email.com",
        Latitude: 10.27,
        Longitude: 13.43,
        Office_Code: "00073"
    },
    {
        External_Site: "",
        Address: "125 Street",
        Locality: "Victoria",
        Site_Phone_No: "555-555-5555",
        Site_Fax_no: "555-555-1234",
        Website_URL: "https://google.ca",
        Site_Email: "anEmail@email.com",
        Latitude: 10.27,
        Longitude: 13.43,
        Office_Code: "00073"
    },
    {
        External_Site: "",
        Address: "126 Street",
        Locality: "Victoria",
        Site_Phone_No: "555-555-5555",
        Site_Fax_no: "555-555-1234",
        Website_URL: "https://google.ca",
        Site_Email: "anEmail@email.com",
        Latitude: 10.27,
        Longitude: 13.43,
        Office_Code: "00073"
    },
    {
        External_Site: "",
        Address: "127 Street",
        Locality: "Victoria",
        Site_Phone_No: "555-555-5555",
        Site_Fax_no: "555-555-1234",
        Website_URL: "https://google.ca",
        Site_Email: "anEmail@email.com",
        Latitude: 10.27,
        Longitude: 13.43,
        Office_Code: "00073"
    },
])