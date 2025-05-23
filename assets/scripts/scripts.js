
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
        document.querySelectorAll(".nav-item").forEach((item) => {
            item.classList.remove("active")
        })
        item.classList.add("active")
    })
})



$('.services-slider').owlCarousel({
    nav: false,
    margin: 53,
    loop: false,
    autoplay: true,
    rtl: true,
    responsive: {
        0: {
            items: 1, margin: 20
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
