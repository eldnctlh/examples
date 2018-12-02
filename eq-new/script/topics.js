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
var editor = new Jodit(document.querySelector('#editor'),{
     theme: 'theme'
 });

 document.querySelector('.addReply').addEventListener('click', function(){
    document.querySelector('.forum-posts-add').classList.remove('none')
    this.classList.add('none')
 })
 document.querySelector('.addReplyFinish').addEventListener('click', function(){
    document.querySelector('.forum-posts-add').classList.add('none')
    document.querySelector('.addReply').classList.remove('none')
 })

document.querySelector('.forum-add-left-close').addEventListener('click', function(){
    document.querySelector('.forum-posts-add').classList.add('none')
    document.querySelector('.addReply').classList.remove('none')
})
$(document).ready( function() {
    $(".file-upload input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
    });
});