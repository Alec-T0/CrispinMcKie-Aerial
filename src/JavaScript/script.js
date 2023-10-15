let curImg = 1;
let bgImgs = document.querySelectorAll(".bg-imgs img");
    setInterval(() => {
        /* if first image (curImg = 0), then unload last image */
        let prevImg = curImg? curImg-1: bgImgs.length-1;

        bgImgs[prevImg].style.opacity = 0;
        bgImgs[curImg].style.opacity = 100;
        curImg++;

        /* if last image, go back to first image */
        if (curImg >= bgImgs.length) {
            curImg = 0;
        }
    / *every 10 seconds */
}, 50000);