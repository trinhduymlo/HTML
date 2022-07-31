
var orginglnumber = 10.23456;

var msg = '<h2>original number</h2>' + orginglnumber + '</p>';

msg += '<h2>3 decimal place</h2><p>' + orginglnumber.toFixed(3) + '</p>';

msg +='<h2>3 digits</h2><p>' + orginglnumber.toPrecision(3) + '</p>';


var el = document.getElementById('intro');

el.innerHTML = msg;


