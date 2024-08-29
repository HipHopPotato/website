// Save the audio state (time) before leaving the page
window.addEventListener("beforeunload", function () {
    localStorage.setItem("audioTime", document.getElementById("bgAudio").currentTime);
});

// Set the audio to the saved time when loading a page
window.addEventListener("load", function () {
    var audio = document.getElementById("bgAudio");
    var savedTime = localStorage.getItem("audioTime");
    if (savedTime !== null) {
        audio.currentTime = savedTime;
    }
    audio.play();
});
