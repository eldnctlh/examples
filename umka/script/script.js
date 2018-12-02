Array.prototype.slice.call(document.querySelectorAll('.main-head-menu-hidden-item')).forEach(function(e, i){
    e.addEventListener('click', function(){
        Array.prototype.slice.call(document.querySelectorAll('.main-head-menu-hidden-sub')).forEach(function(e){
            e.classList.remove('mobile-menu-sub');
        });
        document.querySelectorAll('.main-head-menu-hidden-sub')[i].classList.add('mobile-menu-sub');
    });
});
if(window.innerWidth > 960) {
    document.querySelector('.main-head-menu-hidden').addEventListener('mouseover', function(){
        document.querySelector('.shadow').classList.add('visible');
    });
    document.querySelector('.main-head-menu-hidden').addEventListener('mouseout', function(){
        document.querySelector('.shadow').classList.remove('visible');
    });
};


document.querySelector('.main-head-menu-title').addEventListener('click', function(){
    this.classList.toggle('main-head-menu-title-clicked');
    document.querySelector('.main-head-menu').classList.toggle('overflowVisible');
    document.querySelector('.main-head-menu-hidden').classList.toggle('menu-animate');
    if(window.innerWidth <= 960) {
        document.querySelector('.main-head-menu-hidden').classList.toggle('overflowScroll');
        document.querySelector('.shadow').classList.toggle('visible');
        document.body.classList.toggle('overflowHidden');
    };
});


$('.main-new-slider-items').slick({
    dots: false,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow : $('.main-new-slider-prev'),
    nextArrow : $('.main-new-slider-next'),
    responsive: [
        {
        breakpoint: 319,
        settings: 'unslick'
        },
        {
        breakpoint: 1279,
        settings: {
            slidesToShow: 5
        }
        },
    ]
});
$('.main-reviews-slider-items').slick({
    dots: true,
    mobileFirst: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: $('.main-reviews-slider-dots'),
    prevArrow : $('.main-reviews-slider-prev'),
    nextArrow : $('.main-reviews-slider-next'),
    responsive: [
        {
        breakpoint: 319,
        settings: {
            slidesToShow: 1,
            centerMode: false
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            centerMode: true
        }
        },
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3
        }
        },
        {
        breakpoint: 1365,
        settings: {
            slidesToShow: 4
        }
        },
    ]
});


var sliderItem = document.querySelectorAll('.main-slider-item');

for(i=0;i<sliderItem.length;i++) {
    var createNav = document.createElement('div');
    createNav.classList.add('nav-item');
    document.querySelector('.main-banners-banner-big-nav').append(createNav);
};
document.querySelectorAll('.nav-item')[0].classList.add('nav-item-active');
switcher('.nav-item', 'nav-item-active');
function clearSlider() {
    Array.prototype.slice.call(sliderItem).forEach(function(e, i){
        e.classList.add('none');
        e.classList.remove('main-slider-item-active');
    });
};
Array.prototype.slice.call(document.querySelectorAll('.nav-item')).forEach(function(e, i){
    e.addEventListener('click', function(){
        clearSlider();
        sliderItem[i].classList.remove('none');
        sliderItem[i].classList.add('main-slider-item-active');
    });
});
document.querySelector('.main-banners-banner-big-prev').addEventListener('click', function(){
    var index = Array.prototype.slice.call(sliderItem).indexOf(document.querySelector('.main-slider-item-active'));
    index -=1;
    clearSlider();
    if(index < 0) {
        sliderItem[sliderItem.length - 1].classList.remove('none');
        sliderItem[sliderItem.length - 1].classList.add('main-slider-item-active');
        Array.prototype.slice.call(document.querySelectorAll('.nav-item')).forEach(function(e, i){
            e.classList.remove('nav-item-active');
        });
        document.querySelectorAll('.nav-item')[document.querySelectorAll('.nav-item').length - 1].classList.add('nav-item-active');
    } else {
        sliderItem[index].classList.remove('none');
        sliderItem[index].classList.add('main-slider-item-active');
        Array.prototype.slice.call(document.querySelectorAll('.nav-item')).forEach(function(e, i){
            e.classList.remove('nav-item-active');
        });
        document.querySelectorAll('.nav-item')[index].classList.add('nav-item-active');
    };
});
document.querySelector('.main-banners-banner-big-next').addEventListener('click', function(){
    var index = Array.prototype.slice.call(sliderItem).indexOf(document.querySelector('.main-slider-item-active'));
    index +=1;
    clearSlider();
    if(index > sliderItem.length - 1) {
        sliderItem[0].classList.remove('none');
        sliderItem[0].classList.add('main-slider-item-active');
        Array.prototype.slice.call(document.querySelectorAll('.nav-item')).forEach(function(e, i){
            e.classList.remove('nav-item-active');
        })
        document.querySelectorAll('.nav-item')[0].classList.add('nav-item-active');
    } else {
        sliderItem[index].classList.remove('none');
        sliderItem[index].classList.add('main-slider-item-active');
        Array.prototype.slice.call(document.querySelectorAll('.nav-item')).forEach(function(e, i){
            e.classList.remove('nav-item-active');
        });
        document.querySelectorAll('.nav-item')[index].classList.add('nav-item-active');
    };
});
var touchableElement = document.querySelector('.main-slider-item-active');
touchableElement.addEventListener('touchstart', handleTouchStart, false);
touchableElement.addEventListener('touchmove', handleTouchMove, false); 
var xDown = null;                                                        
function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
};                                                     
function handleTouchStart(evt) {                                         
    xDown = getTouches(evt)[0].clientX;                                                                          
};                                                
function handleTouchMove(evt) {
    if ( !xDown) {
        return;
    };
    var xUp = evt.touches[0].clientX;                                    
    var xDiff = xDown - xUp;
        if ( xDiff > 0 ) {
            var index = Array.prototype.slice.call(sliderItem).indexOf(document.querySelector('.main-slider-item-active'));
            if(index === sliderItem.length - 1) {
                index = -1;
            };
            clearSlider();
            sliderItem[index + 1].classList.add('main-slider-item-active');
            sliderItem[index + 1].classList.remove('none');
            Array.prototype.slice.call(document.querySelectorAll('.nav-item')).forEach(function(e, i){
                e.classList.remove('nav-item-active');
            });
            document.querySelectorAll('.nav-item')[index + 1].classList.add('nav-item-active');
        } else if( xDiff < 0 ) {
            var index = Array.prototype.slice.call(sliderItem).indexOf(document.querySelector('.main-slider-item-active'));
            if(index === 0) {
                index = sliderItem.length;
            }
            clearSlider();
            sliderItem[index - 1].classList.add('main-slider-item-active');
            sliderItem[index - 1].classList.remove('none');
            Array.prototype.slice.call(document.querySelectorAll('.nav-item')).forEach(function(e, i){
                e.classList.remove('nav-item-active');
            });
            document.querySelectorAll('.nav-item')[index - 1].classList.add('nav-item-active');
        }  ;                     
    xDown = null;  
    var touchableElement = document.querySelector('.main-slider-item-active');
    touchableElement.addEventListener('touchstart', handleTouchStart, false);
    touchableElement.addEventListener('touchmove', handleTouchMove, false);                                         
};