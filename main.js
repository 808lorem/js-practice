var one = document.getElementById('one'),
	two = document.getElementById('two');

one.onclick = function () {
	fun1(3);
};

two.onclick = function () {
	fun1(7);
};

function fun1(num) {
	var result = document.getElementById('result');
	result.innerHTML = '';
	for(var i = num; i <= 20; i++) {
	    result.innerHTML += i + '<br>';
	}
}