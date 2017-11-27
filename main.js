if(matchMedia) {
	var screen = window.matchMedia("(max-width:768px)");
	screen.addListener(changes);
	changes(screen);
}

function changes(screen) {
	var message = (screen.matches ? 'less' : 'more') + ' than 768px';
	document.getElementById('now').firstChild.nodeValue = message;
}