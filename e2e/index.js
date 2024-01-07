var express = require("express");
var cors = require("cors");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
var mysql = require("mysql");













a