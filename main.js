function fun1() {
    var chbox = document.getElementById('one');
    var result = (chbox.checked) ? 'On' : 'Off';
    console.log(result);
}

function fun2() {
    var radio = document.getElementsByName('r1');
    for(var i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            var result = "On " + radio[i].value;
            return console.log(result);
        }
    }
    console.log('Nothing');
}