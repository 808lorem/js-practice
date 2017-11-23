function myFunction() {
	var input = document.getElementById('myInput'),
		filter = input.value.toUpperCase(),
		ul = document.getElementById('myUl'),
		li = ul.getElementsByTagName('li'),
		a,
		i;

	for(i = 0; i < li.length; i++) {
	    a = li[i].getElementsByTagName('a')[0];
	    if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
	    	li[i].style.display = "";
		} else {
	    	li[i].style.display = "none";
		}
	}
}