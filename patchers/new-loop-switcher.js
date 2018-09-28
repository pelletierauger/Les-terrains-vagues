inlets = 1;
outlets = 5;

var loops = [0, 0, 0, 0];

function list() {
	var x = arguments[0];
	var y = arguments[1];
	var value = arguments[2];
	var oppositeValue = (value) ? 0 : 1;
	var index;
	if (x == 0 && y == 0) {
		index = 0;
	} else if (x == 1 && y == 0) {
		index = 1;
	} else if (x == 0 && y == 1) {
		index = 2;
	} else if (x == 1 && y == 1) {
		index = 3;
	}
	outlet(0, 0, index, value);
	outlet(index + 1, x, y, oppositeValue);
}