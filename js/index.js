// change the images in the header page

let images = document.querySelectorAll('.header-image');
let current = 0;

setInterval(() => {
    images.forEach((image, ind)=>{
        if (ind == current){
            image.classList.add('hidden');
        } else if (ind == current +1 && ind < images.length){
            image.classList.remove('hidden');
        } else if (current == images.length -1 && ind == 0){
            image.classList.remove('hidden');
        }
    })
    
    current += 1;

    if (current == images.length) {
        current = 0;
    }

}, 5000)


// adjust the navigation bar
var ul = document.querySelectorAll('.nav-li');
ul.forEach(function(li, ind) {
    li.onclick = function() {
        if (ind == 0) {
            window.scrollTo(0, 900);
        } else if(ind == 1) {
            window.scrollTo(0, 2200);
        } else {
            window.scrollTo(0, 20000);
        }
    }
})


