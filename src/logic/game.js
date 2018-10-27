//game.js
"use strict";

const Player = require("./player.js");
const Board = require("./board.js");
const ScoreBoard = require("./scoreBoard.js");

class Game {

	constructor(playerX, playerO) {
		this.playerX = new Player();
		this.playerO = new Player();
		this.board = new Board();
		this.scoreBoard = new ScoreBoard();
		this.round = 0; // game starts with round = 0 and ends in round = 9
	}

	xTurn() {
		if((this.round) % 2 === 0) { // returns true if it's X's turn
			return true;
		}
		else {
			false; // oherwise it's O's turn
		}
	}

	getCurrentPlayer() { // return's the player who's turn it is
		if(this.xTurn()) {
			return "X"; 
		}
		else {
			return "O";
		}
	}

	makeMove(index){ // updates board with X or O if it is available
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

	hasWon() { // returns true if there is a winner in game
		return this.board.hasWinningTrio();
	}

	checkForDraw() { // checks if round = 9 and if there is no winner, then there is a draw
		if((this.board.isFull()) && (this.board.hasWinningTrio() === false)) {
			return true;
		}
		return false;
	}
}

module.exports = Game;
