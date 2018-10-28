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

	getValue(location) { // Returns what is in the grid at the location(index)
		return this.grid[location];
	}

	setValue(location, value) { // Sets what is in the grid at the location(index)
		this.grid[location] = value;
	}

	updateBoard(location, value) { // Updates the value in the html square
		document.getElementById(location).innerHTML = value;
	}

	isAvailable(location) { // Returns if grid at location is empty/available
		if(this.grid[location] === '') {
			return true;
		}
		else{
			return false;
		}
	}

	hasWinningTrio() { // Returns true if someone has won
		for (var i = this.winningTrios.length - 1; i >= 0; i--) {
			var trio = this.winningTrios[i]; 
			// Checks if all values in grid, of the same indexes in winning trio, are the same
			if(this.grid[trio[0]] === this.grid[trio[1]] && this.grid[trio[0]] === this.grid[trio[2]]) {
				if(this.grid[trio[0]] === "") {
					//Continue with for loop if the values are empty strings
				}
				else {
					return true; // Else it is X or O so we have a winner!
				}
			}
		}
		return false;
	}

	clearBoard() { // Ereases values in board
		this.grid = ['','','','','','','','','']; 
	}

	clearHTMLBoard() { // Ereases values in html square
		for(var i = 0; i < 9; i++){
			document.getElementById(i).innerHTML = '';
		}
	}

	isFull() { // returns if grid has no empty string
		for(var i = 0; i < 9; i++) {
			if(this.getValue(i) === '') {
				return false;
			}
		}
		return true;
	}
}

module.exports = Board;
