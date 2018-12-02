$('.forum-adds-slider-items').slick({
    dots: true,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: $('.forum-adds-slider-dots'),
    prevArrow : $('.forum-adds-slider-prev'),
    nextArrow : $('.forum-adds-slider-next'),
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    cssEase: 'ease-in-out'
});