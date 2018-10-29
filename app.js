//app.js
"use strict";

const express = require("express");
const app = express();
const api = require("./src/server/api");

// For all queries to localhost:3000/api/...
// use the API router (see below)
app.use("/api", api);

app.use(express.static(__dirname +'/public/'));

app.get("/test/", (req, res) => {
  res.redirect('https://sykur-testresults.herokuapp.com/');
});


module.exports = app;

