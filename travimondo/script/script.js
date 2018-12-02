
$( ".datepicker" ).each(function() {
  $( this ).datepicker();
});


document.querySelector('.footViewAll').addEventListener('click',function(){
  document.querySelector('.foot-block-countries-items').classList.toggle('foot-hidden')
})

document.querySelector('.header-menu-open').addEventListener('click', function(){
  document.querySelector('.header-menu').classList.add('marginLeft');
  // closeMenu();

})

Array.prototype.slice.call(document.querySelectorAll('.foot-block-title')).forEach(function(e){
  e.addEventListener('click', function(){
    e.nextElementSibling.classList.toggle('foot-block-items-hidden')
  })
})

document.querySelector('.header-menu-head-cross').addEventListener('click', function(){
  document.querySelector('.header-menu').classList.remove('marginLeft');
})
document.querySelector('.header-menu-bg').addEventListener('click', function(){
  document.querySelector('.header-menu').classList.remove('marginLeft');
})

document.querySelector('.footer-menu-title').addEventListener('click', function(){
  for(i= 0; i < document.querySelectorAll('.footer-menu-item').length; i++) {
      document.querySelectorAll('.footer-menu-item')[i].classList.toggle('menu-item-hide')
  }
  for(i= 0; i < document.querySelectorAll('.footer-menu2-item').length; i++) {
      document.querySelectorAll('.footer-menu2-item')[i].classList.toggle('menu-item-hide')
  }
})
// window.addEventListener('click', function(e){
  // if(document.querySelector('.header-menu').classList[1] === 'marginLeft') {
  //   for(i=0;i<document.querySelector('.header-menu-container').children.length;i++) {
  //     if(e.target != document.querySelector('.header-menu-container') && e.target != document.querySelector('.header-menu-open') && e.target != document.querySelector('.header-menu-container').children[i]) {
  //       document.querySelector('.header-menu').classList.remove('marginLeft');
  //     }
  //   }
  // }
