
var currentTop;
    Array.prototype.slice.call(document.querySelectorAll('.showForm')).forEach(function(e, i) {
        e.addEventListener('click', function(){
            document.querySelector('.popupBg').classList.add('block')
            currentTop = document.documentElement.scrollTop;
            $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('disabledScroll');
        })
    })
    Array.prototype.slice.call(document.querySelectorAll('.logIn')).forEach(function(e, i) {
        e.addEventListener('click', function(){
            Array.prototype.slice.call(document.querySelectorAll('.popup-wrapper')).forEach(function(e){
                e.classList.remove('block')
            })
            document.querySelector('.logBg').classList.add('block')
            currentTop = document.documentElement.scrollTop;
            $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('disabledScroll');
        })
    })
    Array.prototype.slice.call(document.querySelectorAll('.popup-forgot')).forEach(function(e, i) {
        e.addEventListener('click', function(){
            Array.prototype.slice.call(document.querySelectorAll('.popup-wrapper')).forEach(function(e){
                e.classList.remove('block')
            })
            document.querySelector('.passBg').classList.add('block')
            currentTop = document.documentElement.scrollTop;
            $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('disabledScroll');
        })
    })
    Array.prototype.slice.call(document.querySelectorAll('.signUp')).forEach(function(e, i) {
        e.addEventListener('click', function(){
            Array.prototype.slice.call(document.querySelectorAll('.popup-wrapper')).forEach(function(e){
                e.classList.remove('block')
            })
            document.querySelector('.sigBg').classList.add('block')
            currentTop = document.documentElement.scrollTop;
            $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('disabledScroll');
        })
    })
    Array.prototype.slice.call(document.querySelectorAll('.popup-close')).forEach(function(e){
        e.addEventListener('click', function(){
            Array.prototype.slice.call(document.querySelectorAll('.popup-wrapper')).forEach(function(e){
                e.classList.remove('block')
            })
            document.body.classList.remove('disabledScroll')
            $('body').css('top', '0');
            window.scrollTo(0, currentTop); 
        })
    })
    Array.prototype.slice.call(document.querySelectorAll('.popup-wrapper')).forEach(function(e) {
        e.addEventListener('click', function(e){
            if(e.target == this) {
                Array.prototype.slice.call(document.querySelectorAll('.popup-wrapper')).forEach(function(e){
                    e.classList.remove('block')
                })
                document.body.classList.remove('disabledScroll');
                $('body').css('top', '0');
                window.scrollTo(0, currentTop);
            }
        })
    })
    switcher('.social-icons-item', 'social-icons-item-clicked');
    switcher('.popup-plans-plan', 'popup-plans-plan-clicked', '.totalPrice', 'visible');


if(document.addEventListener){
    document.addEventListener('invalid', function(e){
        e.target.style.border = '1px solid red';
    }, true);
}
var width = $('body').width();
var scrollWidth = $('body').width() - width;


