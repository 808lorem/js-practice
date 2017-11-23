document.getElementById('popupBtn').onclick = function () {
	var popup = document.getElementById('myPopup');
	console.log(popup.classList);
	popup.classList.toggle('show');
};