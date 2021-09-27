const { appendFileSync } = require("fs");
var mysql = require("mysql");
var express = require("express");
var app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Passw0rd",
  database: "krediidijorsid",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});
app.listen(8080);
