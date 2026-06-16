/* ==================================
   MESSI DOCUMENTARY EFFECTS
================================== */


/* ==================================
   🎵 MUCHACHOS CHANT CONTROL
================================== */

const musicBtn = document.getElementById("music-btn");
const chant = document.getElementById("chant");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        chant.play();

        musicBtn.innerHTML = "🔊 CHANT ON";

        playing = true;

    } else {

        chant.pause();

        musicBtn.innerHTML = "🔇 CHANT OFF";

        playing = false;
    }

});


/* ==================================
   💡 MOUSE BLUE SPOTLIGHT
================================== */

const light = document.querySelector(".mouse-light");


document.addEventListener("mousemove", (e) => {

    light.style.left = e.clientX + "px";

    light.style.top = e.clientY + "px";

});


/* ==================================
   🖼️ MESSI PORTRAIT SLIDESHOW
================================== */


const photos = [

    "assets/images/messi1.jpg",

    "assets/images/messi2.jpg",

    "assets/images/messi3.jpg",

    "assets/images/messi4.jpg"

];


const photo = document.getElementById("messi-photo");


let photoIndex = 0;


// Change every 4 seconds

setInterval(() => {


    // Fade out

    photo.style.opacity = 0;


    setTimeout(() => {


        photoIndex++;


        if (photoIndex >= photos.length) {

            photoIndex = 0;

        }


        photo.src = photos[photoIndex];


        // Fade in

        photo.style.opacity = 1;


    }, 800);


}, 4000);

/* ==================================
   🎬 CINEMATIC PAGE START EFFECT
================================== */


window.addEventListener("load", () => {


    // Smooth entrance

    document.body.style.opacity = 0;


    setTimeout(() => {

        document.body.style.transition = "opacity 2s";

        document.body.style.opacity = 1;

    }, 300);


});


/* ==================================
   ⭐ EXTRA: STAR SPARKLE EFFECT
================================== */


const stars = document.querySelectorAll(".stars span");


stars.forEach((star, index) => {


    setInterval(() => {


        star.style.transform =
            `scale(${1 + Math.random() * 0.6})`;

        star.style.filter =
            `drop-shadow(0 0 ${20 + Math.random()*20}px gold)`;


    }, 1000 + index * 500);


});