function langScript() {
    var ru = document.querySelector('.ru');
    var lang = document.querySelector('#lang');
    lang.addEventListener('click', function() {
        if(lang.innerText === 'EN') {
            ru.classList.toggle('visible');
            ru.addEventListener('click', function(){
                lang.innerHTML = 'RU';
                ru.classList.remove('visible');
                ru.innerHTML = 'EN';
            });
            window.addEventListener('click', function(e){
                if(e.target != lang) {
                    ru.classList.remove('visible');
                }
            })
        } 
        else if(lang.innerText === 'RU') {
            ru.classList.toggle('visible');
            ru.addEventListener('click', function(){
                lang.innerHTML = 'EN';
                ru.classList.remove('visible');
                ru.innerHTML = 'RU';
            })      
        }
    });
}
langScript();
jQuery.preloadImages = function() {
    for(var i = 0; i < arguments.length; i++) {
        jQuery("<img>").attr("src", arguments[ i ]);
    }
};
$.preloadImages("images/icon-telegram.svg", "images/icon-skype.svg", "images/icon-email.svg", "images/icon-viber.svg", "images/icon-whatsapp.svg", "images/icon-call.svg");
//Preload images
$(document).ready(function() {    
    $("body").css("opacity", "1");
});
if(document.title != 'Linux Support' && document.title != 'Linux Support Login' && document.title != 'Linux Support' && document.title != 'Linux Personal Account') {
    function popupScript() {

        var popupShow = document.querySelector('#popupShow')
        var popup = document.querySelector('.popup');
        var popupBg = document.querySelector('.popup-bg');
        var popupClose = document.querySelector('.popup-close');
        popupShow.addEventListener('click', function(e){
            popup.style.display = 'block';
            popupBg.style.display = 'block';
            document.body.classList.add('body-hidden');
            document.documentElement.classList.add('html-hidden');
            var scrollWidth = $('body').width() - width;
            document.querySelector('.body-hidden').style.paddingRight = scrollWidth + 'px'; 
            document.querySelector('#return-to-top').classList.add('scroll-margin');
            window.onclick = function(e) {
                if (e.target == popupBg) {
                    popup.style.display = "none";
                    popupBg.style.display = "none"; 
                    document.body.classList.remove('body-hidden');
                    document.documentElement.classList.remove('html-hidden');
                    document.querySelector('#return-to-top').classList.remove('scroll-margin');
                    document.body.style.paddingRight = '0px';
                } 
            };
        });
        
        popupClose.addEventListener('click', function(){
            popup.style.display = 'none';
            popupBg.style.display = 'none';
            document.body.classList.remove('body-hidden');
            document.documentElement.classList.remove('html-hidden');
            document.body.style.paddingRight = '0px';
        });

        var popupPlans = document.querySelectorAll('.popup-plans-plan');
        var arrPopupPlans = Array.prototype.slice.call(popupPlans);
        arrPopupPlans.forEach(function(e){
            e.addEventListener('mouseenter', function(){
                e.classList.add('plan-hover');
            });
            e.addEventListener('mouseleave', function(){
                e.classList.remove('plan-hover');
            });
            e.addEventListener('click', function(){
                arrPopupPlans.forEach(function(e){
                    e.style.border = "";
                    e.style.color = "";
                    e.firstChild.style.marginTop = "";
                })
                e.style.border = "solid 2px #88c849";
                e.style.color = "#35ba6b";
                e.firstChild.style.marginTop = "11px";
            });
        });
        var popupNumber = document.querySelector('#input2');
        var popupName = document.querySelector('#input1');
        var popupText = document.querySelector('.popup-input');
        var popupButton = document.querySelector('.popup-button');
        popupButton.addEventListener('click', function(){
            
        });
        }
    try {
        popupScript();
    } catch(e) {

    }
}
try {
    function signInScript() {
        var logIn = document.querySelectorAll('.logIn');
        var signInBg = document.querySelector('#signInBg');
        var signInClose = document.querySelector('#signInClose');
        signInBg.classList.add('block');
        document.body.classList.add('body-hidden');
        document.documentElement.classList.add('html-hidden');
        var scrollWidth = $('body').width() - width;
        document.querySelector('.body-hidden').style.paddingRight = scrollWidth + 'px';
        document.onclick = function(eve) {
            if (eve.target == logInBg || eve.target == signInBg) {
                signInBg.classList.remove('block');
                logInBg.classList.remove('block');
                document.body.classList.remove('body-hidden');
                document.documentElement.classList.remove('html-hidden');
                document.body.style.paddingRight = '0px';
            } 
        };
        signInClose.addEventListener('click', function(){
            signInBg.classList.remove('block');
            document.body.classList.remove('body-hidden');
            document.documentElement.classList.remove('html-hidden');
            document.body.style.paddingRight = '0px';
        });
        for(i=0; i <logIn.length; i++) {
            logIn[i].addEventListener('click', function(){
                signInBg.classList.remove('block');
                // document.body.classList.remove('body-hidden');
                // document.documentElement.classList.remove('html-hidden');
                logInBg.classList.add('block');
                logInScript();
            });
        }
    };
    
  } catch (e) {
    console.log( e );
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 450) {  
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() { 
    $('body,html').animate({
        scrollTop : 0 
    }, 600);
});
// try {
//     var arrUpgradeButtons  = document.querySelectorAll('.upgrade');
//     var upgradeButtons = Array.prototype.slice.call(arrUpgradeButtons);
//     upgradeButtons.forEach(function(e){
//         e.addEventListener('click', function(){
//             // $("html, body").animate({scrollTop: 0}, 600, 'linear');
        
//             document.querySelector('.index-login-popup').classList.toggle('block');
//             document.querySelector('#upgrade').click();
//             for(i = 0; i < document.querySelectorAll('.upgradePopupItem').length; i++) {
//                 document.querySelectorAll('.upgradePopupItem')[i].addEventListener('click', function(){
//                     document.querySelector('.index-login-popup').classList.remove('block');
//                 })
//             }
//         })
//     })

