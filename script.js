/* =========================
   START EXPERIENCE
========================= */

function startJourney() {

    const opening = document.getElementById("opening");
    const main = document.getElementById("mainContent");

    opening.style.opacity = "0";
    opening.style.transition = "opacity 1s ease";

    setTimeout(() => {

        opening.classList.add("hidden");
        main.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        startFloatingHearts();

        observeSections();

    }, 1000);
}


/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =========================
   LOVE MESSAGES
========================= */

const loveMessages = [

    "I love your smile. There's something about it that can instantly make me happy. ❤️",

    "I love the positive energy you carry. You have a way of making things feel lighter and more hopeful. ✨",

    "I love that you're goal-oriented. I love seeing you work toward the things you want, and I genuinely want to see you succeed. ❤️",

    "I love how sincere and honest you are. Those are qualities I really appreciate about you. 🤍",

    "I love that you're always looking out for me. Even from a distance, I know that you care about me. ❤️"

];


function openLove(index) {

    const popup = document.getElementById("lovePopup");
    const popupText = document.getElementById("popupText");

    popupText.textContent = loveMessages[index];

    popup.classList.add("active");

}


function closeLove() {

    document
        .getElementById("lovePopup")
        .classList.remove("active");

}


/* Close popup when clicking outside */

document.getElementById("lovePopup").addEventListener("click", function(event) {

    if (event.target === this) {
        closeLove();
    }

});


/* =========================
   MUSIC
========================= */

let musicPlaying = false;

function toggleMusic() {

    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicButton");

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;
                button.textContent = "❚❚";

            })
            .catch(() => {

                alert(
                    "Add a file called 'music.mp3' to your website folder first."
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        button.textContent = "♫";

    }

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const container =
        document.getElementById("hearts-container");

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        Math.random() > 0.5 ? "♡" : "♥️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 15 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);

}


function startFloatingHearts() {

    setInterval(createHeart, 1200);

}


/* =========================
   SCROLL REVEAL
========================= */

function observeSections() {

    const elements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================
   REPLAY
========================= */

function replayExperience() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLove();

    }

});
