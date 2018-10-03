inlets = 1;
outlets = 9;

var buffer = new Buffer("seq");

var duration = buffer.length();
var noteDuration = 250;


function getDuration() {
	post(duration);
}

function randomize() {
	for (var i = 0; i < 8; i++) {
		var number = Math.floor(Math.random() * duration);
		outlet(i, number);
		post(number);
	}
}

function msg_int(v) {
	noteDuration = v;
	outlet(8, noteDuration);
}

function list() {
	//post(l[1]);
	//post(arguments[0] + " " + arguments[1] + " " + arguments[2]);
	var x = arguments[0];
	var y = arguments[1];
	var value = arguments[2];
	if (value == 1) {
		outlet(8, "clear");
		var number = Math.floor(Math.random() * duration);
		outlet(y, number);
	}
}