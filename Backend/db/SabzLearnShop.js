const mysql = require("mysql");

const SabzlearnShopDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cms2",
});

module.exports = SabzlearnShopDB;
