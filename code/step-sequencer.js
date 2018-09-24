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