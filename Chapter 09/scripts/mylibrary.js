// My JavaScript Library

(function() {

	// format a number
	function Format(num) {
		return Math.floor(num);
	}

	// output message
	ShowMessage("You are viewing a lesson in section " + Format(9.1));

}());

/* Anonymous self executing functions are designed to protect other functions within them such
as the nested 'Format' function above. The Format function in the other JS file cannot conflict
with it since this one is within the inner scope of the anonymous function.
*/