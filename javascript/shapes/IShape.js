function IShape() {
	this.squares[0].setXCoordinate(this.left);
	this.squares[0].setYCoordinate(this.top - (Shape.SQUARE_SIZE * 2));

	this.squares[1].setXCoordinate(this.left);
	this.squares[1].setYCoordinate(this.top - Shape.SQUARE_SIZE);

	this.squares[2].setXCoordinate(this.left);
	this.squares[2].setYCoordinate(this.top);

	this.squares[3].setXCoordinate(this.left);
	this.squares[3].setYCoordinate(this.top + Shape.SQUARE_SIZE);
}

// IShape inherits from Shape
IShape.prototype = new Shape();
