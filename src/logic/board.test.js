//board.test.js

const Board = require('./board.js');

test("Creates a new Board object", () => {
	const testBoard = new Board();
	var grid = ['','','','','','','','',''];
	expect(testBoard.grid).toEqual(grid);
});

test("Check value at location 2 before insert", () => {
	const testBoard = new Board();
	expect(testBoard.getValue(2)).toBe('');
});
