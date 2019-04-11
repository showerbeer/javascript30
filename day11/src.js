var player = document.querySelector('video');
var playButton = document.querySelector('button.player__button.toggle');
var skipBackward = document.querySelector('button[data-skip="-10"]');
var skipForward = document.querySelector('button[data-skip="25"]');

playButton.addEventListener('click', () => {
    if(player.paused) {
        player.play();
        playButton.innerHTML = '⏸️';
    }
    else {
        player.pause();
        playButton.textContent = '▶️';
    }
});

skipForward.addEventListener('click', () => {
    player.currentTime += 25;
})

skipBackward.addEventListener('click', () => {
    player.currentTime -= 10;
})