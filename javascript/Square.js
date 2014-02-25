// Each square has a color, size, and row, column position on board.
function Square() {
	this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

	this.rect.setAttribute("stroke", Color.BLACK);
	this.rect.setAttribute("strokeWidth", "1");

	this.setXCoordinate = function(x) {
		this.rect.setAttribute("x", x);
	}

	this.getXCoordinate = function() {
		return parseInt(this.rect.getAttribute("x"));
	}

	this.setYCoordinate = function(y) {
		this.rect.setAttribute("y", y);
	}

	this.getYCoordinate = function() {
		return parseInt(this.rect.getAttribute("y"));
	}

	this.getColor = function() {
		return this.rect.getAttribute("fill");
	}

	this.setColor = function(color) {
		this.rect.setAttribute("fill", color);
	}

	this.getSize = function() {
		return parseInt(this.rect.getAttribute("width"));
	}

	this.setSize = function(size) {
		this.rect.setAttribute("width", size);
		this.rect.setAttribute("height", size);
	}

	this.appendTo = function(svg) {
		svg.appendChild(this.rect);
	}

	this.detachFrom = function(svg) {
		svg.removeChild(this.rect);
	}
}
