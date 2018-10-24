//board.js

class Board{
	constructor(){
		this.grid = ['','','','','','','','',''];
	}

	getValue(location){
		return this.grid[location];
	}

	setValue(location, value){
		this.grid[location] = value;
	}
}

module.exports = Board;