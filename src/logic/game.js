//game.js
"use strict";

const Player = require("./player.js");

class Game {

	constructor(playerX, playerO, currentPlayer) {
		this.playerX = playerX;
		this.playerO = playerO;
		this.currentPlayer = currentPlayer;
  	}

  	makeMove(HTMLgrid){
  		HTMLgrid[4].innerHTML = 'Nice';
  	}
}

module.exports = Game;
