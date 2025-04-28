$(document).ready(function(){
    var owl = $(".top_10_courses");

    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: false, /* Disable default nav */
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1400: { items: 4 } /* Ensures a clear center effect */
        }
    });

    $(".owl-prev").click(function() {
        owl.trigger("prev.owl.carousel");
    });

    $(".owl-next").click(function() {
        owl.trigger("next.owl.carousel");
    });
});

$(document).ready(function () {
    var owl = $(".index-carousel");

    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 1,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function (event) {
        // Remove animation classes from all
        $('.golf-title, .golf-text').css({ opacity: 0, transform: 'translateY(20px)' });

        // Wait a bit and add them to the current active
        setTimeout(function () {
            var current = $('.index-carousel .owl-item.active');
            current.find('.golf-title').css({ opacity: 1, transform: 'translateY(0)', transitionDelay: '0.3s' });
            current.find('.golf-text').css({ opacity: 1, transform: 'translateY(0)', transitionDelay: '0.6s' });
        }, 100); // A slight delay ensures the DOM is updated
    });
});
