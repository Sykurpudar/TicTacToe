//index.js
"use strict";

const Game = require("../logic/game.js");
/*
const _ = require("lodash");

function component() {
  	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'I am appearing because src/client/index.js is correctly connected!'], ' ');
	return element;
}

document.body.appendChild(component());
*/

//returns all elements with class square
function getHTMLgrid() {
	var squares = document.getElementsByClassName("square");
	return squares;
}

/*
	Main function for our game logic
*/
const currentGame = new Game('X','O');

//while(!currentGame.hasWon() || !currentGame.checkForDraw()) {
	
	var squares = getHTMLgrid();
	var getMove = function() {
		var id = this.getAttribute("id");
		var player = currentGame.getCurrentPlayer();

		console.log(id);
		if(currentGame.board.isAvailable(id)) {
			currentGame.makeMove(id);
			currentGame.board.updateBoard(id, player);
		}
	};

	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', getMove, false);
	}

//}
