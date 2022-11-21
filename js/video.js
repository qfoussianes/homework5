// Add js here.
const video = document.getElementById("videoplayer");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const slowBtn = document.getElementById("slower");
const fastBtn = document.getElementById("faster");
const skipBtn = document.getElementById("skip");
const muteBtn = document.getElementById("mute");
const volumeSlider = document.getElementById("slider");
const volumeText = document.getElementById("volume");
let speed = [0.5, 1, 2];
let speedIndex = 1; // speed[1] = 1


playBtn.addEventListener('click', function () {
    video.play();
})

pauseBtn.addEventListener('click', function () {
    video.pause();
})

slowBtn.addEventListener('click', function () {
    if (speedIndex === 0) {
        alert("Video is at slowest speed!")
    } else {
        speedIndex--;
    }
    video.playbackRate = speed[speedIndex];
})

fastBtn.addEventListener('click', function () {
    if (speedIndex === speed.length - 1) {
        alert("Video is at fastest speed!")
    } else {
        speedIndex++;
    }
    video.playbackRate = speed[speedIndex];
})

skipBtn.addEventListener('click', function () {
    let current = video.currentTime;

    if (current + 15 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime = current + 15;
    }
})

muteBtn.addEventListener('click', function () {
    if (!video.muted) {
        video.muted = true;
        this.textContent = "Unmute"
    } else {
        video.muted = false;
        this.textContent = "Mute"
    }
})

volumeSlider.addEventListener('input', function () {
    video.volume = this.value / 100;
    volumeText.textContent = this.value + "%";
})