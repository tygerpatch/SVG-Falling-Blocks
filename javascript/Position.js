// The Position class represents a position on the board.
function Position() {
   this.row = 0;

   this.getRow = Position_getRow;
   this.setRow = Position_setRow;

   this.column = 0;

   this.getColumn = Position_getColumn;
   this.setColumn = Position_setColumn;
}

function Position_getRow() {
   return this.row;
}

function Position_setRow(row) {
   this.row = row;
}

function Position_getColumn() {
   return this.column;
}

function Position_setColumn(column) {
   this.column = column;
}
