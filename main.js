var btn = document.getElementById('btn');

btn.onclick = function () {
	var result = document.getElementById('result');
	result.innerHTML = '';
	for(var i = 0; i < 15; i++) {
		do {
			var rand = Math.floor(Math.random() * 100) + 1;
			console.log(rand);
		} while (rand % 3 == 0 || rand % 2 == 0);

		result.innerHTML += rand + '<br>';
	}
};