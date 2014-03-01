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
}

Shape.SQUARE_SIZE = 20;
