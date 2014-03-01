function MoveShapeClockwiseAction(board) {

   // store reference to Tetris board
   this.board = board;

   this.isValidMove = function(shape) {
      var squares = shape.getSquares();

      // variables to store calculations done on each square
      var x, y, row, column, tmp;

      // Since this algorithm rotates around the first square,
      // the first thing we need to do is determine where
      // it is located on the grid
      var r = squares[0].getYCoordinate()/Shape.SQUARE_SIZE;
      var c = squares[0].getXCoordinate()/Shape.SQUARE_SIZE;

      // test if rotation is legal
      for(var i = 0; i < squares.length; i++) {

         // get x and y coordinates of square
         x = squares[i].getXCoordinate()
         y = squares[i].getYCoordinate();

         // determine where this square is located on the grid
         row = (y/Shape.SQUARE_SIZE);
         column = (x/Shape.SQUARE_SIZE);

         // do rotation
         tmp = row - r;
         row = column - c;
         column = -tmp;

         // calculate the new x and y coordinates
         x = (column + c) * Shape.SQUARE_SIZE
         y = (row + r) * Shape.SQUARE_SIZE

         // store these new coordinates incase move is legal
         this.newx[i] = x;
         this.newy[i] = y;

         // determine where this new location is on the grid
         row = (y/Shape.SQUARE_SIZE);
         column = (x/Shape.SQUARE_SIZE);

         if(this.outOfBounds(row, column) || this.isOccupied(row, column)) {
            return false;
         }
      }

      return true;
   }
}

// MoveShapeClockwiseAction inherits from MoveShapeAction
MoveShapeClockwiseAction.prototype = new MoveShapeAction();
