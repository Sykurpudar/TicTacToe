// src/api.test.js
//copy from lab
const request = require("supertest");
const api = require("./api");
describe("GET /game/:name endpoint", () => {
 it("should return a 200 OK status code", async () => {
 const res = await request(api).get("/game/_");
 expect(res.status).toBe(200);
 });
 it("should return the greeting in a object", async () => {
 const res = await request(api).get("/game/Diana");
 expect(res.body.greetings).toBe("Hello, Diana!");
 });
});
