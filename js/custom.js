(function ($) {

    "use strict";

    // navigation Section
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    // jquery backstretch slideshow
    $("#home").backstretch([
        "http://st.gde-fon.com/wallpapers_original/563877_sobaka_oblaka_yazyik_2048x1364_www.Gde-Fon.com.jpg"
        , "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg"
    ], {duration: 3000, fade: 750});

    // smoothscroll js
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // WOW Animation js
    new WOW({ mobile: false }).init();

})(jQuery);
