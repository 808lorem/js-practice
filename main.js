function fun1() {
    var id = 'mySelect',
        sel = document.getElementById(id).selectedIndex,
        opt = document.getElementById(id).options;
    console.log(opt[sel].selected);
}

function fun2() {
    var rng = document.getElementById('r1'),
        p = document.getElementById('one'),
        div = document.getElementById('test');
    p.innerHTML = rng.value;
    div.style.width = rng.value + 'px';
}