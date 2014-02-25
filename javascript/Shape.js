// The row, column arguments represent center of shape.
// That way Shape can be placed anywhere on board.
function Shape() {

	this.setColor = function(color) {
		this.color = color;

		for(var i = 0; i < this.squares.length; i++) {
			this.squares[i].setColor(color);
		}
	}

	this.getColor = function() {
		return this.color;
	}

	this.getSquares = function() {
		return this.squares;
	}

	// Each shape is made up of four squares.
	this.squares = new Array();

	for(var i = 0; i < 4; i++) {
		this.squares[i] = new Square();
		this.squares[i].setSize(Shape.SQUARE_SIZE);
	}

	this.appendTo = function(svg) {
		for(var i = 0; i < this.squares.length; i++) {
			this.squares[i].appendTo(svg);
		}
	}

	this.detachFrom = function(svg) {
		for(var i = 0; i < this.squares.length; i++) {
			this.squares[i].detachFrom(svg);
		}
	}

	this.top = 0;
	this.left = 0;

	this.getLeft = function() {
		return this.left;
	}

	this.setLeft = function(left) {
		this.left = left;

		for(var i = 0; i < this.squares.length; i++) {
			this.squares[i].setXCoordinate(this.squares[i].getXCoordinate() + this.left);
		}
	}

	this.getTop = function() {
		return this.top;
	}

	this.setTop = function(top) {
		this.top = top;

		for(var i = 0; i < this.squares.length; i++) {
			this.squares[i].setYCoordinate(this.squares[i].getYCoordinate() + this.top);
		}
	}
}

Shape.SQUARE_SIZE = 20;
