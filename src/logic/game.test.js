//game.test.js
"use strict";

const Game = require('./game.js');
/*
it('Game constructor sets the correct values', () => {
  const obj = new Game('X', 'O');
 	expect(toString(obj.playerX)).toMatch('X');
	expect(toString(obj.playerO)).toMatch('O');
	var grid = ['','','','','','','','',''];
	expect(obj.board.grid).toEqual(grid);
});
*/
test("Check to see if playerx does not start on round 2", () => {
	const testGame = new Game();
	testGame.round = 2;
	expect(testGame.xTurn()).toBeFalsy();
});

test("Check if makes move on index 1 changes board value to X", () => {
	const testGame = new Game();
	testGame.makeMove(1);
	expect(testGame.board.getValue(1)).toMatch("X");
});

test("Check if makes move on index 2 changes board value to O", () => {
	const testGame = new Game();
	testGame.round = 4;
	testGame.makeMove(2);
	expect(testGame.board.getValue(2)).toMatch("O");
});
