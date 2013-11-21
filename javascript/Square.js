// Each square has a color, size, and row, column position on board.
function Square() {
   this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

   this.rect.setAttribute("stroke", Color.BLACK);
   this.rect.setAttribute("strokeWidth", "1");

   this.setXCoordinate = Square_setXCoordinate;
   this.getXCoordinate = Square_getXCoordinate;

   this.setYCoordinate = Square_setYCoordinate;
   this.getYCoordinate = Square_getYCoordinate;

   this.getColor = Square_getColor;
   this.setColor = Square_setColor;

   this.getSize = Square_getSize;
   this.setSize = Square_setSize;

   this.appendTo = Square_appendTo;
   this.detachFrom = Square_detachFrom;
}

function Square_getSize() {
   return parseInt(this.rect.getAttribute("width"));
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

function Square_setXCoordinate(x) {
   this.rect.setAttribute("x", x);
}

function Square_getXCoordinate() {
   return parseInt(this.rect.getAttribute("x"));
}

function Square_setYCoordinate(y) {
   this.rect.setAttribute("y", y);
}

function Square_getYCoordinate() {
   return parseInt(this.rect.getAttribute("y"));
}

function Square_appendTo(svg) {
   svg.appendChild(this.rect);
}

function Square_detachFrom(svg) {
   svg.removeChild(this.rect);
}
