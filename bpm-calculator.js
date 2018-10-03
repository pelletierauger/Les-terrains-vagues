inlets = 2;
outlets = 2;

var durationInMs = 0;

function msg_int(val) {
	// post(val);
	if (inlet === 0) {
		outlet(0, 60 / (durationInMs / 1000) * val);
		outlet(1, durationInMs / val);
	}
	if (inlet === 1) {
		durationInMs = val;
	}
}