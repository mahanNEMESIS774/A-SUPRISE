/* =========================================================
   GIRL DAY SURPRISE
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE SYSTEM
========================================================= */

const pages = {

    page1: document.getElementById("page1"),
    page2: document.getElementById("page2"),
    page3: document.getElementById("page3"),
    page4: document.getElementById("page4")

};


function changePage(from, to) {

    const currentPage =
        pages[from];

    const nextPage =
        pages[to];


    currentPage.classList.remove("enter");

    currentPage.classList.add("leave");


    setTimeout(() => {

        currentPage.classList.remove("active");
        currentPage.classList.remove("leave");

        nextPage.classList.add("active");

        void nextPage.offsetWidth;

        nextPage.classList.add("enter");

    }, 1300);

}


/* =========================================================
   PAGE 1
========================================================= */

const message =
    document.getElementById("message");


const startButton =
    document.getElementById("startButton");


const particlesContainer =
    document.querySelector("#page1 .particles");


const messages = [

    "سلامممممم عموییییییییی 💗",

    "خوبیییییییی ناز منننننننن؟ 🥹",

    "عمویییییییییییی",

    "این که میبینی یه سوپرایز کوچولوعهههههه",

    "برای تووووووو 🥹💗"

];


let messageIndex = 0;


function showNextMessage() {

    if (
        messageIndex >=
        messages.length
    ) {

        setTimeout(() => {

            startButton.classList.add(
                "show"
            );

        }, 1200);

        return;
    }


    const line =
        document.createElement(
            "div"
        );


    line.className =
        "message-line";


    line.textContent =
        messages[
            messageIndex
        ];


    message.appendChild(
        line
    );


    messageIndex++;


    setTimeout(
        showNextMessage,
        2100
    );

}


/* =========================================================
   PAGE 1 PARTICLES
========================================================= */

for (
    let i = 0;
    i < 45;
    i++
) {

    const particle =
        document.createElement(
            "div"
        );


    particle.className =
        "particle";


    particle.style.left =
        Math.random() *
        100 +
        "%";


    particle.style.animationDuration =
        (
            7 +
            Math.random() *
            12
        ) +
        "s";


    particle.style.animationDelay =
        Math.random() *
        8 +
        "s";


    particle.style.transform =
        `scale(${0.4 + Math.random() * 1.5})`;


    particlesContainer.appendChild(
        particle
    );

}


/* =========================================================
   START PAGE 1
========================================================= */

setTimeout(
    showNextMessage,
    2600
);


/* =========================================================
   PAGE 1 BUTTON
========================================================= */

startButton.addEventListener(
    "click",
    () => {

        startButton.style.pointerEvents =
            "none";


        const hero =
            document.querySelector(
                "#page1"
            );


        hero.style.transform =
            "scale(1.08)";


        hero.style.filter =
            "blur(12px)";


        hero.style.opacity =
            "0";


        setTimeout(() => {

            hero.style.transform =
                "";

            hero.style.filter =
                "";

            hero.style.opacity =
                "";


            changePage(
                "page1",
                "page2"
            );

        }, 1500);

    }
);


/* =========================================================
   PAGE 2
========================================================= */


/*
    صفحه دوم حدود ۱۲ ثانیه
    نمایش داده می‌شود.
*/

let page2Timer =
    null;


function startPage2Timer() {

    clearTimeout(
        page2Timer
    );


    page2Timer =
        setTimeout(() => {

            changePage(
                "page2",
                "page3"
            );

            startPage3Timer();

        }, 12500);

}


/* =========================================================
   PAGE 3
========================================================= */


/*
    صفحه سوم اول متن را
    نمایش می‌دهد.

    بعد از حدود ۱۴ ثانیه
    می‌رود صفحه چهارم.
*/

let page3Timer =
    null;


function startPage3Timer() {

    clearTimeout(
        page3Timer
    );


    page3Timer =
        setTimeout(() => {

            changePage(
                "page3",
                "page4"
            );

        }, 11000);

}


/* =========================================================
   START PAGE 2 TIMER WHEN IT OPENS
========================================================= */

const observer =
    new MutationObserver(
        () => {

            if (
                pages.page2.classList.contains(
                    "active"
                )
            ) {

                startPage2Timer();

            }

        }
    );


observer.observe(
    pages.page2,
    {
        attributes: true,
        attributeFilter: [
            "class"
        ]
    }
);


/* =========================================================
   INITIAL STATE
========================================================= */

pages.page1.classList.add(
    "enter"
);


/* =========================================================
   EXTRA HEART EFFECT
========================================================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.innerHTML =
        "♡";


    heart.style.position =
        "fixed";


    heart.style.left =
        Math.random() *
        100 +
        "vw";


    heart.style.bottom =
        "-30px";


    heart.style.zIndex =
        "20";


    heart.style.pointerEvents =
        "none";


    heart.style.color =
        "rgba(255,150,210,.55)";


    heart.style.fontSize =
        (
            14 +
            Math.random() *
            20
        ) +
        "px";


    heart.style.textShadow =
        "0 0 15px rgba(255,70,180,.6)";


    heart.style.transition =
        "transform 7s linear, opacity 7s linear";


    document.body.appendChild(
        heart
    );


    requestAnimationFrame(() => {

        heart.style.transform =
            `
            translateY(-110vh)
            rotate(${Math.random() * 90 - 45}deg)
            `;


        heart.style.opacity =
            "0";

    });


    setTimeout(() => {

        heart.remove();

    }, 7200);

}


/* =========================================================
   RANDOM HEARTS
========================================================= */

setInterval(
    createHeart,
    1800
);