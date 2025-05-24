$(document).ready(function () {


    $(".mobile-menu-btn").click(function () {
        $(".mobile-menu").addClass("show");
    });
    $(".mobile-menu-close").click(function () {
        $(".mobile-menu").removeClass("show");
    });

    const sections = document.querySelectorAll('.section-item');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.parentElement.classList.add('active');
            }
        });
    });

    document.querySelectorAll(".nav-item").forEach((item) => {

        item.addEventListener("click", () => {
            $(".mobile-menu").removeClass("show");
            document.querySelectorAll(".nav-item").forEach((item) => {
                item.classList.remove("active")
            })
            item.classList.add("active")
        })
    })

    $('.hero-slider').owlCarousel({
        nav: false,
        dots: false,
        items: 1,
        margin: 0,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });

    const count = $('.hero-slider').find('.item').length;
    for (let i = 0; i < count; i++) {
        $('.hero-custom-dots').append(`<button class="dot" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>`);
    }
    // On dot click, go to slide
    $('.hero-custom-dots .dot').on('click', function () {
        var index = $(this).data('dot');
        $('.hero-slider').trigger('to.owl.carousel', [index, 300]);
    });
    $('.hero-custom-dots .dot:first-child').addClass('active');
    // Update active dot on slide change
    $('.hero-slider').on('changed.owl.carousel', function (event) {
        var index = event.item.index - event.relatedTarget._clones.length / 2;
        var count = event.item.count;

        // Handle loop wrap-around
        var current = (index + count) % count;
        $('.hero-custom-dots .dot').removeClass('active');
        $('.hero-custom-dots .dot[data-dot="' + current + '"]').addClass('active');
    });

    $('.services-slider').owlCarousel({
        nav: false,
        margin: 53,
        loop: false,
        autoplay: true,
        rtl: true,
        responsive: {
            0: {
                items: 2, margin: 20
            },
            480: {
                items: 2, margin: 20,
            },
            787: {
                items: 3, margin: 20,
            },
            912: {
                items: 4, margin: 20,
            },
            1200: {
                items: 5, margin: 53,
            },
            1300: {
                items: 6, margin: 53,
            }
        }
    });

    $('.next-service').click(function () {
        $('.services-slider').trigger('next.owl.carousel');
    });

    $('.prev-service').click(function () {
        $('.services-slider').trigger('prev.owl.carousel');
    });


    $('.gallery-slider').owlCarousel({
        nav: false,
        margin: 53,
        items: 1,
        margin: 20,
        loop: true,
        autoplay: true,
        rtl: true,
    });

    $('.next-gallery').click(function () {
        $('.gallery-slider').trigger('next.owl.carousel');
    });

    $('.prev-gallery').click(function () {
        $('.gallery-slider').trigger('prev.owl.carousel');
    });

    $('.testimonials-slider').owlCarousel({
        nav: false,
        margin: 53,
        items: 1,
        margin: 20,
        loop: true,
        autoplay: true,
        rtl: true,
    });

    $('.next-testimonials').click(function () {
        $('.testimonials-slider').trigger('next.owl.carousel');
    });

    $('.prev-testimonials').click(function () {
        $('.testimonials-slider').trigger('prev.owl.carousel');
    });

});