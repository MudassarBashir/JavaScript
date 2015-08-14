// JavaScript sorting
var msg = document.getElementById("message");

var v = ["dog", "buffalo", "cat", "zebra", "frog", "antelope", "aardvark", "elephant"];
msg.innerHTML += "<p><strong>Original order:</strong> [" + v + "]<p>";

v.sort();
msg.innerHTML += "<p><strong>Alphabetically sorted:</strong> [" + v + "]<p>";

v.sort(function(a,b) {return a.length-b.length;});
msg.innerHTML += "<p><strong>Lengthwise sorted:</strong> [" + v + "]<p>";