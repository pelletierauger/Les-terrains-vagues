inlets = 1;
outlets = 1;

function list() {
	//post(l[1]);
	//post(arguments[0] + " " + arguments[1] + " " + arguments[2]);
	var x = arguments[0];
	var y = arguments[1];
	var value = arguments[2];
	//post([2, 3, 4]);
	var timeValue = (1 / 16) * x;
	var row = getName(y);
	if (value == 1) {
		outlet(0, "add", 0, timeValue, row);
	} else if (value == 0) {
		outlet(0, "delete", 0, timeValue, timeValue + 0.01, row);
	} else {
		post("Value out of range");
	}
	
}

function getName(n){
	var r;
	switch(n) {
	    case 0:
        	r = "zero";
        break;
    	case 1:
        	r = "one";
        break;
    	case 2:
        	r = "two";
        break;
    	case 3:
        	r = "three";
        break;
    	case 4:
        	r = "four";
        break;
    	case 5:
        	r = "five";
        break;
    	case 6:
        	r = "six";
        break;
    	case 7:
        	r = "seven";
        break;
    	default:
        	r = "error";
	}
	return r;
}