inlets = 1;
outlets = 1;

function list() {
	//post(l[1]);
	//post(arguments[0] + " " + arguments[1] + " " + arguments[2]);
	var x = arguments[0];
	var y = arguments[1];
	var value = arguments[2];
	if (value == 1) {
		outlet(0, "clear");
	}
}