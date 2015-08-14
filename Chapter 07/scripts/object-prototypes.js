// JavaScript Object Prototypes
var msg = document.getElementById("message");

// car constructor
function car(make, model, color) {
	this.make = make || "unknown";
	this.model = model || "model";
	this.color = color || "unpainted";
}

/* display method for all car obects. Every object created in JS has a prototype property associated
with it. The statement below indicates to JS that every object of the type 'car' should also have
associated with it a 'display' function. So, in effect, the 'display' method is now associated
with all 'car' objects. This is an example of a powerful JS concept called prototypal inheritance.
Using prototypal inheritance (PI) we can add methods not only to objects that are going to be created
but also those that have been created already! So for example we can add a reverse method to
String type objects since none exists using this code:

String.prototype.reverse = function () {
	// we simply convert the string into an array, reverse the array, then rejoin back to a string.
	return this.split("").reverse().join();
}

And now all String objects have a reverse() method! Now this is a very powerful but dangerous
technique as it allows you to change the methods of default types. Something that others using/reading
your code might not be aware of!
*/

car.prototype.display = function() {
	msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
};

// create objects
var c1 = new car("Ford", "Mustang", "blue");
var c2 = new car("Ford", "GTO", "white");
var c3 = new car();

// change properties and run methods
c2.color = "red";
c1.display();
c2.display();
c3.display();