//index.js
"use strict";

const Game = require("../logic/game.js");

//returns all elements with class square
function getHTMLgrid() {
	var squares = document.getElementsByClassName("square");
	return squares;
}
/*
	Main function for our game logic
*/
const currentGame = new Game('X','O');

var squares = getHTMLgrid();
var getMove = function() {
	var id = this.getAttribute("id");
	var player = currentGame.getCurrentPlayer();

	if(currentGame.board.isAvailable(id)) {
		currentGame.makeMove(id);
		currentGame.board.updateBoard(id, player);
	}
};

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', getMove, false);
}