var player = document.querySelector('video');
var playButton = document.querySelector('button.player__button.toggle');
var skipBackward = document.querySelector('button[data-skip="-10"]');
var skipForward = document.querySelector('button[data-skip="25"]');
var volume = document.querySelector('input[name=volume]');
var playBackRate = document.querySelector('input[name=playbackRate]');
var progress = document.querySelector('.progress__filled');
var sliderInterval;

volume.value = player.volume;
playbackRate.value = player.playbackRate;

function handleOnPlaying() {
    sliderInterval = setInterval(() => {
        console.log((player.currentTime / player.duration) * 100)
        progress.style.flexBasis = `${(player.currentTime / player.duration)*100}%`;
    }, 1000);
}

function handleOnPause() {

}

function togglePlay() {
    if(player.paused) {
        player.play();
        playButton.innerHTML = '⏸️';
    }
    else {
        player.pause();
        playButton.textContent = '▶️';
    }
}

function handleVolumeChange() {
    player.volume = volume.value;
}

function handlePlaybackRateChange(event) {
   player.playbackRate = event.srcElement.value;
}

function handleSkipForward() {
    player.currentTime += 25;
}

function handleSkipBackward() {
    player.currentTime -= 10;
}
