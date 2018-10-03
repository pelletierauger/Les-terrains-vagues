inlets = 3;
outlets = 1;

var globalBPM = 0;
var millisPerBeat = 0;
var selectionStart = 0;

function msg_int(val) {
	if (inlet === 0) {
		//Adopt the bpm
		//post(millisPerBeat, val, selectionStart);
		post("À l'aide!!!");
		post("millisPerBeat: " + millisPerBeat);
		outlet(0, Math.floor((millisPerBeat * val) + selectionStart) + 1);
	}
	if (inlet === 1) {
		selectionStart = val;
		post(selectionStart);
	}
	if (inlet === 2) {
		//millisPerBeat = val;
	}
}

function msg_float(val) {
	if (inlet === 2) {
		millisPerBeat = val;
		post("Got the beat!!!! " + millisPerBeat);
	}
}