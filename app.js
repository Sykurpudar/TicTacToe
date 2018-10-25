//app.js
"use strict";

const express = require("express");
const app = express();
const api = require("./src/server/api");

// For all queries to localhost:3000/api/...
// use the API router (see below)
app.use("/api", api);

app.use(express.static(__dirname +'/testResults/lcov-report/'));
app.get("/test/", (req, res) => {
  //res.status(200);
  res.sendFile(__dirname + '/testResults/lcov-report/index.html');
  //res.sendFile(__dirname + '/index.html');
});

//delegate static load files e.g. css and js
app.use(express.static(__dirname +'/dist'));

//for every other request, return index.html
app.route('/*')
  .get(function(req, res) {
    res.sendFile(__dirname +'/dist' + '/index.html');
});

module.exports = app;
