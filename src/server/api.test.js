// src/api.test.js

const request = require("supertest");
const api = require("./api");

describe("GET /game/ endpoint", () => {
  it("should return a 200 OK status code", async () => {
  const res = await request(api).get("/game");
  expect(res.status).toBe(200);
  });
});
