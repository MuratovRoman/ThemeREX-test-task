//=require components/**.*

$(document).ready(function() {
    menuShow();

    $('.slider-content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500
    });
    $('.testimonials-slider__list').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.testimonials-slider__prev',
        nextArrow: '.testimonials-slider__next',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }]
    });
})