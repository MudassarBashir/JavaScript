// XMLHttpRequest
var Lib = Lib || {};

Lib.Ajax = (function() {

	// hijack form
	function Hijack(form, callback) {
	
		var args = {};
		
		for (var i = 0; i < form.elements.length; i++) {
			var f = form.elements[i];
			if (f.name) args[f.name] = f.value;
		}

		// make Ajax call
		Call(form.action, args, form.method, callback);
	
	}

	// call web service
	function Call(url, args, type, callback) {

		// check type (GET or POST)
		type = (type || "GET").toUpperCase();
	
		// create argument list
		args = args || {};
		var arglist = "";
		for (var n in args) {
			arglist += "&" + n + "=" + escape(args[n]);
		}
		if (arglist.length > 0) arglist = arglist.substr(1);
		
		// append args to GET URL
		if (type == "GET") {
			url += "?" + arglist;
			arglist = null;
		}
		
		// XMLHttpRequest object
		var xhr = new XMLHttpRequest();
		xhr.open(type, url, true);
		
		// callback function
		if (callback) {
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					callback(xhr.responseText);
				}
			};
		}
		
		// open request
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		xhr.send(arglist);

	}

	return {
		Hijack: Hijack,
		Call: Call
	};

}());

// start
var
	speedform = document.getElementById("speedform"),
	output = document.getElementById("output");

// form submit - direct to Ajax call
/*
This is the function that first executes when our form is submitted. It uses prevent default to stay on the same web page. Then it turn over to the Lib module
for further work. When it calls the Hijack function of the Lib.Ajax, it provides two arguments, the form node of the form that was just submitted, and a callback
function (the function to be executed once the data from the server comes back, represented by the variable r.) 
*/
speedform.addEventListener("submit", function(e) {
	e.preventDefault();
	Lib.Ajax.Hijack(speedform, function(r) {
		
		output.innerHTML = r;
		
	});
});
