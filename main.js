var navId = 'nav',
    menuItemClass = 'menu-item',
    submenuClass = 'submenu';

document.getElementById(navId).onmouseover = function(event) {
    var target = event.target;
    if(target.className == menuItemClass) {
        var s = target.getElementsByClassName(submenuClass);
        closeMenu();
        s[0].style.display = 'block';
    }
};

document.onmouseover = function(event) {
    var target = event.target;
    if(target.className != menuItemClass && target.className != submenuClass) {
        closeMenu();
    }
};


function closeMenu() {
    var subm = document.getElementsByClassName(submenuClass);
    for(var i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
    }
}