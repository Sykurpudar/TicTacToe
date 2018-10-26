//game.js
"use strict";

const Player = require("./player.js");
const Board = require("./board.js");

class Game {

	constructor(playerX, playerO) {
		this.playerX = new Player();
		this.playerO = new Player();
		this.board = new Board();
		this.round = 0;
	}

	xTurn() {
		if((this.round) % 2 === 0){
			return true;
		}
		else{
			false;
		}
	}

	getCurrentPlayer() {
		if(this.xTurn()) {
			return "X";
		}
		else {
			return "O";
		}
	}

	makeMove(index){
		if(this.board.isAvailable(index)){
			if(this.xTurn()){
  	 			this.board.setValue(index, "X");
	  		}
	  		else{
	  			this.board.setValue(index, "O");
	  		}
			this.round = this.round + 1;
		}
	}

	hasWon() {
		return this.board.hasWinningTrio();
	}

	checkForDraw() {
		if((this.round === 9) && (this.board.hasWinningTrio() === false)) {
			return true;
		}
		return false;
	}
}

module.exports = Game;
