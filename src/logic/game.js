//game.js
"use strict";

const Player = require("./player.js");
const Board = require("./board.js");

class Game {

	constructor(playerX, playerO) {
		this.playerX = new Player();
		this.playerO = new Player();
		this.board = new Board();
		this.round = 1;
  	}

		xTurn () {
			if((this.round) % 2 == 1){
				return true ; 
			}
			else {
				return false;
			}
		}

  	makeMove(index){
			var xTurn = this.xTurn();
			if (this.board.isAvailible(index)){
				if(xTurn) {
					this.board.setValue(index, "X")
				}
				else {
					this.board.setValue(index, "O")
				}
				this.round = this.round + 1;
			}
		}

}

module.exports = Game;