//   if(document.querySelector('.header-menu').classList[1] === 'marginLeft') {
//       if(e.target != document.querySelector('.header-menu-container') && e.target != document.querySelector('.header-menu-open') ) {
//         document.querySelector('.header-menu').classList.remove('marginLeft');
//       }
//   }
// })
//index
try {
  var formItems = document.querySelectorAll('.main-form-head-item');

  formItems[0].addEventListener('click', function(){
    formItems[1].classList.remove('orange')
    this.classList.add('orange');
    document.querySelector('.main-form-left-top').classList.remove('none');
    document.querySelector('.main-form-left-top-hidden').classList.remove('block');
  })
  formItems[1].addEventListener('click', function(){
    formItems[0].classList.remove('orange')
    this.classList.add('orange');
    document.querySelector('.main-form-left-top').classList.add('none');
    document.querySelector('.main-form-left-top-hidden').classList.add('block');
  });

  var arrmainFormImg = document.querySelectorAll('.main-form-left-down-item');
  var mainFormImg = Array.prototype.slice.call(arrmainFormImg);
  mainFormImg.forEach(function(e){
    e.addEventListener('click', function(){
      e.classList.toggle('chosenImg');
    })
  })


  var arrdiscoverItem = document.querySelectorAll('.discover-search-head-item');
  var discoverItem = Array.prototype.slice.call(arrdiscoverItem);

  function clearDiscoverItem() {
    discoverItem.forEach(function(e){
      e.classList.remove('active')
    })
      document.querySelector('.disitemall').style.display = 'none';
      document.querySelector('.disitemhotel').style.display = 'none';
      document.querySelector('.disitemcar').style.display = 'none';
      document.querySelector('.disitemcar2').style.display = 'none';
      document.querySelector('.disitemcamp').style.display = 'none';
      document.querySelector('.disitemfly').style.display = 'none';
      document.querySelector('.disitemfly1').style.display = 'none';
      document.querySelector('.disitemfly2').style.display = 'none';
      Array.prototype.slice.call(document.querySelectorAll('.discover-search-button')).forEach(function(e, i) {
        e.style.display = 'none';
      })
  }
  discoverItem.forEach(function(e, i){

    e.addEventListener('click', function(){

      clearDiscoverItem();
      e.classList.add('active')
      if(i === 0) {
        document.querySelector('.disitemall').style.display = 'flex';
        document.querySelector('.disitemhotel').style.display = 'flex';
        document.querySelectorAll('.discover-search-button')[0].style.display = 'block';
      } else if(i === 1) {
        document.querySelector('.disitemall').style.display = 'flex';
        document.querySelectorAll('.discover-search-button')[1].style.display = 'block';
      } else if(i === 2) {
        document.querySelector('.disitemcar').style.display = 'flex';
        document.querySelector('.disitemcar2').style.display = 'flex';
        document.querySelectorAll('.discover-search-button')[2].style.display = 'block';
      } else if(i === 3) {
        document.querySelector('.disitemall').style.display = 'flex';
        document.querySelector('.disitemcamp').style.display = 'flex';
        document.querySelectorAll('.discover-search-button')[3].style.display = 'block';
      } else if(i === 4) {
        document.querySelector('.disitemall').style.display = 'flex';
        document.querySelector('.disitemhotel').style.display = 'flex';
        document.querySelectorAll('.discover-search-button')[4].style.display = 'block';
      } else if(i === 5) {
        document.querySelector('.disitemfly').style.display = 'flex';
        document.querySelector('.disitemfly1').style.display = 'flex';
        document.querySelector('.disitemfly2').style.display = 'flex';
        document.querySelectorAll('.discover-search-button')[5].style.display = 'block';
      } else if(i === 6) {
        document.querySelector('.disitemcar').style.display = 'flex';
        document.querySelector('.disitemcar2').style.display = 'flex';
        document.querySelectorAll('.discover-search-button')[6].style.display = 'block';
      }
      if(window.innerWidth <= 1010) {
        $([document.documentElement, document.body]).animate({
          scrollTop: $('.active').offset().top - 20
      }, 300);
      }
    })
  })



  var timerId = setInterval(function(){
    document.querySelector('.banner').classList.toggle('banner-active');
  }, 995000)
  document.querySelector('.banner-open').addEventListener('click', function(){
    document.querySelector('.banner').classList.add('banner-active');
  });
  document.querySelector('.banner-close').addEventListener('click', function(){
    document.querySelector('.banner').classList.remove('banner-active');
  })
} catch(err) {
  console.log(err);
}
//index

