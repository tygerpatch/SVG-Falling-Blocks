// The row, column arguments represent center of shape.
// That way Shape can be placed anywhere on board.
function IShape() {

   this.setColor = IShape_setColor;

   // Each shape is made up of four squares.
   this.squares = new Array();
   this.positions = new Array();

   for(var i = 0; i < 4; i++) {
      this.squares[i] = new Square();
      this.squares[i].setSize(20);

      this.positions[i] = new Position();
   }

   this.positions[0].setRow(-2);
   this.positions[0].setColumn(0);

   this.positions[1].setRow(-1);
   this.positions[1].setColumn(0);

   this.positions[2].setRow(0);
   this.positions[2].setColumn(0);

   this.positions[3].setRow(1);
   this.positions[3].setColumn(0);

   this.appendTo = IShape_appendTo;
}


function IShape_setColor(color) {
   for(i in this.squares) {
      this.squares[i].setColor(color);
   }
}

function IShape_setCenterXCoordinates(x) {
   this.center.setXCoordinate(x);
}

function IShape_setCenterYCoordinate(y) {
   this.center.setYCoordinate(y);
}


function IShape_appendTo(svg, center) {
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

// --

// TODO: IShape inherits from Shape
// IShape.prototype = new Shape();
