// server.js
// We need to separate app and js to avoid
// our tests from leaving open processes.

//app.js
"use strict";

const express = require("express");
const app = express();

app.use(express.static(__dirname));

const port = 8080;

console.log("Server listening on port " + port);

app.listen(process.env.PORT || port);
