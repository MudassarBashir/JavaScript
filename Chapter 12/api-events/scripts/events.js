// events and handlers

// find first link on the page
var link = document.getElementsByTagName("a")[0];

// delegate event handler
link.addEventListener( "click", MyEventHandler );


/* event handler, the e here is an object that contains information about the even that occured
and it contains events that we can run. Using a statement like console.log(e), we can study
or examine the event object. Two of the most intersting properties about events are current 
target and target. current target is the DOM node which was being interacted with when the event occured,
and target is the element to which the link is being applied to and helps in understanding event
propagation a.k.a event bubbling.
*/
function MyEventHandler(e) {

	alert("ouch!");
	e.preventDefault();

}