var resultText = document.getElementById('out').textContent,
	results = document.getElementById('results');

function plus() {
	decision('+');
}

function minus() {
	decision('-');
}

function decision(sign) {
	var num1 = parseInt(document.getElementById('n1').value),
		num2 = parseInt(document.getElementById('n2').value),
		result;

	if(isFinite(num1) && isFinite(num2)) {
		if(sign == '+') {
			result = num1 + num2;
		} else if(sign == '-') {
			result = num1 - num2;
		}
		var p = document.createElement('p');
		p.innerHTML = result;
		results.appendChild(p);
	} else {
		result = 'введите число'
	}
	document.getElementById('out').innerHTML = resultText + ' ' + result;
}