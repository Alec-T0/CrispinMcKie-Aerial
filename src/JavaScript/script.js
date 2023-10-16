var images = document.querySelectorAll('#container img');
var currentImage = 0;
setInterval(function() {
    images[currentImage].style.opacity = 0;
    currentImage++;
    if (currentImage >= images.length) {
    currentImage = 1;
    }
    images[currentImage].style.opacity = 1;
}, 1000);