function ScreenCoordinate() {
   this.x = 0;
   this.y = 0;

   this.getXCoordinate = ScreenCoordinate_getXCoordinate;
   this.setXCoordinate = ScreenCoordinate_setXCoordinate;

   this.getYCoordinate = ScreenCoordinate_getYCoordinate;
   this.setYCoordinate = ScreenCoordinate_setYCoordinate;
}

function ScreenCoordinate_getXCoordinate() {
   return this.x;
}

function ScreenCoordinate_setXCoordinate(x) {
   this.x = x;
}

function ScreenCoordinate_getYCoordinate() {
   return this.y;
}

function ScreenCoordinate_setYCoordinate(y) {
   this.y = y;
}
