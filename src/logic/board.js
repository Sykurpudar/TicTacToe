//board.js
"use strict";

class Board{
	constructor(){
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

	getValue(location){
		return this.grid[location];
	}

	setValue(location, value){
		if(this.isAvalible(location)){
			this.grid[location] = value;
		}
	}

	isAvalible(location){
		if(this.grid[location] === ''){
			return true;
		}
		else{
			return false;
		}
	}

	hasWinningTrio(){
		for (var i = winningTrios.length - 1; i >= 0; i--) {
			var trio = winningTrios[i]
			if(	trio[0] === trio[1] && trio[0] === tiro[2]){
				return true;
			}	
		}
		return false;
	}

	isFull(){
		for(var i = 0; i < 9; i++){
			if(this.getValue(i) === ''){
				return false;
			}
		}
		return true;
	}
}

module.exports = Board;