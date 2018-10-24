//board.test.js

const Board = require('./board.js');

test("Creates a new Board object", () => {
	const testBoard = new Board();
	var grid = ['','','','','','','','',''];
	expect(testBoard.grid).toEqual(grid);
});
