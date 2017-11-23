var btn = document.getElementById('btn'),
	label = document.getElementById('label'),
	elem = document.getElementById('myBar'),
	width = 50;

label.innerHTML = width + '%';
elem.style.width = width + '%';

btn.onclick = function () {
	var id = setInterval(frame, 10);

	function frame() {
		if(width >= 100) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
			document.getElementById('label').innerHTML = width + '%';
		}
	}
};
