const enter = document.getElementById("enter");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

if (intro) intro.classList.remove("hide");
if (main && intro) main.classList.add("hide");

if (enter) {
    enter.addEventListener("click", () => {
        intro.classList.add("hide");
        main.classList.remove("hide");
    });
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("audio").forEach(audio => {
        audio.addEventListener("ended", () => {
            const img = document.getElementById("btn-" + audio.id);
            if (img) img.src = "PlayBtn.svg";
        });
    });
});

function playLetter(id, btn) {
    const audio = document.getElementById(id);
    const img = document.getElementById("btn-" + id);
    if (!audio || !img) return;

    if (audio.ended || (audio.currentTime > 0 && audio.paused)) {
        audio.currentTime = 0;
    }

    if (audio.paused) {
        document.querySelectorAll("audio").forEach(a => {
            if (a !== audio && !a.paused) {
                a.pause();
                const otherImg = document.getElementById("btn-" + a.id);
                if (otherImg) otherImg.src = "PlayBtn.svg";
            }
        });
        audio.play();
        img.src = "PauseBtn.svg";
    } else {
        audio.pause();
        img.src = "PlayBtn.svg";
    }
}