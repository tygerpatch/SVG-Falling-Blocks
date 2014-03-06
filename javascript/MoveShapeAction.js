function MoveShapeAction(board) {

   // store reference to Tetris board
   this.board = board;

   // variables to store new locations for shape's squares
   this.newx = new Array(4);
   this.newy = new Array(4);

   this.execute = function(shape) {
      if(this.isValidMove(shape)) {
         this.move(shape);
         return true;
      }

      return false;
   }

   this.isValidMove = function(shape) {
      return false;
   }


   this.move = function(shape) {
      var squares = shape.getSquares();

      for(var i = 0; i < squares.length; i++) {
         squares[i].setXCoordinate(this.newx[i]);
         squares[i].setYCoordinate(this.newy[i]);
      }
   }

   this.outOfBounds = function(row, column) {
      if((column < 0) || (column >= NUMBER_COLUMNS)) {
         return true;
      }

      if((row < 0) || (row >= NUMBER_ROWS)) {
         return true;
      }

      return false;
   }

   this.isOccupied = function(row, column) {
      return (Color.NONE != this.board[row][column].getColor());
   }
}

