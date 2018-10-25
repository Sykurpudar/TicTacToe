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

	xTurn() {
		if((this.round) % 2 == 1){
			return true;
		}
		else{
			false;
		}
	}

}

module.exports = Game;