//view
try { 
        //slider1
      //   var slider = document.querySelector('.slider');
      //   var sliderNext = document.querySelector('.slider-nav-next');
      //   var currentMargin = 0;
      //   var showedCounter = 1;
      //   var arrsliderNav = document.querySelectorAll('.sliderNav');
      //   var sliderNav = Array.prototype.slice.call(arrsliderNav);
      //   var multiCount = 1;
      //   var originItems = document.querySelectorAll('.slider-item').length;
      //   function clearSliderNav() {
      //     sliderNav.forEach(function(e){
      //       e.classList.remove('active');
      //     })
      //   }

      //   sliderNext.addEventListener('click', function(){
      //     showedCounter++;
      //     currentMargin += (document.querySelectorAll('.slider-item')[0].offsetWidth * -1) - 25;
      //     slider.style.marginLeft = currentMargin +'px';
      //     if(showedCounter < document.querySelectorAll('.slider-item').length - 3) {
      //       if(showedCounter/ originItems  < 0.33) {
      //         clearSliderNav();
      //         sliderNav[1].classList.add('active');
      //       } else if(showedCounter/ originItems  < 0.5) {
      //         clearSliderNav();
      //         sliderNav[2].classList.add('active');
      //       } else if(showedCounter/ originItems  < 1) {
      //         clearSliderNav();
      //         sliderNav[3].classList.add('active');
      //       }
      //     } else if(showedCounter > document.querySelectorAll('.slider-item').length - 3) {
      //       slider.style.marginLeft = '0px';
      //       currentMargin = 0;
      //       showedCounter = 1;
      //       clearSliderNav();
      //       sliderNav[0].classList.add('active');
      //     }
      //   });
      //   sliderNav.forEach(function(e, i){
      //     e.addEventListener('click', function(){
      //       clearSliderNav()
      //       e.classList.add('active');
      //       if(i === 0) {
      //         slider.style.marginLeft = '0px';
      //         currentMargin = slider.style.marginLeft;
      //         currentMargin = parseInt(currentMargin, 10);
      //         showedCounter = 1;
      //       } else if(i === 3) {
      //         slider.style.marginLeft = (document.querySelectorAll('.slider-item').length -3) * (document.querySelectorAll('.slider-item')[0].offsetWidth * (-1) + 25) + 'px';
      //         currentMargin = slider.style.marginLeft;
      //         currentMargin = parseInt(currentMargin, 10);
      //         showedCounter = 999;
      //       } else if(i === 2) {
      //         slider.style.marginLeft = (parseInt(document.querySelectorAll('.slider-item').length * 0.50, 10)) * (document.querySelectorAll('.slider-item')[0].offsetWidth * (-1) + 25) + 'px';
      //         currentMargin = slider.style.marginLeft;
      //         currentMargin = parseInt(currentMargin, 10);
      //         showedCounter = parseInt((document.querySelectorAll('.slider-item').length + 1) * 50 /100, 10) + 1;
      //       }
      //       else if(i === 1) {
      //         slider.style.marginLeft = (parseInt(document.querySelectorAll('.slider-item').length * 0.25, 10)) * (document.querySelectorAll('.slider-item')[0].offsetWidth * (-1) + 25) + 'px';
      //         currentMargin = slider.style.marginLeft;
      //         currentMargin = parseInt(currentMargin, 10);
      //         showedCounter = parseInt((document.querySelectorAll('.slider-item').length + 1) * 25 / 100, 10) + 1;
      //       }
      //     })
      //   })
      //   //slider1

      //   var arrchangeItem = document.querySelectorAll('.nearby-change-item');
      //   var changeItem = Array.prototype.slice.call(arrchangeItem);
      //   changeItem.forEach(function(e){
      //     e.addEventListener('click', function(){
      //       changeItem.forEach(function(e){
      //         e.classList.remove('item-active')
      //       });
      //       e.classList.add('item-active')
      //     })
      //   })
      //   //slider2
      //   var slider1 = document.querySelector('.slider1');
      //   var arrsliderNav1 = document.querySelectorAll('.sliderNav1');
      //   var sliderNav1 = Array.prototype.slice.call(arrsliderNav1);
      //   var newItem1 = document.querySelectorAll('.slider1-item')[0].cloneNode(true);
      //   var odinRaz1 = 1;
      //   function clearSliderNav1() {
      //       sliderNav1.forEach(function(e){
      //       e.classList.remove('active');
      //       })
      //   }

      //   sliderNav1.forEach(function(e, i){
      //   e.addEventListener('click', function(){
      //       clearSliderNav1();
      //       e.classList.add('active');
      //       if(i === 0) {
      //           slider1.style.marginLeft = '0px';
      //       } else if(i === 3) {
      //          if(odinRaz1 === 1 ) {
      //           slider1.append(newItem1);
      //           odinRaz1++;
      //         }
      //           slider1.style.marginLeft = (document.querySelectorAll('.slider1-item').length -4) * - (document.querySelectorAll('.slider1-item')[0].offsetWidth + 35) + 'px';
      //       } else if(i === 2) {
      //           slider1.style.marginLeft = (parseInt((document.querySelectorAll('.slider1-item').length - 3) * 0.66, 10)) * - (document.querySelectorAll('.slider1-item')[0].offsetWidth + 35) + 'px';
      //       }
      //       else if(i === 1) {
      //           slider1.style.marginLeft = (parseInt((document.querySelectorAll('.slider1-item').length - 3) * 0.33, 10)) * - (document.querySelectorAll('.slider1-item')[0].offsetWidth + 35) + 'px';
      //       }
      //       })
      //   })





      //   var slider1 = document.querySelector('.slider1');
      //   var sliderNext1 = document.querySelector('.slider-nav-next1');
      //   var currentMargin1 = 0;
      //   var showedCounter1 = 1;
      //   var arrsliderNav1 = document.querySelectorAll('.sliderNav1');
      //   var sliderNav1 = Array.prototype.slice.call(arrsliderNav1);
      //   var multiCount1 = 1;
      //   var originItems1 = document.querySelectorAll('.slider1-item').length;
      //   function clearSliderNav1() {
      //     sliderNav1.forEach(function(e){
      //       e.classList.remove('active');
      //     })
      //   }

      //   sliderNext1.addEventListener('click', function(){
      //     showedCounter1++;
      //     currentMargin1 += (document.querySelectorAll('.slider1-item')[0].offsetWidth * -1) - 25;
      //     slider1.style.marginLeft = currentMargin1 +'px';
      //     if(showedCounter1 < document.querySelectorAll('.slider1-item').length - 3) {
      //       if(showedCounter1/ originItems1  < 0.33) {
      //         clearSliderNav1();
      //         sliderNav1[1].classList.add('active');
      //       } else if(showedCounter1/ originItems1  < 0.5) {
      //         clearSliderNav1();
      //         sliderNav1[2].classList.add('active');
      //       } else if(showedCounter1/ originItems1  < 1) {
      //         clearSliderNav1();
      //         sliderNav1[3].classList.add('active');
      //       }
      //     } else if(showedCounter1 > document.querySelectorAll('.slider-item').length - 3) {
      //       slider1.style.marginLeft = '0px';
      //       currentMargin1 = 0;
      //       showedCounter1 = 1;
      //       clearSliderNav1();
      //       sliderNav1[0].classList.add('active');
      //     }
      //   });
      //   sliderNav1.forEach(function(e, i){
      //     e.addEventListener('click', function(){
      //       clearSliderNav1()
      //       e.classList.add('active');
      //       if(i === 0) {
      //         slider1.style.marginLeft = '0px';
      //         currentMargin1 = slider1.style.marginLeft;
      //         currentMargin1 = parseInt(currentMargin1, 10);
      //         showedCounter1 = 1;
      //       } else if(i === 3) {
      //         slider1.style.marginLeft = (document.querySelectorAll('.slider1-item').length -3) * (document.querySelectorAll('.slider1-item')[0].offsetWidth * (-1) + 25) + 'px';
      //         currentMargin1 = slider1.style.marginLeft;
      //         currentMargin1 = parseInt(currentMargin1, 10);
      //         showedCounter1 = 999;
      //       } else if(i === 2) {
      //         slider1.style.marginLeft = (parseInt(document.querySelectorAll('.slider1-item').length * 0.50, 10)) * (document.querySelectorAll('.slider1-item')[0].offsetWidth * (-1) + 25) + 'px';
      //         currentMargin1 = slider1.style.marginLeft;
      //         currentMargin1 = parseInt(currentMargin1, 10);
      //         showedCounter1 = parseInt((document.querySelectorAll('.slider1-item').length + 1) * 50 /100, 10) + 1;
      //       }
      //       else if(i === 1) {
      //         slider1.style.marginLeft = (parseInt(document.querySelectorAll('.slider1-item').length * 0.25, 10)) * (document.querySelectorAll('.slider1-item')[0].offsetWidth * (-1) + 25) + 'px';
      //         currentMargin1 = slider1.style.marginLeft;
      //         currentMargin1 = parseInt(currentMargin1, 10);
      //         showedCounter1 = parseInt((document.querySelectorAll('.slider1-item').length + 1) * 25 / 100, 10) + 1;
      //       }
      //     })
      //   })
      //   //slider2


      //   document.querySelector('.view-info-main-text-edit').addEventListener('click', function(){
      //     document.querySelector('.view-text-origin').classList.add('block');
      //     document.querySelector('#textToEdit').value = document.querySelector('#editedText').innerHTML;
      //     document.querySelector('#editedText').classList.add('none');

      //     document.querySelector('.view-text-origin-save').addEventListener('click', function(){
      //       if(document.querySelector('#textToEdit').value ==='') {
      //         document.querySelector('#textToEdit').value = 'Add an introduction...'
      //       }
      //         document.querySelector('#editedText').innerHTML = document.querySelector('#textToEdit').value;
      //         document.querySelector('.view-text-origin').classList.remove('block');
      //         document.querySelector('#editedText').classList.remove('none');
      //     })
      // })

      // document.querySelector('.view-info-main-foot-text-edit').addEventListener('click', function(){
      //   document.querySelector('.view-text-origin2').classList.add('block');
      //   document.querySelector('#textToEdit2').value = document.querySelector('#editedText').innerHTML;
      //   document.querySelector('#editedText2').classList.add('none');

      //   document.querySelector('.view-text-origin2-save2').addEventListener('click', function(){
      //     if(document.querySelector('#textToEdit2').value ==='') {
      //       document.querySelector('#textToEdit2').value ='Add an introduction...'
      //     }
      //       document.querySelector('#editedText2').innerHTML = document.querySelector('#textToEdit2').value;
      //       document.querySelector('.view-text-origin2').classList.remove('block');
      //       document.querySelector('#editedText2').classList.remove('none');
      //   })
      // })

      
      // var arrtextEdit = document.querySelectorAll('.view-info-main-items-item-content-main-text-edit');
      // var textEdit = Array.prototype.slice.call(arrtextEdit);
      // var arrtextEdited = document.querySelectorAll('.view-info-main-items-item-content-main-text');
      // var textEdited = Array.prototype.slice.call(arrtextEdited);
      // textEdit.forEach(function(e, i){
      //     e.addEventListener('click', function(){
      //         document.querySelectorAll('.view-info-main-items-item-content-main-text-edited')[i].classList.add('block');
      //         document.querySelectorAll('.view-info-main-items-item-content-main-text-toedit')[i].classList.add('none');
      //         document.querySelectorAll('.view-info-main-items-item-content-main-text-save')[i].classList.add('block');
      //         document.querySelectorAll('.view-info-main-items-item-content-main-text-edited')[i].value = document.querySelectorAll('.view-info-main-items-item-content-main-text-toedit')[i].innerHTML;

      //         document.querySelectorAll('.view-info-main-items-item-content-main-text-save')[i].addEventListener('click', function(){
      //           if(document.querySelectorAll('.view-info-main-items-item-content-main-text-edited')[i].value === '') {
      //             document.querySelectorAll('.view-info-main-items-item-content-main-text-edited')[i].value = 'Add your description here...'
      //           }
      //             document.querySelectorAll('.view-info-main-items-item-content-main-text-toedit')[i].innerHTML = document.querySelectorAll('.view-info-main-items-item-content-main-text-edited')[i].value;
      //             document.querySelectorAll('.view-info-main-items-item-content-main-text-edited')[i].classList.remove('block');
      //             document.querySelectorAll('.view-info-main-items-item-content-main-text-toedit')[i].classList.remove('none');
      //             document.querySelectorAll('.view-info-main-items-item-content-main-text-save')[i].classList.remove('block');
      //         })
      //     })
      // })


} catch(err) {
  console.log(err)
}
//view