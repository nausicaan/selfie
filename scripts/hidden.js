jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.jump').fadeIn(duration);
        } else {
            jQuery('.jump').fadeOut(duration);
        }
    });
    
    jQuery('.jump').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});


jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.list').fadeIn(duration);
        } else {
            jQuery('.list').fadeOut(duration);
        }
    });
});