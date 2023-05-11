db = new Mongo().getDB('wf-db');

db.createUser({
    user: "wf-admin",
    pwd: "wf-admin",
    roles: [{role: 'readWrite', db: 'wf-db'}],
});

db.createCollection("requests", {capped: false});