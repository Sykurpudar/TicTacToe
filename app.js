//app.js
"use strict";

const express = require("express");
const app = express();
const api = require("./src/server/api");

app.use("/api", api);

app.use(express.static(__dirname +'/public/'));

app.get("/test/", (req, res) => {
  res.redirect('/testResults/lcov-report/index.html');
});

module.exports = app;

