//game.test.js
"use strict";

const Game = require('./game.js');

test("Check to see if playerx does start on round 2", () => {
	const testGame = new Game();
	testGame.round = 2;
	expect(testGame.xTurn()).toBeTruthy();
});

test("Check if makes move on index 1 changes board value to X", () => {
	const testGame = new Game();
	testGame.makeMove(1);
	expect(testGame.board.getValue(1)).toMatch("X");
});

test("Check if makes move on index 3 changes board value to O", () => {
	const testGame = new Game();
	testGame.round = 3;
	testGame.makeMove(3);
	expect(testGame.board.getValue(3)).toMatch("O");
});

test("Checks if the game has been won on empty grid", () => {
	const testGame = new Game();
	testGame.board.grid = ['','','','','','','','',''];
	expect(testGame.hasWon()).toBeFalsy();
});

test("Checks if the game has been won", () => {
	const testGame = new Game();
	testGame.board.grid = ['X','X','X','O','O','','','',''];
	expect(testGame.hasWon()).toBeTruthy();
});

test("Checks if the game has not been won", () => {
	const testGame = new Game();
	testGame.board.grid = ['O','O','X','X','X','O','O','X','X'];
	expect(testGame.hasWon()).toBeFalsy();
});

test("Checks if games ends in draw", () => {
	const testGame = new Game();
	testGame.round = 9;
	testGame.board.grid = ['O','O','X','X','X','O','O','X','X'];
	expect(testGame.checkForDraw()).toBeTruthy();
});

test("Checks if games dose not end in draw", () => {
	const testGame = new Game();
	testGame.round = 9;
	testGame.board.grid = ['O','X','O','X','O','O','X','X','X'];
	expect(testGame.checkForDraw()).toBeFalsy();
});

test("Checks if game ends in draw", () => {
	const testGame = new Game();
	testGame.makeMove(2);
 	testGame.makeMove(1);
	testGame.makeMove(4);
	testGame.makeMove(0);
	testGame.makeMove(8);
	testGame.makeMove(5);
	testGame.makeMove(3);
	testGame.makeMove(6);
	testGame.makeMove(7);
	expect(testGame.checkForDraw()).toBeTruthy();
});

test("Checks if current player is X when round is 2", () => {
	const testGame = new Game();
	testGame.round = 2;
	expect(testGame.getCurrentPlayer()).toBe("X");
});

test("Checks if current player is O when round is 3", () => {
	const testGame = new Game();
	testGame.round = 3;
	expect(testGame.getCurrentPlayer()).toBe("O");
});