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

test("Insert value X at location 5 and check value", () => {
	const testBoard = new Board();
	testBoard.setValue(5, 'X');
	expect(testBoard.getValue(5)).toBe('X');
});

test("Insert value O at location 0 and check value", () => {
	const testBoard = new Board();
	testBoard.setValue(0, 'O');
	expect(testBoard.getValue(0)).toBe('O');
});
