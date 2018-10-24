const Game = require('./game');

it('Game constructor sets the correct values', () => {
  const obj = new Game('X', 'O', 'X');
  expect(obj.playerX).toMatch('X');
	expect(obj.playerO).toMatch('O');
  expect(obj.currentPlayer).toMatch('X');
});
