// Each square has a color, size, and row, column position on board.
function Square() {
   this.position = new Position();

   this.setPosition = Square_setPosition;
   this.getPosition = Square_getPosition;

   this.color = Color.BLUE;

   this.getColor = Square_getColor;
   this.setColor = Square_setColor;

   this.paint = Square_paint;

   this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

   this.rect.setAttribute("width", Square.SIZE);
   this.rect.setAttribute("height", Square.SIZE);
   this.rect.setAttribute("stroke", Color.BLACK);
   this.rect.setAttribute("strokeWidth", "1");
}

Square.SIZE = 20;

// TODO: replace paint with attach(svg), detach(svg)
function Square_paint(svg) {
   svg.appendChild(this.rect);
}

function Square_setPosition(row, column) {
   var x = row * Square.SIZE;
   var y = column * Square.SIZE;

   this.rect.setAttribute("x", x);
   this.rect.setAttribute("y", y);
}

function Square_getPosition() {
   return this.position;
}

function Square_getColor() {
   return this.color;
}

function Square_setColor(color) {
   this.color = color;
   this.rect.setAttribute("fill", this.color);
}
