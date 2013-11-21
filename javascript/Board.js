function Board() {

   this.board = new Array(Board.NUMBER_ROWS);

   var square;
   for(var row = 0; row < this.board.length; row++) {
      this.board[row] = new Array(Board.NUMBER_COLUMNS);
      for(var column = 0; column < this.board[row].length; column++) {
         square = new Square();
         square.setSize(20);
         square.setColor(Color.NONE);

         square.setYCoordinate(row * 20);
         square.setXCoordinate(column * 20);

         this.board[row][column] = square;
      }
   }

   this.appendTo = Board_appendTo;
   this.clear = Board_clear;

   this.place = Board_place;
}

// dimensions of board
Board.NUMBER_COLUMNS = 10;
Board.NUMBER_ROWS = 15;

function Board_appendTo(svg) {
   var square;
   for(var row = 0; row < this.board.length; row++) {
      for(var column = 0; column < this.board[row].length; column++) {
         this.board[row][column].appendTo(svg);
      }
   }

   this.svg = svg;
}

function Board_clear() {
   var square;
   for(var row = 0; row < this.board.length; row++) {
      for(var column = 0; column < this.board[row].length; column++) {
         this.board[row][column].setColor(Color.NONE);
      }
   }
}

function Board_place(square, row, column) {
   square.setYCoordinate(row * 20);
   square.setXCoordinate(column * 20);

   this.board[row][column] = square;
   square.appendTo(svg);
}
