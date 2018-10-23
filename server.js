// server.js
// We need to separate app and js to avoid
// our tests from leaving open processes.

const app = require("./app");
const port = 8080;

console.log("Server listening on port " + port);
app.listen(process.env.PORT || port);
