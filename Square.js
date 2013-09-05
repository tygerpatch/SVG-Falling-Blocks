// Each square has a color, size, and row, column position on board.
function Square() {
   this.position = new Position();

   this.setPosition = Square_setPosition;
   this.getPosition = Square_getPosition;

   this.color = Color.BLUE;

   this.getColor = Square_getColor;
   this.setColor = Square_setColor;

   this.paint = Square_paint;
}

Square.SIZE = 20;

function Square_paint(svg) {
   var x = this.position.getRow() * Square.SIZE;
   var y = this.position.getColumn() * Square.SIZE;

   var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

   rect.setAttribute("x", x);
   rect.setAttribute("y", y);
   rect.setAttribute("width", Square.SIZE);
   rect.setAttribute("height", Square.SIZE);
   rect.setAttribute("fill", this.getColor());
   rect.setAttribute("stroke", Color.BLACK);
   rect.setAttribute("strokeWidth", "1");

   svg.appendChild(rect);
}

function Square_setPosition(row, column) {
   this.position.setRow(row);
   this.position.setColumn(column);
}

function Square_getPosition() {
   return this.position;
}


function Square_getColor() {
   return this.color;
}

function Square_setColor(color) {
   this.color = color;
}
