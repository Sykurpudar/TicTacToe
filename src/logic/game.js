//game.js
"use strict";

const Board = require("./board.js");
const ScoreBoard = require("./scoreBoard.js");

class Game {

	constructor() {
		this.board = new Board();
		this.scoreBoard = new ScoreBoard();
		this.round = 0; // Helper value to see who's turn it is
	}

	xTurn() {
		if((this.round) % 2 === 0) { // Returns true if it's X's turn
			return true;
		}
		else {
			false; // Otherwise it's O's turn
		}
	}

	getCurrentPlayer() { // Return's the player who's turn it is
		if(this.xTurn()) {
			return "X"; 
		}
		else {
			return "O";
		}
	}

	makeMove(index) { // Updates board with X or O if it is available
		if(this.board.isAvailable(index)) {
			if(this.xTurn()){
  	 			this.board.setValue(index, "X");
	  		}
	  		else {
	  			this.board.setValue(index, "O");
	  		}
			this.round = this.round + 1;
		}
	}

	hasWon() { // Returns true if there is a winner in game
		return this.board.hasWinningTrio();
	}

	checkForDraw() { // Checks if board is full and if there is no winner, then there is a draw
		if((this.board.isFull()) && (this.board.hasWinningTrio() === false)) {
			return true;
		}
		return false;
	}
}

module.exports = Game;
