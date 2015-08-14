// My JavaScript Module
var Lib = Lib || {}; 


Lib.Output = (function() {

	/*
	This function can take up to five arguments.
	Argument 1: Can be either a text string or an array.
	Argument 2: This is an HTML element which can be omitted in which case it'll default to using
	the element with the id "message." This argument can either be a string or a reference to a DOM
	node.
	Argument 3: The start index of the array we passed as argument 1.
	Argument 4: The ending index of the array we passed as argument 1
	Argument 5: A color, black if none specified.
	*/
	function Write(msg, element, start, end, color) {
		
		// If nothing has been passed for msg, we default to an empty array.
		msg = msg || [];

		// If the message isn't an array, then it's probably a string, in which case we convert
		// it to a single element array where the element is the string itself.
		if (msg.constructor != Array) msg = [msg];

		/* If no element has been passed in the element with the id "message" is used as a default. Now,
		if this element is not a DOM node type, we get the DOM node which has the element as it's id attribute.
		If this results in no DOM node being found, or if the element is an empty string, we exit the method with
		a return statement.
		*/
		element = element || "message";
		if (!element.nodeType) element = document.getElementById(element);
		if (!element || msg.length == 0) return;
		
		/* The next two statements normalize our start and end argument. Since start must be between zero and
		the length of the array minus 1 (that is the range if indices for the array which is our first argument.)
		For start we take whichever is lesser, either the provided argument value or the greatest index of the array,
		this is done to stay within the bounds of the array. Once we have this minimum, we take whichever is greater,
		zero or it. This way a noone can try to sneak in a negative array index.
		*/
		start = Math.max(0, Math.min(start, msg.length-1));

		/*
		If an end is provided, we take whichever is least, the end or the last array index. Then we compare that with 
		zero and take the greater value. If however, no end has been provided, we default to the last index of the array.
		*/
		end = (end ? Math.max(0, Math.min(end, msg.length-1)) : msg.length-1);

		// If no color specified then black.
		color = color || "#000";
	
		element.innerHTML += '<p style="color:'+color+'">'+msg.slice(start,end+1).join(" ")+'</p>';
	}
	/* The bulk of this function is just checking the incoming arguments and validating them and/or setting sensible
	defaults. It is very flexible but has a lot of code and a function that take five arguments can easily be fed arguments 
	in the wrong order since there are so many arguments to keep track of.
	*/

	return {
		Write: Write,
		$: Write
	};

}());