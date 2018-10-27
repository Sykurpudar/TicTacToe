//scoreBoard.test.js
"use strict";

const ScoreBoard = require("./scoreBoard.js");

it('ScoreBoard constructor sets the correct values', () => {
  const obj = new ScoreBoard();
  expect(obj.xPoints).toBe(0);
  expect(obj.oPoints).toBe(0);
});

test("Check score for X", () => {
	const testScore = new ScoreBoard();
	expect(testScore.getXPoints()).toBe(0);
});

test("Check score for O", () => {
	const testScore = new ScoreBoard();
	expect(testScore.getOPoints()).toBe(0);
});

test("Check increment for X", () => {
	const testScore = new ScoreBoard();
	testScore.incrementX();
	expect(testScore.getXPoints()).toBe(1);
});

test("Check increment for O", () => {
	const testScore = new ScoreBoard();
	testScore.incrementX();
	expect(testScore.getXPoints()).toBe(1);
});