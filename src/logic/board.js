//board.js

class Board{
	constructor(){
		this.grid = ['','','','','','','','',''];
	}

	getValue(location){
		return this.grid[location];
	}

	setValue(location, value){
		if(this.isEmpty(location)){
			this.grid[location] = value;
		}
	}

	isEmpty(location){
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