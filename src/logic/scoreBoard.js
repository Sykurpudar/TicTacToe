//scoreBoard.js
"use strict";

class ScoreBoard {
	constructor()
	{
		this.xPoints = 0;
		this.oPoints = 0;
	}

	getXPoints() {
		return this.xPoints;
	}

	getOPoints() {
		return this.oPoints;
	}

	incrementX() {
		this.xPoints++;
	}

	incrementO() {
		this.oPoints++;
	}
}

module.exports = ScoreBoard;