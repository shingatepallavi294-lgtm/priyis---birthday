/* =====================================
   SPECIAL MESSAGE
===================================== */

const specialMessage = `Happy Birthday to the most special person in my life! 🥹❤️✨

From all the random conversations, stupid jokes, endless laughing 😂, little fights 😭😂, unforgettable memories 📸, and those moments when we didn't even have to say anything to understand each other — I wouldn't trade any of it for anything. Every memory with you has a special place in my heart. ❤️🫶🏻

I'm genuinely grateful that life gave me a bestie like you. 🥹💗🧿

I hope this new year of your life brings you everything you've been wishing for. ✨ I hope you achieve all your dreams 🌟, become the person you've always wanted to be, and never stop believing in yourself. 💫 I hope you get countless reasons to smile 😊, people who genuinely love and value you 🫂❤️, and memories that you'll remember forever. ♾️

We've already created so many beautiful memories together 📸💞, but I hope these are just the beginning. I want us to have hundreds more stupid conversations 😂, random plans 🫣, crazy laughs 🤣, unforgettable trips ✈️, countless pictures 📷, and moments that we'll look back at someday and say, "Remember when we used to do this?" 🥹💗

Thank you for being you. ❤️ Thank you for all the little things you do, for the laughs 😂, for the memories 🥹, for listening to me 🫂, and simply for being a person I can call my bestie. 💕♾️

You deserve all the happiness in the world 🌎💖, not just today but every single day. ✨🌸

So on your special day, I just want to say...

Happy Birthday, my bestie! 🎂🎀❤️🎉

I would still choose you. 🥹❤️

Here's to you, to us, to all the memories we've already made 📸💞, and to all the crazy, beautiful memories that are still waiting for us. 🥂✨♾️

Happy Birthday once again, Bestie! 🎂💗✨🎉

Love you always. 🫶🏻❤️♾️`;



/* =====================================
   SCREEN CHANGE
===================================== */

function showScreen(id) {


    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    document
        .getElementById(id)
        .classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


}



/* =====================================
   BACKGROUND MUSIC
===================================== */

const bgMusic =
    document.getElementById("bgMusic");



function startMusic() {


    bgMusic.volume = 0.35;


    bgMusic
        .play()
        .catch(() => {

            console.log(
                "Music will start after user interaction."
            );

        });


}



/* =====================================
   WELCOME
===================================== */

window.addEventListener(
    "load",
    function () {


        document
            .getElementById(
                "welcomeSpeech"
            )
            .innerText =
            "Hiiii! 👋🏻 Happy Birthday! 🎂 Today I have a little surprise prepared just for you! ❤️ Are you ready? Click Start Celebration and let's begin! 🎉";


    }
);



/* =====================================
   START CELEBRATION
===================================== */

function startCelebration() {


    startMusic();


    createBalloons();


    startFloatingHearts();


    showScreen("cake");


    document
        .getElementById(
            "cakeSpeech"
        )
        .innerText =
        "Yayyy! 🎉 Let's make a birthday cake! 🎂 First, look at the candles... and then let's cut the cake! 😂❤️";


}



/* =====================================
   CAKE CUT
===================================== */

function cutCake() {


    const cake =
        document.getElementById(
            "cakeObject"
        );


    cake.classList.add("blown");


    setTimeout(() => {

        cake.classList.add("cut");

    }, 700);



    document
        .getElementById(
            "cakeButton"
        )
        .disabled = true;



    document
        .getElementById(
            "cakeButton"
        )
        .innerText =
        "Cake Cut! 🎂❤️";



    createConfetti();



    setTimeout(() => {


        document
            .getElementById(
                "memoriesButton"
            )
            .classList
            .remove("hidden");


    }, 1800);


}



/* =====================================
   PHOTOS
===================================== */

function showPhotos() {


    showScreen("photos");


    revealPhotos();


}



/* =====================================
   REVEAL ALL 10 PHOTOS
===================================== */

function revealPhotos() {


    const photos =
        document.querySelectorAll(
            ".memory-photo"
        );


    const observer =
        new IntersectionObserver(

            entries => {


                entries.forEach(entry => {


                    if (
                        entry.isIntersecting
                    ) {


                        entry.target
                            .classList
                            .add("visible");


                    }


                });


            },

            {

                threshold: 0.15

            }

        );



    photos.forEach(photo => {

        observer.observe(photo);

    });


}



/* =====================================
   VIDEOS
===================================== */

