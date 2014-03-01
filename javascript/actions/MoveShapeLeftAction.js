function MoveShapeLeftAction(board) {

   // store reference to Tetris board
   this.board = board;

   this.isValidMove = function(shape) {
      var squares = shape.getSquares();

      // for each square in shape
      for(var i = 0; i < squares.length; i++) {
         this.newx[i] = squares[i].getXCoordinate() - Shape.SQUARE_SIZE;
         this.newy[i] = squares[i].getYCoordinate();

         column = (this.newx[i]/Shape.SQUARE_SIZE);
         row = (squares[i].getYCoordinate()/Shape.SQUARE_SIZE);

         if(this.outOfBounds(row, column) || this.isOccupied(row, column)) {
            return false;
         }
      }

      return true;
   }
}

// MoveShapeLeftAction inherits from MoveShapeAction
MoveShapeLeftAction.prototype = new MoveShapeAction();
