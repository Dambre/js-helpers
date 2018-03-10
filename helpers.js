/* This file consists of js helpers functions */ 

function doWithInterval(func, items, interval){
    var f;
    f = function(i){
        func(items[i]);
        if(i + 1 == items.length)
           return;

        window.setTimeout(function(){
          f(i+1);
        }, interval);
    }
    f(0);
}