function switcher(item, classs, toSwitch, toSwitchClass) {
    var arrItems = document.querySelectorAll(item);
    var items = Array.prototype.slice.call(arrItems);

    var arrToSwitchItems = document.querySelectorAll(toSwitch);
    var toSwitchItems = Array.prototype.slice.call(arrToSwitchItems);

    items.forEach(function(e, i){
        e.addEventListener('click', function(){
            items.forEach(function(e){
                e.classList.remove(classs);
            })
            e.classList.add(classs)
            if(toSwitch && toSwitchClass) {
                toSwitchItems.forEach(function(e){
                    e.classList.remove(toSwitchClass);
                })
                toSwitchItems[i].classList.add(toSwitchClass)
            }
        })
    })
}

function clearClasses(items, classs){
    Array.prototype.slice.call(document.querySelectorAll(items)).forEach(function(e){
        e.classList.remove(classs);
    })
}

