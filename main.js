var btn = document.getElementById('btnResult');

btn.onclick = function () {
	var start = parseFloat(document.getElementById('startNum').value),
		end = parseFloat(document.getElementById('endNum').value);
	console.log(typeof start);
	if(start != '' && end != '') {
		if(isFinite(start) && isFinite(end)) {
			if(start < end) {
				fun(start, end, 'plus');
			} else {
				fun(start, end, 'minus');
			}
		} else {
			alert('Введите число');
		}
	} else {
		alert('Заполните все поля!');
	}
};

function fun(s, e, n) {
	var result = document.getElementById('result');
	result.innerHTML = '';
	for(var i = s; (n == 'plus') ? i <= e : i >= e; (n == 'plus') ? i++ : i--) {
		if(i == 0) {
			continue;
		}
		result.innerHTML += i + '<br>';
	}
}