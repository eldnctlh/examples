
$('.admin-blog-scroll').each(function(){
  $(this).click(function() { 
    $('body,html').animate({
        scrollTop : 1200 
    }, 300);
  });
})
try {
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
  $( function() {
    $( "#datepicker2" ).datepicker();
  } );
} catch(er) {


}
try {

  for(i=0; i < document.querySelectorAll('.recommend').length;i++) {
    document.querySelectorAll('.recommend')[i].addEventListener('click', function(){
      this.classList.toggle('recommended')
    })
  }
  var arradminButton = document.querySelectorAll('.admin-create-tag-item-button');
  var adminButton = Array.prototype.slice.call(arradminButton);
  var arradmintag = document.querySelectorAll('.admin-create-tag-item');
  var adminTag = Array.prototype.slice.call(arradmintag); 


  adminButton.forEach(function(e, i){
    e.addEventListener('click', function(){
      document.querySelector('#adminInput').value += adminTag[i].innerText.substring(0, adminTag[i].innerText.length - 3);
    })
  })
  // var arradminButton = document.querySelectorAll('.admin-create-tag-item-button1');
  // var adminButton = Array.prototype.slice.call(arradminButton);
  // var arradmintag = document.querySelectorAll('.admin-create-tag-item1');
  // var adminTag = Array.prototype.slice.call(arradmintag); 


  // adminButton.forEach(function(e, i){
  //   e.addEventListener('click', function(){
  //     document.querySelector('#adminInput1').value += adminTag[i].innerText.substring(0, adminTag[i].innerText.length - 3);
  //   })
  // })
} catch(e) {

} 
try {
  var arraddComputer = document.querySelectorAll('.addComputer');
  var addComputer = Array.prototype.slice.call(arraddComputer); 
  addComputer.forEach(function(e){
    e.addEventListener('click', function(){
      document.querySelector('.admin-popup-bg').classList.add('block');
      var arrpopupItem = document.querySelectorAll('.admin-popup-list-item');
      var popupItem = Array.prototype.slice.call(arrpopupItem); 
      var arrpopupButton = document.querySelectorAll('.admin-popup-list-item-button');
      var popupButton = Array.prototype.slice.call(arrpopupButton); 
      popupButton.forEach(function(e, i){
        e.addEventListener('click', function(){
          document.querySelector('#admin-popup-input').value += popupItem[i].innerText.substring(0, popupItem[i].innerText.length - 3);
        })
      })

      document.querySelector('.admin-popup-add').addEventListener('click', function(){
        document.querySelector('.admin-popup-bg').classList.remove('block');
        document.querySelector('#admin-popup-input').value = '';
      })

      window.addEventListener('click', function(ev){
        if(ev.target == document.querySelector('.admin-popup-bg')) {
          document.querySelector('.admin-popup-bg').classList.remove('block');
          document.querySelector('#admin-popup-input').value = '';
        }
      })
    })
  })


} catch(e) {

}
try {
  var addManager = document.querySelector('#addManager');
  addManager.addEventListener('click', function(){
      document.querySelector('.admin-popup-manager-bg').classList.add('block');

      window.addEventListener('click', function(ev){
        if(ev.target == document.querySelector('.admin-popup-manager-bg')) {
          document.querySelector('.admin-popup-manager-bg').classList.remove('block');
        }
      })
    })


} catch(e) {

}
try {
  var arraddComment = document.querySelectorAll('.addComment');
  var addComment = Array.prototype.slice.call(arraddComment); 
  addComment.forEach(function(e){
    e.addEventListener('click', function(){
      document.querySelector('.admin-popup-comment-bg').classList.add('block');
      var arrpopupItem = document.querySelectorAll('.admin-popup-comment-list-item');
      var popupItem = Array.prototype.slice.call(arrpopupItem); 

      try {
        document.querySelector('.admin-popup-comment-add').addEventListener('click', function(){
          document.querySelector('.admin-popup-comment-bg').classList.remove('block');
          document.querySelector('#admin-popup-comment-input').value = '';
        })
      }catch(e) {

      }

      window.addEventListener('click', function(ev){
        if(ev.target == document.querySelector('.admin-popup-comment-bg')) {
          document.querySelector('.admin-popup-comment-bg').classList.remove('block');
          try {
            document.querySelector('#admin-popup-comment-input').value = '';
          }catch(e) {

          }
        
        }
      })
    })
  })
} catch(e) {

}
try {
  var arraddSubOrder = document.querySelectorAll('.addSubOrder');
  var addSubOrder = Array.prototype.slice.call(arraddSubOrder); 
  addSubOrder.forEach(function(e){
    e.addEventListener('click', function(){
      document.querySelector('.admin-popup-suborder-bg').classList.add('block');


      try {
        document.querySelector('.admin-popup-suborder-add').addEventListener('click', function(){
          document.querySelector('.admin-popup-suborder-bg').classList.remove('block');
          document.querySelector('#admin-popup-suborder-input').value = '';
        })
        document.querySelector('.sub-cancel').addEventListener('click', function(){
          document.querySelector('.admin-popup-suborder-bg').classList.remove('block');
        })
      }catch(e) {

      }

      window.addEventListener('click', function(ev){
        if(ev.target == document.querySelector('.admin-popup-suborder-bg')) {
          document.querySelector('.admin-popup-suborder-bg').classList.remove('block');
          try {
            document.querySelector('#admin-popup-comment-input').value = '';
          }catch(e) {

          }
        
        }
      })
    })
  })
} catch(e) {

}
if(document.title === "Linux Admin Archive"){


  var arraddComment = document.querySelectorAll('.addComment');
  var addComment = Array.prototype.slice.call(arraddComment); 
  addComment.forEach(function(e){
    e.addEventListener('click', function(){
      document.querySelector('.admin-popup-comment-bg').classList.add('block');

      window.addEventListener('click', function(ev){
        if(ev.target == document.querySelector('.admin-popup-comment-bg')) {
          document.querySelector('.admin-popup-comment-bg').classList.remove('block');
          document.querySelector('#admin-popup-comment-input').value = '';
        }
      })
    })
  })


  var itemList = document.querySelectorAll('.admin-item-list');
  var arrItemList = Array.prototype.slice.call(itemList);
  arrItemList.forEach(function(e){
      e.addEventListener('click', function(event){
          var currentTop = 0;
          var arrItemListChildren = Array.prototype.slice.call(e.children);
          arrItemListChildren.forEach(function(el){
              el.style.top = currentTop + 'px';
              arrItemListChildren[arrItemListChildren.length - 1].style.borderBottom = '1px solid #ccc'
              el.classList.toggle('admin-none');
              currentTop += 40;
          })
      })
  });
  var itemComments = document.querySelectorAll('.admin-item-comments');
  var arrItemComments = Array.prototype.slice.call(itemComments);
  arrItemComments.forEach(function(elem){
      elem.addEventListener('click', function(){
          var arrItemCommentsChildren = Array.prototype.slice.call(elem.children);
          arrItemCommentsChildren.forEach(function(element){
              element.classList.toggle('admin-none');
          })
      })
  })
} else if(document.title === "Linux Admin Blog") {

try {
  var editor = new Jodit(document.querySelector('#createTitle'));
  document.querySelector('#addTitle').addEventListener('click', function(){
    var newTitle = document.querySelector('#createTitle').cloneNode(true);
    document.querySelector('.admin-main-item-orders-blog-create-main').appendChild(newTitle)
    var editor = new Jodit(newTitle);
  });
  
  var editor = new Jodit(document.querySelector('#createTitleRu'));
  document.querySelector('#addTitleRu').addEventListener('click', function(){
    var newTitleRu = document.querySelector('#createTitleRu').cloneNode(true);
    document.querySelector('.create-ru').appendChild(newTitleRu)
    var editor = new Jodit(newTitleRu);
  });
  // document.querySelector('#addText').addEventListener('click', function(){
  //   var newText = document.querySelector('#createText').cloneNode(true);
  //   document.querySelector('.admin-main-item-orders-blog-create-main').appendChild(newText)
  //   var editor = new Jodit(newText);
  // });
  // document.querySelector('#addTag').addEventListener('click', function(){
  //   var newTag = document.querySelector('#createTag').cloneNode(true);
  //   document.querySelector('.admin-main-item-orders-blog-create-main').appendChild(newTag)
  // });
  // document.querySelector('#addImage').addEventListener('click', function(){
  //   var newImg = document.querySelector('#createImg').cloneNode(true);
  //   document.querySelector('.admin-main-item-orders-blog-create-main').appendChild(newImg)
  // });
  document.querySelector('#addVideo').addEventListener('click', function(){
    var newVideo = document.querySelector('#createVideo');
    newVideo.style.display = 'flex';
    document.querySelector('.admin-main-item-orders-blog-create-main').appendChild(newVideo)
  });
  document.querySelector('#addVideoRu').addEventListener('click', function(){
    var newVideo = document.querySelector('#createVideoRu');
    newVideo.style.display = 'flex';
    document.querySelector('.create-ru').appendChild(newVideo)
  });

  
// var timerId = setInterval(function() {
//   try {
//     document.querySelectorAll('.admin-create-img-img').forEach(function(e, i){
//       e.src = 'images/' + document.querySelectorAll('.inputImg')[i].files[0].name
//     });
//   } catch(err) {

//   }
// }, 1000);
document.querySelector('#create-main-ru').style.display = 'none';
var radio1 = document.querySelector('#contactChoice1');
var radio2 = document.querySelector('#contactChoice2');
radio1.addEventListener('click', function(){
  radio2.checked = false;
  radio1.checked = true;
  document.querySelector('#create-main-ru').style.display = 'none';
  document.querySelector('#create-main-en').style.display = 'flex';
})
radio2.addEventListener('click', function(){
  radio2.checked = true;
  radio1.checked = false;
  document.querySelector('#create-main-ru').style.display = 'flex';
  document.querySelector('#create-main-en').style.display = 'none';
})

} catch(e) {

}

try {
  var iconEdit = document.querySelectorAll('.icon-edit');
var editableContent = document.querySelectorAll('.editableContent');
iconEdit.forEach(function(e, i){
  e.addEventListener('click', function(){
    var editor = new Jodit(editableContent[i]);
  })
})

var iconSrc = document.querySelector('.icon-src');
iconSrc.addEventListener('click', function(){
  document.getElementById('file-input').click();

  var timer = setInterval(function() {
    try {
      document.getElementById('edit-img').src = 'images/' + document.getElementById('file-input').files[0].name
    } catch(err) {

    }
  }, 500)
});
} catch(er) {
  
}
}