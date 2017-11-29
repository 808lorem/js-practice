var reset = document.getElementById('reset'),
	plus = document.getElementById('plus'),
	result = document.getElementById('result'),
	num = document.getElementById('number');


plus.onclick = function () {
	var val = parseInt(num.value);
	if(isFinite(val)) {
	    result.innerHTML = parseInt(result.innerHTML) + val;
	} else {
		alert('Add number');
	}
};

reset.onclick = function () {
	result.innerHTML = 0;
	num.value = '';
};