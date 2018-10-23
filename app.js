//Copy from lab
/*const app = require("./src/server/api");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log("Server running on port " + PORT);
});*/

const express = require("express");
const app = express();
const api = require("./src/server/api");

// For all queries to localhost:3000/api/...
// use the API router (see below)
app.use("/api", api);

// For any other route (URL) just send an error
app.get("*", (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

module.exports = app;
