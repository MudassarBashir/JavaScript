/*
A module is a collection of functions and variables. Normally, these functions would be related
in some way to define a particular role such as responding to a mouse input event or for handling
screen output. If you search for JS module pattern on the web you will see a lot of different
techniques but the author in this course prefers the 'revealing' technique. All modules have one 
goal. They group functions and variables in such a way that only one global variable is ever
defined. This makes it less likely that other developers can ever overwrite your global variables.
Such a global variable can have some methods that are internal and for private use while others
can be used by other developers or objects. Modules allow us to write huge libraries of code that
is reusable and very unlikely to conflict with other code.
*/
//---------------------------------------------------------------------------------------------//
// My JavaScript Module


/* If Lib exists then user it otherwise create a new empty object. So this becomes our one global
variable as described above. 
*/
var Lib = Lib || {};

/* And here we define a new property called Output of the Lib module which is assigned a self-executing
anonymous function which means this function will run as soon as the code is encountered.
*/
Lib.Output = (function() {
	// Here we can define any number of internal functions and variables. 
	
	// define output element
	var element = document.getElementById("message");
	var color = "#000";

	// write message
	function Write(msg) {
		element.innerHTML += FormatMessage(msg);
	}

	// set color
	function SetColor(col) {
		color = col;
	}

	// clear all messages
	function Clear() {
		element.innerHTML = "";
	}

	// format a number
	function FormatMessage(msg) {
		return '<p style="color:'+color+'">'+msg+'</p>';
	}

	/* Here we are returning an object literal which defines which functions of this module
	we are making available or callable from the outside, and what names we use to call those
	functions. The names on the left of each : are arbitrary and user chosen. Notice that we
	are not making the module's FormatMessage functions available, we are keeping it private
	since no one outside the module will ever need to call it.
	*/
	return {
		Write: Write,
		$: Write,
		SetColor: SetColor,
		Clear: Clear
	};

}());