inlets = 2;
outlets = 3;

var mainMatrix = true;
var delayMatrix = false;
var instructionsModulo = 0;

function list() {
	
	
	// post(arguments[0], arguments[1], arguments[2]);
	// outlet(0, arguments[1], arguments[0], arguments[2]);
	
	if (instructionsModulo == 0) {
        instructionsModulo = 1;
        if (inlet === 0) {
            // outlet(0, oldVal +", " + val + " 10000");
            outlet(1, "clear");
			outlet(2, 0, 0, arguments[2]);
			for (var i = 1; i < 5; i++) {
				outlet(2, 0, i, 0);
				//post(i);
			}
        }
        if (inlet === 1) {
            // outlet(0, oldVal +", " + val + " 10000");
            outlet(0, "clear");
			outlet(2, 0, arguments[0] + 1, arguments[2]);
			outlet(2, 0, 0, 0);
			for (var j = 1; j < 5; j++) {
				if (j !== arguments[0] + 1) {
					outlet(2, 0, j, 0);
					//post(j);
				}
			}
        }
    }
    instructionsModulo = 0;
}