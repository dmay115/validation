/** Database config for database. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

let db = new Client({
    user: "derek",
    host: "localhost",
    database: "books",
    password: "new_password", // or omit this line altogether
    port: 5432, // or your PostgreSQL port
});

db.connect();

module.exports = db;