//     document.querySelector('.upgradePopupCross').addEventListener('click', function(){
//         document.querySelector('.index-login-popup').classList.remove('block');
//     })
//     var buttonUn = document.querySelectorAll('.planUn');
//         var sure = document.querySelector('.per-acc-sidebar-sure');
//         var buttonChange = document.querySelectorAll('.planChange');
//         var changedTitle = document.querySelectorAll('.changedTitle');
//         function planChange() {
//             for(x=0;x<buttonChange.length; x++) {
//                 buttonChange[x].addEventListener('click', function(){
//                     this.parentNode.parentNode.children[4].classList.toggle('block');
//                     this.parentNode.parentNode.children[5].classList.remove('block');
//                     var plansItem = document.querySelectorAll('.per-acc-sidebar-planchange-item');
//                     for(var i = 0; i < plansItem.length; i++) {
//                         plansItem[i].addEventListener('click', function(){
//                             this.parentNode.parentNode.children[4].classList.remove('block');
//                             this.parentNode.parentNode.children[1].innerHTML = this.innerHTML
//                         })
//                     }
//                 })
//             }
    
//         };
//         planChange(); 
//         function unsubscribe(){
    
//             for(x = 0; x < buttonUn.length; x++) {
//                 buttonUn[x].addEventListener('click', function(){
//                     this.parentNode.parentNode.children[4].classList.remove('block');
//                     this.parentNode.parentNode.children[5].classList.toggle('block');
//                     this.parentNode.parentNode.children[5].children[1].addEventListener('click', function(){
//                         this.parentNode.parentNode.children[5].classList.remove('block');
//                     })
//                 })
//             }
//         };
//         unsubscribe();
// } catch(e) {
//     console.log(e)
// }
if(document.title === "Linux Support") {

    var buttonUn = document.querySelectorAll('.planUn');
    var sure = document.querySelector('.per-acc-sidebar-sure');
    var buttonChange = document.querySelectorAll('.planChange');
    var changedTitle = document.querySelectorAll('.changedTitle');
    function planChange() {
        for(x=0;x<buttonChange.length; x++) {
            buttonChange[x].addEventListener('click', function(){
                this.parentNode.parentNode.children[4].classList.toggle('block');
                this.parentNode.parentNode.children[5].classList.remove('block');
                var plansItem = document.querySelectorAll('.per-acc-sidebar-planchange-item');
                for(var i = 0; i < plansItem.length; i++) {
                    plansItem[i].addEventListener('click', function(){
                        this.parentNode.parentNode.children[4].classList.remove('block');
                        this.parentNode.parentNode.children[1].innerHTML = this.innerHTML
                    })
                }
            })
        }

    };
    planChange(); 
    function unsubscribe(){

        for(x = 0; x < buttonUn.length; x++) {
            buttonUn[x].addEventListener('click', function(){
                this.parentNode.parentNode.children[4].classList.remove('block');
                this.parentNode.parentNode.children[5].classList.toggle('block');
                this.parentNode.parentNode.children[5].children[1].addEventListener('click', function(){
                    this.parentNode.parentNode.children[5].classList.remove('block');
                })
            })
        }
    };
    unsubscribe();

    
    var bgfoot = document.querySelector('.bgfoot');
    bgfoot.style.top = document.querySelector('.footerr').getBoundingClientRect().height -588 + 'px';
    var arrnewItem = document.querySelectorAll('.faq-main-list-item');
    var newItem = Array.prototype.slice.call(arrnewItem);
    var flexibleFoot = document.querySelector('.flexibleFoot');
    var currentHeight = 0;
    var currentDifference = document.querySelector('.footerr').getBoundingClientRect().height;
    newItem.forEach(function(e, i) {
        e.addEventListener('click', function(){
            e.classList.toggle('item-hovered');
            currentHeight = document.querySelector('.footerr').getBoundingClientRect().height - currentDifference;
            flexibleFoot.style.height = currentHeight + 'px';
        })
    })

    //List scripting
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            781: {
                margin:60,
                items: 2
            },
            0: {
                margin:50,
                items: 1
            },
            1024:{
                margin:0,
                items:3
            }
        }
    });
    //Slider scripting
    var link = document.querySelector('#scroll-title');
    link.addEventListener('click', function(){
    $("html, body").animate({scrollTop: 850}, 300, 'linear')
    });

    var linkm = document.querySelector('#scroll-titlem');
    linkm.addEventListener('click', function(){
    $("html, body").animate({scrollTop: 1250}, 300, 'linear')
    });


    try {
        function plan() {
            chosenPlan.addEventListener('click', function(){
                planList.classList.add('plans-hover');
                arrPlanItem.forEach(function(e){
                    e.classList.add('plans-hover-item');  
                    e.addEventListener('click', function(){
                        arrPlanItem.forEach(function(el){
                            el.classList.remove('chosen-plan');
                            el.children[0].classList.remove('chosen-plan-border');
                        });
                        e.classList.add('chosen-plan');
                        e.children[0].classList.add('chosen-plan-border');
                        setTimeout(function(){
                            arrPlanItem.forEach(function(ele){
                                ele.classList.remove('plans-hover-item');
                            })
                            planList.classList.remove('plans-hover');
                        }, 1000)
                        
                        chosenPlan = document.querySelector('.chosen-plan');
                    })
                })
            });
        }
        var planList = document.querySelector('.head-main-right-info');
        var planItem = document.querySelectorAll('.head-main-right-info-item');
        var arrPlanItem = Array.prototype.slice.call(planItem);
        var chosenPlan = document.querySelector('.chosen-plan');
        if($(window).width() < 1281) { 
            chosenPlan.addEventListener('click', function(){
                planList.classList.add('plans-hover');
                arrPlanItem.forEach(function(e){
                    e.classList.add('plans-hover-item');  
                    e.addEventListener('click', function(){
                        arrPlanItem.forEach(function(el){
                            el.classList.remove('chosen-plan');
                            el.children[0].classList.remove('chosen-plan-border');
                        });
                        e.classList.add('chosen-plan');
                        e.children[0].classList.add('chosen-plan-border');
                        setTimeout(function(){
                            arrPlanItem.forEach(function(ele){
                                ele.classList.remove('plans-hover-item');
                            })
                            planList.classList.remove('plans-hover');
                        }, 1000)
                        
                        chosenPlan = document.querySelector('.chosen-plan');
                        plan();
                    })
                })
            });
        } else {
            planList.addEventListener('mouseenter', function(){
                planList.classList.add('plans-hover');
                arrPlanItem.forEach(function(e){
                    e.classList.add('plans-hover-item');    
                    e.addEventListener('click', function(){
                        arrPlanItem.forEach(function(el){
                            el.classList.remove('chosen-plan');
                            el.children[0].classList.remove('chosen-plan-border');
                        });
                        e.classList.add('chosen-plan');
                        e.children[0].classList.add('chosen-plan-border');
                        setTimeout(function(){
                            arrPlanItem.forEach(function(ele){
                                ele.classList.remove('plans-hover-item');
                            })
                            planList.classList.remove('plans-hover');
                        }, 1000)
                    })
                })
            });
            planList.addEventListener('mouseleave', function(){
                planList.classList.remove('plans-hover');
                arrPlanItem.forEach(function(e){
                    e.classList.remove('plans-hover-item');
                })    
            })
        }

        //Plan chosing scripting in head
    }catch(e) {
                    

    }
    //plan

    try {

        var icons = document.querySelectorAll('.head-main-right-icons');
        var arrIcons = Array.prototype.slice.call(icons);

        var tl = document.querySelector('.tl');
        var vb = document.querySelector('.vb');
        var wh = document.querySelector('.wh');
        var sk = document.querySelector('.sk');
        var cl = document.querySelector('.cl');
        var em = document.querySelector('.em');
        var arrEachIcon = document.querySelectorAll('.head-main-right-icons-icon');
        var eachIcon = Array.prototype.slice.call(arrEachIcon);
        function iconsClassDelete(){
            eachIcon.forEach(function(e){
                var whichClass = e.classList[1] + 'c';
                e.classList.remove(whichClass);
            })
        };
        eachIcon.forEach(function(e){
            e.addEventListener('click', function(){
                iconsClassDelete();
                var whichClass = e.classList[1] + 'c';
                e.classList.add(whichClass)
            })
        })

    }catch(e) {

    }
    //Icons chosing scripting
    try {

        var popupShow = document.querySelectorAll('.popupShow');
        var popup = document.querySelector('.popup');
        var popupBg = document.querySelector('.popup-bg');
        var popupClose = document.querySelector('.popup-close');
    
        var arrPopupShow = Array.prototype.slice.call(popupShow);
        arrPopupShow.forEach(function(e){
            e.addEventListener('click', function(){
                popup.style.display = 'block';
                popupBg.style.display = 'block';
                document.body.classList.add('body-hidden');
                document.documentElement.classList.add('html-hidden');
                document.querySelector('#return-to-top').classList.add('scroll-margin');
                var scrollWidth = $('body').width() - width;
                document.querySelector('.body-hidden').style.paddingRight = scrollWidth + 'px';
            });
        })
        var popupShow1 = document.querySelector('.popupShow1');
        var popupShow2 = document.querySelector('.popupShow2');
        var popupShow3 = document.querySelector('.popupShow3');
        popupClose.addEventListener('click', function(){
            popup.style.display = 'none';
            popupBg.style.display = 'none';
            document.body.classList.remove('body-hidden');
            document.documentElement.classList.remove('html-hidden');
            document.querySelector('#return-to-top').classList.remove('scroll-margin');
            document.body.style.paddingRight = '0px';
        });
        window.onclick = function(evt) {
            if (evt.target == popupBg) {
                popup.style.display = "none";
                popupBg.style.display = "none"; 
                document.body.classList.remove('body-hidden');
                document.documentElement.classList.remove('html-hidden');
                document.querySelector('#return-to-top').classList.remove('scroll-margin');
                document.body.style.paddingRight = '0px';
            } 
        }

    } catch(e) {

    }
    //Popup scripting (show and hide)

    try {
    
        var popupPlans = document.querySelectorAll('.popup-plans-plan');
        var arrPopupPlans = Array.prototype.slice.call(popupPlans);
        arrPopupPlans.forEach(function(e){
            e.addEventListener('mouseenter', function(){
                // e.style.border = "solid 2px #88c849";
                // e.style.color = "#35ba6b";
                // e.firstChild.style.marginTop = "11px";
                e.classList.add('plan-hover');
            });
            e.addEventListener('mouseleave', function(){
                // e.style.border = "solid 1px #d3dae9";
                // e.style.color = "#7b84b2";
                // e.firstChild.style.marginTop = "12px";
                e.classList.remove('plan-hover');
            });
            e.addEventListener('click', function(){
                arrPopupPlans.forEach(function(e){
                    e.style.border = "";
                    e.style.color = "";
                    e.firstChild.style.marginTop = "";
                })
                e.style.border = "solid 2px #88c849";
                e.style.color = "#35ba6b";
                e.firstChild.style.marginTop = "11px";
            });
        });
        var popupNumber = document.querySelector('#input2');
        var popupName = document.querySelector('#input1');
        var popupText = document.querySelector('.popup-input');
        var popupButton = document.querySelector('.popup-button');
    
        popupShow1.addEventListener('click', function(){
            popup.style.display = 'block';
            popupBg.style.display = 'block';
            document.body.classList.add('body-hidden');
            document.documentElement.classList.add('html-hidden');
            arrPopupPlans[0].style.border = "solid 2px #88c849";
            arrPopupPlans[0].style.color = "#35ba6b";
            arrPopupPlans[0].firstChild.style.marginTop = "11px";
            arrPopupPlans[1].style.border = "";
            arrPopupPlans[1].style.color = "";
            arrPopupPlans[1].firstChild.style.marginTop = "";
            arrPopupPlans[2].style.border = "";
            arrPopupPlans[2].style.color = "";
            arrPopupPlans[2].firstChild.style.marginTop = "";
            document.querySelector('#return-to-top').classList.add('scroll-margin');
            var scrollWidth = $('body').width() - width;
                document.querySelector('.body-hidden').style.paddingRight = scrollWidth + 'px';
            
        });
        popupShow2.addEventListener('click', function(){
            popup.style.display = 'block';
            popupBg.style.display = 'block';
            document.body.classList.add('body-hidden');
            document.documentElement.classList.add('html-hidden');
            arrPopupPlans[1].style.border = "solid 2px #88c849";
            arrPopupPlans[1].style.color = "#35ba6b";
            arrPopupPlans[1].firstChild.style.marginTop = "11px";
            arrPopupPlans[0].style.border = "";
            arrPopupPlans[0].style.color = "";
            arrPopupPlans[0].firstChild.style.marginTop = "";
            arrPopupPlans[2].style.border = "";
            arrPopupPlans[2].style.color = "";
            arrPopupPlans[2].firstChild.style.marginTop = "";
            document.querySelector('#return-to-top').classList.add('scroll-margin');
            var scrollWidth = $('body').width() - width;
            document.querySelector('.body-hidden').style.paddingRight = scrollWidth + 'px';
        });
        popupShow3.addEventListener('click', function(){
            popup.style.display = 'block';
            popupBg.style.display = 'block';
            document.body.classList.add('body-hidden');
            document.documentElement.classList.add('html-hidden');
            arrPopupPlans[2].style.border = "solid 2px #88c849";
            arrPopupPlans[2].style.color = "#35ba6b";
            arrPopupPlans[2].firstChild.style.marginTop = "11px";
            arrPopupPlans[1].style.border = "";
            arrPopupPlans[1].style.color = "";
            arrPopupPlans[1].firstChild.style.marginTop = "";
            arrPopupPlans[0].style.border = "";
            arrPopupPlans[0].style.color = "";
            arrPopupPlans[0].firstChild.style.marginTop = "";
            document.querySelector('#return-to-top').classList.add('scroll-margin');
            var scrollWidth = $('body').width() - width;
            document.querySelector('.body-hidden').style.paddingRight = scrollWidth + 'px';
        });
        window.onclick = function(e) {
            if (e.target == popupBg) {
                popup.style.display = "none";
                popupBg.style.display = "none"; 
                document.body.classList.remove('body-hidden');
                document.documentElement.classList.remove('html-hidden');
                document.querySelector('#return-to-top').classList.remove('scroll-margin');
                document.body.style.paddingRight = scrollWidth + 'px';
            } 
        };
        //Popup scripting
        var rightButton = document.querySelector('.head-main-right-button');
        rightButton.addEventListener('click', function(){
            if(document.querySelector('#inputRight').value === "") {

            }
        })
        
        document.addEventListener("DOMContentLoaded", ready);
        
        
        this.globalSelectionSync = function(t) {
            if(this.globalSelectionSyncAbility() === false)
                return;
        
            if(this.globalSelectionSyncIsMaster() === false) {
                if(this.debug === true)
                    this.log('sync: trying to be sync master.');
        
                this.globalSelectionSyncBeMaster();
        
                if(this.globalSelectionSyncAbility() === false)
                    return;
            }
        
            NETDATA.globalSelectionSync.last_t = t;
        
            if(typeof NETDATA.globalSelectionSync.timer === 'undefined')
                NETDATA.globalSelectionSync.timer = setTimeout(function() {
                    $.each(NETDATA.globalSelectionSync.slaves, function(i, st) {
                        st.setSelection(NETDATA.globalSelectionSync.last_t);
                    });
                    NETDATA.globalSelectionSync.timer = undefined;
                }, 0);
        };
    } catch(err) {

    }

    try {
        var buttonUn = document.querySelectorAll('.planUn');
        var sure = document.querySelector('.per-acc-sidebar-sure');
        var buttonChange = document.querySelectorAll('.planChange');
        var changedTitle = document.querySelectorAll('.changedTitle');
        function planChange() {
            for(x=0;x<buttonChange.length; x++) {
                buttonChange[x].addEventListener('click', function(){
                    this.parentNode.parentNode.children[4].classList.toggle('block');
                    this.parentNode.parentNode.children[5].classList.remove('block');
                    var plansItem = document.querySelectorAll('.per-acc-sidebar-planchange-item');
                    for(var i = 0; i < plansItem.length; i++) {
                        plansItem[i].addEventListener('click', function(){
                            this.parentNode.parentNode.children[4].classList.remove('block');
                            this.parentNode.parentNode.children[1].innerHTML = this.innerHTML
                        })
                    }
                })
            }
    
        };
        planChange(); 
        function unsubscribe(){
    
            for(x = 0; x < buttonUn.length; x++) {
                buttonUn[x].addEventListener('click', function(){
                    this.parentNode.parentNode.children[4].classList.remove('block');
                    this.parentNode.parentNode.children[5].classList.toggle('block');
                    this.parentNode.parentNode.children[5].children[1].addEventListener('click', function(){
                        this.parentNode.parentNode.children[5].classList.remove('block');
                    })
                })
            }
        };
        unsubscribe();
    
       
    
        var link = document.querySelector('#scroll-title');
        link.addEventListener('click', function(){
        $("html, body").animate({scrollTop: 850}, 300, 'linear')
        });
    
        var linkm = document.querySelector('#scroll-titlem');
        linkm.addEventListener('click', function(){
        $("html, body").animate({scrollTop: 1250}, 300, 'linear')
        });
    

    } catch(err) {

    }
    
} else if(document.title === "Linux TeamViewer") {
    $(document).ready(function() {    
        $("body").css("opacity", "1");
    });
    function clickHandler(evt) {
        $("body").css("opacity", "0");
    }   
    
    var arrTvImg = document.querySelectorAll('.tv-img');
    var tvImg = Array.prototype.slice.call(arrTvImg);
    var imgBg = document.querySelector('.imgBg');
    console.log(imgBg)
    tvImg.forEach(function(e){
        e.addEventListener('click', function(){
            imgBg.style.display = 'block';
            imgBg.children[0].src = this.src;
            imgBg.children[1].addEventListener('click', function(){
                imgBg.style.display = 'none';
            });
            window.onclick = function(eve) {
                if (eve.target == imgBg) {
                    imgBg.style.display = 'none';
                } 
            };
        })
    })

} else if(document.title === "Linux Blog") {
    
    $(document).ready(function() {    
        $("body").css("opacity", "1");
    });
    function clickHandler(evt) {
        $("body").css("opacity", "0");
    }


    var sliderItem = document.querySelectorAll('.main-articles-article');
    for(var b = 0; b < sliderItem.length; b++) {
        sliderItem[b].addEventListener('click', function(){
            clickHandler();
            var w = window.open('post.html',"_self");
            $(w.document).open();
        })
    }
    
} else if(document.title === "Linux Blog Post") {
    $(document).ready(function() {    
        $("body").css("opacity", "1");
    });
    function clickHandler(evt) {
        $("body").css("opacity", "0");
    }

    
    
    var sidebarPost = document.querySelectorAll('.main-posts-sidebar-post');
    for(var b = 0; b < sidebarPost.length; b++) {
        sidebarPost[b].addEventListener('click', function(){
            clickHandler();
            var w = window.open('post.html',"_self");
            $(w.document).open();
        })
    }
    
    
} else if(document.title === "Linux Payment") {
    $(document).ready(function() {    
        $("body").css("opacity", "1");
    });
    function clickHandler(evt) {
        $("body").css("opacity", "0");
    }   
    
    var icons = document.querySelectorAll('.head-main-right-icons');
    var arrIcons = Array.prototype.slice.call(icons);

    var tl = document.querySelector('.tl');
    var vb = document.querySelector('.vb');
    var wh = document.querySelector('.wh');
    var sk = document.querySelector('.sk');
    var cl = document.querySelector('.cl');
    var em = document.querySelector('.em');
    var arrEachIcon = document.querySelectorAll('.head-main-right-icons-icon');
    var eachIcon = Array.prototype.slice.call(arrEachIcon);
    function iconsClassDelete(){
        eachIcon.forEach(function(e){
            var whichClass = e.classList[1] + 'c';
            e.classList.remove(whichClass);
        })
    };
    eachIcon.forEach(function(e){
        e.addEventListener('click', function(){
            iconsClassDelete();
            var whichClass = e.classList[1] + 'c';
            e.classList.add(whichClass)
        })
    })

    function thanksScript() {

        var thBg = document.querySelector('.th-bg');
        var thButton = document.querySelector('.th-button');
        var thClose = document.querySelector('.th-close');

        thBg.classList.add('block');
        document.body.classList.add('body-hidden');
        document.documentElement.classList.add('html-hidden');
        window.onclick = function(event) {
            if (event.target == thBg) {
                thBg.classList.remove('block');
                document.body.classList.remove('body-hidden');
                document.documentElement.classList.remove('html-hidden');
            } 
        };

 
        thClose.addEventListener('click', function() {
            thBg.classList.remove('block');
            document.body.classList.remove('body-hidden');
            document.documentElement.classList.remove('html-hidden');
        });
        thButton.addEventListener('click', function() {
            thBg.classList.remove('block');
            document.body.classList.remove('body-hidden');
            document.documentElement.classList.remove('html-hidden');
        });
    };

} else if(document.title === "Linux Personal Account") {
    document.querySelector('#loginPopupPersonal').addEventListener('click', function(){
            $('body,html').animate({
                scrollTop : 0 
            }, 400);
            document.querySelector('.per-acc-sidebar-buttons-button').click();
    })
    $(document).ready(function() {    
        $("body").css("opacity", "1");
    });
    function clickHandler(evt) {
        $("body").css("opacity", "0");
    }   
    var personalHeadItem = document.querySelectorAll('.per-acc-main-head-item');
    var paInformation = document.querySelector('#paInformation');
    var paHistory = document.querySelector('#paHistory');
    personalHeadItem[1].addEventListener('click', function(){
        personalHeadItem[0].classList.remove('per-acc-item-active');
        this.classList.add('per-acc-item-active2');
        paHistory.classList.remove('block');
        paInformation.classList.add('block');
    });
    personalHeadItem[0].addEventListener('click', function(){
        personalHeadItem[1].classList.remove('per-acc-item-active2');
        this.classList.add('per-acc-item-active');
        paInformation.classList.remove('block');
        paHistory.classList.add('block');
    });
    
    var icons = document.querySelectorAll('.head-main-right-icons');
    var arrIcons = Array.prototype.slice.call(icons);

    var tl = document.querySelector('.tl');
    var vb = document.querySelector('.vb');
    var wh = document.querySelector('.wh');
    var sk = document.querySelector('.sk');
    var cl = document.querySelector('.cl');
    var em = document.querySelector('.em');
    var arrEachIcon = document.querySelectorAll('.head-main-right-icons-icon');
    var eachIcon = Array.prototype.slice.call(arrEachIcon);
    // function iconsClassDelete(){
    //     eachIcon.forEach(function(e){
    //         var whichClass = e.classList[1] + 'c';
    //         e.classList.remove(whichClass);
    //     })
    // };
    eachIcon.forEach(function(e){
        e.addEventListener('click', function(){
            // iconsClassDelete();
            var whichClass = e.classList[1] + 'c';
            e.classList.toggle(whichClass)
        })
    })
    var buttonUn = document.querySelectorAll('.planUn');
    var sure = document.querySelector('.per-acc-sidebar-sure');
    var buttonChange = document.querySelectorAll('.planChange');
    var changedTitle = document.querySelectorAll('.changedTitle');
    function planChange() {
        for(x=0;x<buttonChange.length; x++) {
            buttonChange[x].addEventListener('click', function(){
                this.parentNode.parentNode.children[4].classList.toggle('block');
                this.parentNode.parentNode.children[5].classList.remove('block');
                var plansItem = document.querySelectorAll('.per-acc-sidebar-planchange-item');
                for(var i = 0; i < plansItem.length; i++) {
                    plansItem[i].addEventListener('click', function(){
                        this.parentNode.parentNode.children[4].classList.remove('block');
                        this.parentNode.parentNode.children[1].innerHTML = this.innerHTML
                    })
                }
            })
        }

    };
    planChange(); 
    function unsubscribe(){

        for(x = 0; x < buttonUn.length; x++) {
            buttonUn[x].addEventListener('click', function(){
                this.parentNode.parentNode.children[4].classList.remove('block');
                this.parentNode.parentNode.children[5].classList.toggle('block');
                this.parentNode.parentNode.children[5].children[1].addEventListener('click', function(){
                    this.parentNode.parentNode.children[5].classList.remove('block');
                })
            })
        }
    };
    unsubscribe();
    function changeEmail() {
        var changeEmailButton  = document.querySelector('#changeEmail');
        var changeEmail = document.querySelector('.per-acc-main-information-changeemail');
        changeEmailButton.addEventListener('click', function(){
            changeEmailButton.classList.toggle('buttonHover');
            changeEmail.classList.toggle('block');
            var changeEmailConfirm = document.querySelector('.per-acc-main-information-changeemail-button');
            changeEmailConfirm.addEventListener('click', function(){
                var isTrue = false;
                if(changeEmail.children[3].value != '' && changeEmail.children[1].value != '') {
                    isTrue = true;
                };
                if(isTrue === true) {
                    changeEmailButton.classList.remove('buttonHover');
                    changeEmail.classList.remove('block');
                    changeEmail.children[1].classList.remove('emptyInput');
                    changeEmail.children[3].classList.remove('emptyInput');
                } else {
                    if(changeEmail.children[3].value === '') {
                        changeEmail.children[3].classList.add('emptyInput');
                        changeEmail.children[3].onkeypress = function(e) {
                            changeEmail.children[3].classList.remove('emptyInput');
                        }
                    }else {
                        changeEmail.children[3].classList.remove('emptyInput');
                    };
                     if(changeEmail.children[1].value === '') {
                        changeEmail.children[1].classList.add('emptyInput');
                        changeEmail.children[1].onkeypress = function(e) {
                            changeEmail.children[1].classList.remove('emptyInput');
                        }
                    }else {
                        changeEmail.children[1].classList.remove('emptyInput');
                    }
                }
            })
        })
    };
    changeEmail();
    function changePassword() {
        var changePassButton  = document.querySelector('#changePassword');
        var changePass = document.querySelector('.per-acc-main-information-changepass');
        changePassButton.addEventListener('click', function(){
            changePassButton.classList.toggle('buttonHover');
            changePass.classList.toggle('block');
            var changePassConfirm = document.querySelector('.per-acc-main-information-changepass-button');
            changePassConfirm.addEventListener('click', function(){
                var isTrue = false;
                if(changePass.children[3].value != '' && changePass.children[1].value != '' && changePass.children[1].value != '') {
                    isTrue = true;
                };
                if(isTrue === true) {
                    changePassButton.classList.remove('buttonHover');
                    changePass.classList.remove('block');
                    changePass.children[1].classList.remove('emptyInputPass');
                    changePass.children[3].classList.remove('emptyInputPass');
                    changePass.children[5].classList.remove('emptyInputPass');
                } else {
                    if(changePass.children[3].value === '') {
                        changePass.children[3].classList.add('emptyInputPass');
                        changePass.children[3].onkeypress = function(e) {
                            changePass.children[3].classList.remove('emptyInputPass');
                        }
                    }else {
                        changePass.children[3].classList.remove('emptyInputPass');
                    };
                     if(changePass.children[1].value === '') {
                        changePass.children[1].classList.add('emptyInputPass');
                        changePass.children[1].onkeypress = function(e) {
                            changePass.children[1].classList.remove('emptyInputPass');
                        }
                    }else {
                        changePass.children[1].classList.remove('emptyInputPass');
                    }
                    if(changePass.children[5].value === '') {
                        changePass.children[5].classList.add('emptyInputPass');
                        changePass.children[5].onkeypress = function(e) {
                            changePass.children[5].classList.remove('emptyInputPass');
                        }
                    }else {
                        changePass.children[5].classList.remove('emptyInputPass');
                    }
                }
            })
        })
    };
    changePassword();
} else if(document.title === "Linux Error"){
    $(document).ready(function() {    
        $("body").css("opacity", "1");
    });
    function clickHandler(evt) {
        $("body").css("opacity", "0");
    }   
};