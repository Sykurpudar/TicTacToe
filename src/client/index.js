//index.js
"use strict";

const _ = require("lodash");

function component() {
  	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'I am appearing because src/client/index.js is correctly connected!'], ' ');
	return element;
}

document.body.appendChild(component());

