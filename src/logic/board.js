//board.js
"use strict";

class Board{
	constructor(){
		this.grid = ['','','','','','','','',''];
	}

	getValue(location){
		return this.grid[location];
	}

	setValue(location, value){
			this.grid[location] = value;
			this.draw(location, value);
	}

	draw(location, value) {
		//for (var i = 0; i < 9; i++) {
			document.getElementById(location).innerHTML = value;
		
	}


	isAvailible(location){
		if(this.grid[location] == ''){
			return true;
		}
		else{
			return false;
		}
	}

	isFull(){
		for(var i = 0; i < 9; i++){
			if(this.getValue(i) == ''){
				return false;
			}
		}
		return true;
	}

}

module.exports = Board;