//game.test.js
"use strict";

const Game = require('./game.js');

it('Game constructor sets the correct values', () => {
  const obj = new Game('X', 'O', 'X');
  expect(obj.playerX).toMatch('X');
	expect(obj.playerO).toMatch('O');
  expect(obj.currentPlayer).toMatch('X');
});
