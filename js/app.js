/* =========================
   LOADER
========================= */

const loaderText = document.getElementById("loader-text");
const loader = document.querySelector(".loader");

const words = [
    "LIGHTS OFF...",
    "3",
    "2",
    "1",
    "ARGENTINA"
];

let index = 0;

loaderText.innerHTML = words[index];

let loaderTimer = setInterval(() => {

    index++;

    if(index < words.length){

        loaderText.innerHTML = words[index];

    } else {

        clearInterval(loaderTimer);

        setTimeout(() => {

            loader.classList.add("hide");

        }, 1000);

    }

}, 1000);



/* =========================
   HERO TO SQUAD TRANSITION
========================= */

const hero = document.querySelector(".hero");
const squad = document.querySelector(".squad-page");


hero.addEventListener("click", () => {

    hero.style.opacity = "0";


    setTimeout(() => {

        hero.style.display = "none";

        squad.style.display = "flex";

    }, 1000);

});



/* =========================
   PLAYER CARD SYSTEM
========================= */

const cards = document.querySelectorAll(".card");

let currentCard = null;
let closeTimer = null;


cards.forEach(card => {

    card.addEventListener("click", (e) => {

        // Prevent hero click conflict
        e.stopPropagation();


        /* MESSI SPECIAL PAGE */

        if(card.classList.contains("messi-card")){

            window.location.href = "messi.html";
            return;
        }


        /* Close old card */

        if(currentCard){
            // pause video in the previously-open card if present
            const prevVideo = currentCard.querySelector(".card-video");
            if (prevVideo) prevVideo.pause();
            currentCard.classList.remove("open");
        }


        clearTimeout(closeTimer);


        /* Open new card */
        card.classList.add("open");
        squad.classList.add("blur");

        /* PLAY VIDEO INSIDE CARD */
        const video = card.querySelector(".card-video");
        if (video) {
            video.currentTime = 0;
            video.play();
        }


        currentCard = card;


        /* Auto close after 5 seconds */
        closeTimer = setTimeout(() => {
            // pause the video when the card is auto-closed
            const v = card.querySelector(".card-video");
            if (v) {
                v.pause();
                v.currentTime = 0;
            }

            card.classList.remove("open");

            squad.classList.remove("blur");

            currentCard = null;

        }, 5000);


    });

});




/* =========================
   CLICK OUTSIDE TO CLOSE
========================= */

document.addEventListener("click", (e) => {


    if(currentCard && !currentCard.contains(e.target)) {

        // pause video in the card being closed
        const cv = currentCard.querySelector(".card-video");
        if (cv) {
            cv.pause();
            cv.currentTime = 0;
        }

        currentCard.classList.remove("open");

        squad.classList.remove("blur");

        clearTimeout(closeTimer);

        currentCard = null;

    }


});
