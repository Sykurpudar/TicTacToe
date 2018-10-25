//board.test.js
"use strict";

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

test("Cant change value at already used location", () => {
	const testBoard = new Board();
	testBoard.setValue(3, 'X');
	testBoard.setValue(3, 'O');
	expect(testBoard.getValue(3)).toBe('X');
});

test("Check if board is filled out", () => {
	const testBoard = new Board();
	for(var i = 0; i < 9; i++){
		testBoard.setValue(i, 'X');
	}
	expect(testBoard.isFull()).toBe(true);
});

test("Check if board is filled out", () => {
	const testBoard = new Board();
	testBoard.setValue(0, 'X');
	testBoard.setValue(1, 'O');
	testBoard.setValue(2, 'X');
	expect(testBoard.isFull()).toBe(false);
});

test("Check if unused area is avalible", () => {
	const testBoard = new Board();
	expect(testBoard.isAvalible(0)).toBe(true);
});

test("Check if used area is avalible", () => {
	const testBoard = new Board();
	testBoard.setValue(0, 'X');
	expect(testBoard.isAvalible(0)).toBe(false);
});

test("Check if horizontal lines produce a winning trio", () => {
	const testBoard = new Board();
	testBoard.setValue(3, 'X');
	testBoard.setValue(4, 'X');
	testBoard.setValue(5, 'X');
	expect(testBoard.hasWinnigTrio()).toBe(true);
});

test("Check if vertical lines produce a winning trio", () => {
	const testBoard = new Board();
	testBoard.setValue(1, 'X');
	testBoard.setValue(4, 'X');
	testBoard.setValue(7, 'X');
	expect(testBoard.hasWinnigTrio()).toBe(true);
});

test("Check if diagonal lines produce a winning trio", () => {
	const testBoard = new Board();
	testBoard.setValue(0, 'X');
	testBoard.setValue(4, 'X');
	testBoard.setValue(8, 'X');
	expect(testBoard.hasWinnigTrio()).toBe(true);
});


