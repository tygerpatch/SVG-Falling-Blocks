// Each square has a color, size, and row, column position on board.
function Square() {
   this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

   this.rect.setAttribute("stroke", Color.BLACK);
   this.rect.setAttribute("strokeWidth", "1");

   this.setXCoordinate = Square_setXCoordinate;
   this.setYCoordinate = Square_setYCoordinate;

   this.getColor = Square_getColor;
   this.setColor = Square_setColor;

   this.getSize = Square_getSize;
   this.setSize = Square_setSize;

   this.appendTo = Square_appendTo;
}

function Square_getSize() {
   return this.rect.getAttribute("width");
}

function Square_setSize(size) {
   this.rect.setAttribute("width", size);
   this.rect.setAttribute("height", size);
}

function Square_setColor(color) {
   this.rect.setAttribute("fill", color);
}

function Square_getColor() {
   return this.rect.getAttribute("fill");
}

// TODO: detachFrom(svg)
function Square_appendTo(svg) {
   svg.appendChild(this.rect);
}

function Square_setXCoordinate(x) {
   this.rect.setAttribute("x", x);
}

function Square_setYCoordinate(y) {
   this.rect.setAttribute("y", y);
}
