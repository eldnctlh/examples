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
Array.prototype.slice.call(document.querySelectorAll('.flex-show-button')).forEach(function(e,i){
    e.addEventListener('click', function(){
        document.querySelectorAll('.forum-list-item')[i].classList.toggle('listItemActive')

        // if (  document.querySelectorAll('.forum-list-item')[i].classList[1] != 'listItemActive'  ) {
        //     document.querySelectorAll('.forum-list-item')[i].classList.toggle('max-height')        
        // }
    })
})

 var editor = new Jodit(document.querySelector('#editor'),{
     theme: 'theme'
 });

 document.querySelector('.forum-add-right-tags-button').addEventListener('click', function(){
    document.querySelector('.forum-add-right-tags').classList.toggle('noMaxHeight')
 })

 Array.prototype.slice.call(document.querySelectorAll('.forum-add-right-tags-tag')).forEach(function(e){
     e.addEventListener('click',function(){
         var tag = e.innerHTML;
         tag = '#' + tag + ', ';
         document.querySelector('#tags').value += tag;
     })
 })
 Array.prototype.slice.call(document.querySelectorAll('.callPopup')).forEach(function(e){
     e.addEventListener('click', function(){
         document.querySelector('.popupBg').classList.add('block')
     })
 })
 document.querySelector('.popup-close').addEventListener('click', function(){
    document.querySelector('.popupBg').classList.remove('block')
 })
 document.querySelector('.callAddTopic').addEventListener('click', function(){
    document.querySelector('.forum-add').classList.remove('none')
    this.classList.add('none');
    document.querySelector('.forum-list').classList.add('addMargin')
 })
 document.querySelector('.forum-add-left-close').addEventListener('click', function(){
    document.querySelector('.forum-add').classList.add('none')
    document.querySelector('.callAddTopic').classList.remove('none')
    document.querySelector('.forum-list').classList.remove('addMargin')
 })
 $(document).ready( function() {
    $(".file-upload input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
    });
});

document.querySelector('.topic-search').addEventListener('change', function(){
    if(this.value.length > 0 ) {
        this.style.backgroundPosition = '10px center';
        this.style.paddingLeft = '40px';
    } else {
        this.style.backgroundPosition = '';
        this.style.backgroundPositionX = '';
        this.style.backgroundPositionY = '';
        this.style.paddingLeft = '';
    }
})