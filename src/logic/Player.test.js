const Player = require("./Player");


it('Player constructor sets the correct values', () => {
  const obj = new Player('X', 1);
  expect(obj.player).toMatch('X');
  expect(obj.myTurn).toBe(1);
});

