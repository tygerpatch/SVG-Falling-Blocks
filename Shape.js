// The row, column arguments represent center of shape.
// That way Shape can be placed anywhere on board.
function Shape() {
   this.setColor = Shape_setColor;

   // Each shape is made up of four squares.
   this.squares = new Array();
   this.positions = new Array();

   for(var i = 0; i < 4; i++) {
      this.squares[i] = new Square();
      this.squares[i].setSize(20);

      this.positions[i] = new Position();
   }

   this.appendTo = Shape_appendTo;
   this.detachFrom = Shape_detachFrom;
}


function Shape_setColor(color) {
   for(i in this.squares) {
      this.squares[i].setColor(color);
   }
}

function Shape_setCenterXCoordinates(x) {
   this.center.setXCoordinate(x);
}

function Shape_setCenterYCoordinate(y) {
   this.center.setYCoordinate(y);
}


function Shape_appendTo(svg, center) {
   var square, position, x, y;

   // for each square in the shape
   for(index in this.squares) {
      square = this.squares[index];
      position = this.positions[index];

      x = (square.getSize() * position.getColumn()) + center.getYCoordinate();
      y = (square.getSize() * position.getRow()) + center.getXCoordinate();

      square.setXCoordinate(x);
      square.setYCoordinate(y);

      square.appendTo(svg);
   }
}

function Shape_detachFrom(svg) {
   for(index in this.squares) {
      square = this.squares[index];
      square.detachFrom(svg);
   }
}
