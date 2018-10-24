//board.js

class Board{
	constructor(){
		this.grid = ['','','','','','','','',''];
	}

	getValue(location){
		return this.grid[location];
	}
}

module.exports = Board;