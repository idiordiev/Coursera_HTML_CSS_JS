(function(window) {
	var hello = "Hello";
	var helloSpeaker = function (name) {
		console.log(hello + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
