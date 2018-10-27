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

	if(currentGame.board.isAvailable(id) && !currentGame.hasWon()) {
		currentGame.makeMove(id);
		currentGame.board.updateBoard(id, player);
		if(currentGame.hasWon()){
			if(player == "X"){
				currentGame.scoreBoard.incrementX();
				document.getElementById("scorex").innerHTML = currentGame.scoreBoard.getXPoints();
			}
			else{
				currentGame.scoreBoard.incrementO();
				document.getElementById("scoreo").innerHTML = currentGame.scoreBoard.getOPoints();
			}
		}
	}
};

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', getMove, false);
}

/*
var x = document.getElementsByClassName("example");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
}
*/