var modal = document.getElementById('myModal'),
	myGallery = document.getElementById('myGallery'),
	modalImg = document.getElementById('img01'),
	captionText = document.getElementById('caption');


myGallery.onclick = function (event) {
	// console.log();
	if(event.target.classList == "myImg") {
		modal.style.display = 'block';
		modalImg.src = event.target.src;
		captionText.innerHTML = event.target.alt;
	}
};

var span = document.getElementsByClassName('close')[0];
// Закрытие при клике по крестику
span.onclick = function () {
	closeModalImg();
};

// Закрытие при клике по области вне картинки
window.onclick = function (event) {
	if(event.target == modal) {
		closeModalImg();
	}
};

function closeModalImg() {
	modal.style.display = 'none';
}
