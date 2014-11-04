var Cell = require('./Cell');

module.exports = function(numColumns) {

	this.cells = [];
	this.effects = [];

	for(var i = 0; i < numColumns; i++) {
		var cell = new Cell();
		this.cells.push(cell);
	}

};

