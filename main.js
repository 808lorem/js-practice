var btn = document.getElementById('btn');

btn.onclick = function () {
	var result = document.getElementById('result');
	result.innerHTML = '';
	for(var i = 0; i <= 10; i++) {
		var star = '',
			num = Math.floor(Math.random() * 10) + 1;
		for(var j = 0; j <= num; j++) {
			star += '*';
		}
		result.innerHTML += star + '<br>';
	}
};

