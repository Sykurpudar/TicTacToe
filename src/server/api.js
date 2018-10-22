// src/server/api.js
const express = require("express");
const app = express();
const game = require("../logic/game");

app.get("/game/", (req, res) => {
  res.status(200);
 	res.send();
});
module.exports = app;
