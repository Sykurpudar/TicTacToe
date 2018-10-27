//board.js
"use strict";

class Board{
	constructor() {
		this.grid = ['','','','','','','','',''];

		this.winningTrios = [
			//horizontal winning lines
		    [0,1,2],
		    [3,4,5],
		    [6,7,8],
		    //vertical winning lines
		    [0,3,6],
		    [1,4,7],
		    [2,5,8],
		    //diagonal winning lines
		    [0,4,8],
		    [2,4,6],
		  ];
	}

	getValue(location) {
		return this.grid[location];
	}

	setValue(location, value) {
		this.grid[location] = value;
	}

	updateBoard(location, value) { // updates actual board on 'site'
		document.getElementById(location).innerHTML = value;
	}

	isAvailable(location) {
		if(this.grid[location] === '') {
			return true;
		}
		else{
			return false;
		}
	}

	hasWinningTrio() {
		for (var i = this.winningTrios.length - 1; i >= 0; i--) {
			var trio = this.winningTrios[i]
			if(this.grid[trio[0]] === this.grid[trio[1]] && this.grid[trio[0]] === this.grid[trio[2]]) {
				if(this.grid[trio[0]] === "") {
					//Continue with for loop
				}
				else {
					return true;
				}
			}
		}
		return false;
	}

	clearBoard() {
		this.grid = ['','','','','','','','',''];
	}

	clearHTMLBoard() {
		for(var i = 0; i < 9; i++){
			document.getElementById(i).innerHTML = '';
		}
	}
/*
	isFull() {
		for(var i = 0; i < 9; i++) {
			if(this.getValue(i) === '') {
				return false;
			}
		}
		return true;
	}*/
}

module.exports = Board;
