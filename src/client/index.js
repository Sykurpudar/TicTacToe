//index.js
"use strict";

const Game = require("../logic/game.js");

//Returns all elements with class square
function getHTMLgrid() {
	var squares = document.getElementsByClassName("square");
	return squares;
}
/*
	Main function for our game logic
*/
const currentGame = new Game(); // Initialize new game
var message = document.getElementsByClassName("message");
var squares = getHTMLgrid(); // Our board

var getMove = function() { // Called when a player makes a move
	var id = this.getAttribute("id"); // ID of square, (0-8)
	var player = currentGame.getCurrentPlayer();

	if(currentGame.board.isAvailable(id) && !currentGame.hasWon()) {
		currentGame.makeMove(id); // Changes square that was clicked on to the current player (if available)
		currentGame.board.updateBoard(id, player);
		// If a player has won
		if(currentGame.hasWon()) {
			if(player == "X") {
				currentGame.scoreBoard.incrementX(); // Update score for X player
				document.getElementById("scorex").innerHTML = currentGame.scoreBoard.getXPoints();
				message[0].innerHTML = "X Won!"; 
			}
			else{
				currentGame.scoreBoard.incrementO(); // Update score for O player
				document.getElementById("scoreo").innerHTML = currentGame.scoreBoard.getOPoints();
				message[0].innerHTML = "O Won!";
			}
		}
		// If a draw
		else if(currentGame.checkForDraw()) {
			message[0].innerHTML = "Draw!";
		}
		// Neither has won, continue game
		else {
			message[0].innerHTML = currentGame.getCurrentPlayer() + ", it is your turn!";
		}
	}
};

//Listening for user to click on squares
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', getMove, false);
}

document.getElementById("play-again").onclick = function () { //
	currentGame.board.clearBoard(); // clears board to play again
	currentGame.board.clearHTMLBoard();
	message[0].innerHTML = currentGame.getCurrentPlayer() + ", it is your turn!"
}