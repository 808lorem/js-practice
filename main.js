var modal = document.getElementById('myModal'),
    btn = document.getElementById('myBtn'),
    span = modal.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
};

span.onclick = function () {
	modalDisplayNone();
};

window.onclick = function (event) {
    if(event.target == modal) {
		modalDisplayNone();
    }
};

function modalDisplayNone() {
	modal.style.display = 'none';
}