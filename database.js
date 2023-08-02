const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  database: "pokemon",
  user: "root",
  password: "rafaelx",
});

module.exports = connection;