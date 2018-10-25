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

it('empty test to justify file', () => {
  
  expect(true).toBe(true);
});

