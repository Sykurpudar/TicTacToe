// src/server/api.js
const express = require("express");
const app = express();
const game = require("../logic/game");
// copy from lab
app.get("/game/:name", (req, res) => {
  res.status(200);
 	res.send({greetings: "Hello, " + req.params.name + "!"})
});
module.exports = app;
