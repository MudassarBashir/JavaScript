// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// write message
	/* Now, our function takes only one argument */
	function Write(opt) {
		
		/* We check to see if an object literal has been passed in, if not, it's 
		probably a string in which case we make an object literal out of it. 
		*/
		if (opt.constructor != Object) opt = { msg: opt };
		
		/* And now we set our default values inside yet another object literal
		which is then passed along with the incoming argument to the Extend function.
		The result of this is set to be the argument opt.*/
		opt = Extend({
			element: "message",
			msg: [],
			start: 0,
			end: null,
			color: "#000"
		}, opt);
		
		/*
		Now that opt has been modified by the Extend function, we validate it's new
		properties just like we did in the module previous to this lesson.
		*/
		if (opt.msg.constructor != Array) opt.msg = [opt.msg];
		opt.element = opt.element || "message";
		if (!opt.element.nodeType) opt.element = document.getElementById(opt.element);
		if (!opt.element || opt.msg.length == 0) return;
		
		opt.start = Math.max(0, Math.min(opt.start, opt.msg.length));
		opt.end = (opt.end ? Math.max(0, Math.min(opt.end, opt.msg.length)) : opt.msg.length);
	
		opt.element.innerHTML += '<p style="color:'+opt.color+'">'+opt.msg.slice(opt.start,opt.end+1).join(" ")+'</p>';
	}
	
	// extend default parameters
	function Extend(obj1, obj2) {
		
		/* This function loops through every property of the original incoming argument
		to the calling function and as it finds them, it appends them to the default set.
		Thus, it replaces our sensible defaults as it finds them. It then returns this
		modified set to our main function.
		*/
		for (var prop in obj2) {
			if (obj2.hasOwnProperty(prop)) obj1[prop] = obj2[prop];
		}
		
		return obj1;
	}

	return {
		Write: Write,
		$: Write
	};

}());