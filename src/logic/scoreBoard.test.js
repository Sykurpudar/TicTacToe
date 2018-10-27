//scoreBoard.test.js
"use strict";

const ScoreBoard = require("./scoreBoard.js");

it('ScoreBoard constructor sets the correct values', () => {
  const obj = new ScoreBoard();
  expect(obj.xPoints).toBe(0);
  expect(obj.oPoints).toBe(0);
});