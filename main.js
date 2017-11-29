var btn = document.getElementById('btn'),
	arrNums = [];

btn.onclick = function () {
	arrNums = [];
	for(var i = 0; i < 4; i++) {
		var rand = Math.floor(Math.random() * (9 - 1 + 1) + 1);
		arrNums.push(rand);
	}

	var textBox = document.getElementById('textbox'),
		val = parseInt(textBox.value),
		result = document.getElementById('result');

	if(isFinite(val)) {
		isMinMax(val, textBox, result);
	} else {
		alert('Add number');
		clearTextBox(textBox);
	}
};

function clearTextBox(textBox) {
	textBox.value = '';
}

function isMinMax(val, textBox, result) {
	if(val >= 1 && val <= 9) {
		result.innerHTML = '';
		for(var j = 0; j < arrNums.length; j++) {
			if(val == arrNums[j]) {
				result.innerHTML = val + ': true :)';
				clearTextBox(textBox);
				return;
			}
		}
		result.innerHTML = val + ': false :(';
		clearTextBox(textBox);

	} else {
		alert('From 1 to 9!');
		clearTextBox(textBox);
	}
}