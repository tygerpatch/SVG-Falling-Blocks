function JShape() {

   this.positions[0].setRow(0);
   this.positions[0].setColumn(0);

   this.positions[1].setRow(0);
   this.positions[1].setColumn(1);

   this.positions[2].setRow(1);
   this.positions[2].setColumn(0);

   this.positions[3].setRow(2);
   this.positions[3].setColumn(0);

   this.center.setRow(0);
   this.center.setColumn(4);
}

// JShape inherits from Shape
JShape.prototype = new Shape();
