function IShape() {
   this.positions[0].setRow(-2);
   this.positions[0].setColumn(0);

   this.positions[1].setRow(-1);
   this.positions[1].setColumn(0);

   this.positions[2].setRow(0);
   this.positions[2].setColumn(0);

   this.positions[3].setRow(1);
   this.positions[3].setColumn(0);
}

// IShape inherits from Shape
IShape.prototype = new Shape();
