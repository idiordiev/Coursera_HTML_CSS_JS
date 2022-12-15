(function(window) {
	var goodBye = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(goodBye + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);
