//game.js
"use strict";

const Player = require("./player.js");
const Board = require("./board.js");

class Game {

	constructor(playerX, playerO) {
		this.playerX = new Player();
		this.playerO = new Player();
		this.board = new Board();
	}

  	makeMove(HTMLgrid){
  		HTMLgrid[4].innerHTML = 'k';
  	}
}

module.exports = Game;
