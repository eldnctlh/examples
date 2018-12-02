try {
    var services = document.querySelector('.services-info');
    var servicesInner = document.querySelectorAll('.services-info-right');
    var arrservicesButtons = document.querySelectorAll('.services-info-left-button');
    var servicesButtons = Array.prototype.slice.call(arrservicesButtons);
    function deleteClassButton() {
        servicesButtons.forEach(function(e){
            e.classList.remove('services-button-active');
        })
    };
    function changeServices() {
        
    }
    function clearServicesInner() {
        for(i = 0; i < servicesInner.length; i++) {
            servicesInner[i].classList.add('none')
        }
    }
    servicesButtons.forEach(function(e, i){

        e.addEventListener('click', function() {
            if(document.documentElement.clientWidth <= 890) {
                // window.scrollTo(0, elPos - e.getBoundingClientRect().height);
                e.scrollIntoView();
            }
            deleteClassButton()
            e.classList.add('services-button-active');
            if(i === 0) {
                clearServicesInner();
                servicesInner[i].classList.remove('none');
                services.classList.remove(services.classList[1]);
                services.classList.add('exporters');
            } else if (i === 1) {
                clearServicesInner();
                servicesInner[i].classList.remove('none');
                services.classList.remove(services.classList[1]);
                services.classList.add('importers');
            }else if (i === 2) {
                clearServicesInner();
                servicesInner[i].classList.remove('none');
                services.classList.remove(services.classList[1]);
                services.classList.add('entreprenual');
            }
        })
    });

    document.querySelector('.mobile-open').addEventListener('click', function(){
        document.querySelector('.mobile-menu-open').classList.toggle('opacity-1')
    })
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    if(document.documentElement.clientWidth <= 890) {
        for(i = 0; i < servicesInner.length; i++) {
            insertAfter(servicesInner[i], servicesButtons[i] )
        }
    }
    // window.addEventListener("resize", function(){
    //     if(document.documentElement.clientWidth <= 890) {
    //         for(i = 0; i < servicesInner.length; i++) {
    //             insertAfter(servicesInner[i], servicesButtons[i] )
    //         }
    //     } else {
    //         for(i = 0; i < servicesInner.length; i++) {
    //             insertAfter(servicesInner[i], document.querySelector('.services-info-container'))
    //         }
    //     }
    // });
} catch(err) {};
//services
try {
    document.querySelector('.contact-left-button').addEventListener('click', function(){
        document.querySelector('.contact-right').classList.add('block');
        this.classList.add('hidden')
    });
    document.querySelector('.contact-right-close').addEventListener('click', function(){
        document.querySelector('.contact-right').classList.remove('block');
        document.querySelector('.contact-left-button').classList.remove('hidden')
    })
    var check1 = document.querySelector('#check1');
    var check2 = document.querySelector('#check2');
    check1.addEventListener('change', function(){
        check2.checked = false;
    })
    check2.addEventListener('change', function(){
        check1.checked = false;
    })
    var check1m = document.querySelector('#check1m');
    var check2m = document.querySelector('#check2m');
    check1m.addEventListener('change', function(){
        check2m.checked = false;
    })
    check2m.addEventListener('change', function(){
        check1m.checked = false;
    })
} catch(e) {}
//contact
try {
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    if(document.documentElement.clientWidth <= 1023) {
            insertAfter(document.querySelector('.brands-news-right'), document.querySelector('.brands-news-left-title') )
    }
} catch (error) {}
//brands