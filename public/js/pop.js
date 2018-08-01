jQuery(document).ready(function() {
    fadeMenuWrap();
    jQuery(window).scroll(fadeMenuWrap);
});

function fadeMenuWrap() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos >= 0 && scrollPos <= 60) {
        jQuery('.pop').fadeIn(200);
    } else {
        jQuery('.pop').fadeOut(200);
    }
}