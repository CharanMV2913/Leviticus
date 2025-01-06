function ripplesEffect(e) {
    var waves, d, x, y;
    var element = this;

    if (!element.getElementsByClassName('waves').length) {
        var span = document.createElement('span');
        span.className = 'waves';
        element.insertBefore(span, element.firstChild);
    }

    waves = element.getElementsByClassName('waves')[0];
    waves.classList.remove('ripple');

    if (!waves.offsetHeight && !waves.offsetWidth) {
        d = Math.max(element.offsetWidth, element.offsetHeight);
        waves.style.height = d + 'px';
        waves.style.width = d + 'px';
    }

    x = e.pageX - element.offsetLeft - waves.offsetWidth / 2;
    y = e.pageY - element.offsetTop - waves.offsetHeight / 2;

    waves.style.top = y + 'px';
    waves.style.left = x + 'px';
    waves.classList.add('ripple');
}

document.addEventListener('DOMContentLoaded', function() {
    var ripplesElements = document.getElementsByClassName('ripples');
    for (var i = 0; i < ripplesElements.length; i++) {
        ripplesElements[i].addEventListener('click', ripplesEffect);
    }
});
