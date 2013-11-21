// The row, column arguments represent center of shape.
// That way Shape can be placed anywhere on board.
function Shape() {

   // Each shape is made up of four squares.
   this.squares = new Array();
   this.positions = new Array();

   for(var i = 0; i < 4; i++) {
      this.squares[i] = new Square();
      this.positions[i] = new Position();

      this.squares[i].setSize(Shape.SQUARE_SIZE);
   }

   this.center = new Position();

   this.setColor = Shape_setColor;
   this.getColor = Shape_getColor;

   this.repaint = Shape_repaint;

   this.appendTo = Shape_appendTo;
   this.detachFrom = Shape_detachFrom;

   this.left = Shape_left;
   this.rotate = Shape_rotate;
   this.right = Shape_right;
   this.drop = Shape_drop;

   this.getPositions = Shape_getPositions;
}

Shape.SQUARE_SIZE = 20;

function Shape_setColor(color) {
   for(i in this.squares) {
      this.squares[i].setColor(color);
   }
}

function Shape_getColor() {
	this.squares[0].getColor();
}

function Shape_appendTo(svg, xOffset, yOffset) {
   this.xOffset = xOffset;
   this.yOffset = yOffset;

   for(index in this.squares) {
      this.squares[index].appendTo(svg);
   }

   this.repaint();
}

function Shape_repaint() {
   var square, position, x, y;

   for(index in this.squares) {
      square = this.squares[index];
      position = this.positions[index];

      x = (Shape.SQUARE_SIZE * position.getColumn()) + this.xOffset;
      square.setXCoordinate(x);

      y = (Shape.SQUARE_SIZE * position.getRow()) + this.yOffset;
      square.setYCoordinate(y);
   }
}

function Shape_rotate() {
   var position, row, column;

   // for each square in the shape
   for(index in this.positions) {
      position = this.positions[index];

      row = position.getRow();
      column = position.getColumn();

      position.setRow(column);
      position.setColumn(-row);
   }

   // Since we changed each of the square's relative position, 
   // we now need to update their X and Y-coordinates.
   this.repaint();
}

function Shape_detachFrom(svg) {
   for(index in this.squares) {
      square = this.squares[index];
      square.detachFrom(svg);
   }
}

function Shape_drop() {
   var square, y;

   for(index in this.squares) {
      square = this.squares[index];

      y = square.getYCoordinate();
      square.setYCoordinate(y + Shape.SQUARE_SIZE);
   }

   this.yOffset = this.yOffset + Shape.SQUARE_SIZE;
}

function Shape_left() {
   var square, x;

   for(index in this.squares) {
      square = this.squares[index];

      x = square.getXCoordinate();
      square.setXCoordinate(x - Shape.SQUARE_SIZE);
   }

   this.xOffset = this.xOffset - Shape.SQUARE_SIZE;
}

function Shape_right() {
   var square, x;

   for(index in this.squares) {
      square = this.squares[index];

      x = square.getXCoordinate();
      square.setXCoordinate(x + Shape.SQUARE_SIZE);
   }

   this.xOffset = this.xOffset + Shape.SQUARE_SIZE;
}

function Shape_getPositions() {
	return this.positions;
}

function Shape_getSquarse() {
	return this.squares;
}
