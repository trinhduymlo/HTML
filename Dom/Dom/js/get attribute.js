var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('classs')) {
    var attr = firstItem.getAttribute('class');


    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The first item has a class naem: + attr '+ '</p>'
}