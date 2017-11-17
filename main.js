function fun1() {
    var id = 'mySelect',
        sel = document.getElementById(id).selectedIndex,
        opt = document.getElementById(id).options;
    console.log(opt[sel].selected);
}