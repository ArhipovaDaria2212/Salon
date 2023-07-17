$(document).ready(function () {
    $('.testimonials__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        swipeToSlide: true,
        edgeFriction: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

function viewDivDevon() {
    let none = document.querySelector('.devon__bottom__hidden');
    none.style.display = 'block';
    let btn = document.querySelector('.devon__btn');
    btn.textContent =
        (btn.textContent === 'See all works') ? btn.textContent = 'See less works' : btn.textContent = 'See all works';
};

function viewDivRonald() {
    let none = document.querySelector('.ronald__bottom__hidden');
    none.style.display = 'block';
    none.innerHTML = 'See less works';
};

function viewDivJane() {
    let none = document.querySelector('.jane__bottom__hidden');
    none.style.display = 'block';
    none.innerHTML = 'See less works';
};