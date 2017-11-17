function fun1() {
    var rtl = document.getElementById('rtl').value,
        rtr = document.getElementById('rtr').value,
        rbl = document.getElementById('rbl').value,
        rbr = document.getElementById('rbr').value;

    var ttl = document.getElementById('ttl'),
        ttr = document.getElementById('ttr'),
        tbl = document.getElementById('tbl'),
        tbr = document.getElementById('tbr');

    var block = document.getElementById('block');

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbl + 'px ' + rbr + 'px';
}