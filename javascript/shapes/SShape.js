function SShape() {
   this.squares[0].setXCoordinate(0);
   this.squares[0].setYCoordinate(0 - Shape.SQUARE_SIZE);

   this.squares[1].setXCoordinate(0 + Shape.SQUARE_SIZE);
   this.squares[1].setYCoordinate(0 - Shape.SQUARE_SIZE);

   this.squares[2].setXCoordinate(0 - Shape.SQUARE_SIZE);
   this.squares[2].setYCoordinate(0);

   this.squares[3].setXCoordinate(0);
   this.squares[3].setYCoordinate(0);
}

// SShape inherits from Shape
SShape.prototype = new Shape();