function showVideos() {


    showScreen("videos");


}



/* =====================================
   STOP OTHER VIDEOS
===================================== */

const videoWrapper =
    document.getElementById(
        "videoWrapper"
    );



videoWrapper.addEventListener(
    "play",
    function (event) {


        document
            .querySelectorAll("video")
            .forEach(video => {


                if (
                    video !==
                    event.target
                ) {

                    video.pause();

                }


            });


    },
    true
);



/* =====================================
   ENVELOPE
===================================== */

function openEnvelope() {


    showScreen("envelope");


}



function openLetter() {


    const envelope =
        document.getElementById(
            "envelopeBox"
        );


    envelope.classList.add("open");



    setTimeout(() => {


        document
            .getElementById(
                "readMessageButton"
            )
            .classList
            .remove("hidden");


    }, 1200);


}



/* =====================================
   SPECIAL MESSAGE
===================================== */

function showMessage() {


    showScreen("message");


    const messageElement =
        document.getElementById(
            "specialMessage"
        );


    messageElement.innerText = "";


    typeMessage(
        messageElement,
        specialMessage
    );


}



/* =====================================
   TYPEWRITER
===================================== */

function typeMessage(
    element,
    text
) {


    let index = 0;


    const speed = 15;



    function type() {


        if (
            index <
            text.length
        ) {


            element.innerText +=
                text.charAt(index);


            index++;


            setTimeout(
                type,
                speed
            );


        }

        else {


            document
                .getElementById(
                    "finalButton"
                )
                .classList
                .remove("hidden");


        }


    }


    type();


}



/* =====================================
   FINAL
===================================== */

function finalSurprise() {


    showScreen("final");


    createConfetti();


    createBalloons();



    for (
        let i = 0;
        i < 30;
        i++
    ) {


        setTimeout(
            createHeart,
            i * 150
        );


    }


}



/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    const hearts = [

        "❤️",
        "💗",
        "💖",
        "💕",
        "💓"

    ];


    heart.innerText =
        hearts[
            Math.floor(
                Math.random() * 5
            )
        ];



    heart.style.left =
        Math.random() * 100 +
        "vw";



    heart.style.fontSize =
        18 +
        Math.random() * 25 +
        "px";



    document.body.appendChild(
        heart
    );



    setTimeout(
        () => heart.remove(),
        6000
    );


}



/* =====================================
   CONTINUOUS HEARTS
===================================== */

function startFloatingHearts() {


    setInterval(
        createHeart,
        1000
    );


}



/* =====================================
   BALLOONS
===================================== */

function createBalloons() {


    const emojis = [

        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈"

    ];



    for (
        let i = 0;
        i < 12;
        i++
    ) {


        setTimeout(() => {


            const balloon =
                document.createElement(
                    "div"
                );


            balloon.className =
                "balloon";


            balloon.innerText =
                emojis[
                    Math.floor(
                        Math.random() *
                        emojis.length
                    )
                ];



            balloon.style.left =
                Math.random() * 100 +
                "vw";



            balloon.style.animationDuration =
                6 +
                Math.random() * 5 +
                "s";



            document.body.appendChild(
                balloon
            );



            setTimeout(
                () => balloon.remove(),
                12000
            );


        }, i * 300);


    }


}



/* =====================================
   CONFETTI
===================================== */

function createConfetti() {


    const symbols = [

        "🎉",
        "✨",
        "🎊",
        "💖",
        "⭐"

    ];



    for (
        let i = 0;
        i < 100;
        i++
    ) {


        const confetti =
            document.createElement(
                "div"
            );


        confetti.className =
            "confetti";


        confetti.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];



        confetti.style.left =
            Math.random() * 100 +
            "vw";



        confetti.style.fontSize =
            10 +
            Math.random() * 20 +
            "px";



        confetti.style.animationDuration =
            2 +
            Math.random() * 3 +
            "s";



        document.body.appendChild(
            confetti
        );



        setTimeout(
            () => confetti.remove(),
            6000
        );


    }


}



/* =====================================
   TOUCH / CLICK HEART
===================================== */

document.addEventListener(
    "pointerdown",
    function(event) {


        const heart =
            document.createElement(
                "div"
            );


        heart.className =
            "heart";


        heart.innerText =
            "💖";


        heart.style.left =
            event.clientX + "px";


        heart.style.bottom =
            (
                window.innerHeight -
                event.clientY
            ) + "px";


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => heart.remove(),
            5000
        );


    }
);