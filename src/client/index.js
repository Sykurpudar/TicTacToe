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
function getHTMLgrid(){
	var squares = document.querySelectorAll('[class*="square"]');
	return squares;
}


/*
	Main function for our game logic
*/

//while(!game.isOver()){
	const currentGame = new Game('X','O','X');

var squares = getHTMLgrid();
var makeMove = function() {
	var id = this.getAttribute("id");
	currentGame.makeMove(id);
};

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', makeMove, false);
}


/*
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', makeMove, false);
}

function makeMove() {
	this.
}
*/

	
//}
