var myNodeList = document.getElementsByTagName('LI'),
	i;

for(i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN"),
		txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName('close'),
	j;

for(j = 0; j < close.length; j++) {
    close[j].onclick = function () {
		var div = this.parentElement;
		div.remove();
	}
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
	if(ev.target.tagName == "LI") {
		ev.target.classList.toggle('checked');
	}
}, false);

function newElement() {
	var li = document.createElement('li'),
		inputValue = document.getElementById('myInput').value,
		t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === '') {
	    alert('Введите тектс');
	} else {
		document.getElementById('myUl').appendChild(li);
	}

	document.getElementById('myInput').value = "";

	var span = document.createElement("SPAN"),
		txt = document.createTextNode("\u00D7");
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	for(var j = 0; j < close.length; j++) {
		close[j].onclick = function () {
			var div = this.parentElement;
			div.remove();
		}
	}
}