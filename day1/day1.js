var map = {
    '65': 'sounds/clap.wav',
    '83': 'sounds/hihat.wav',
    '68': 'sounds/kick.wav',
    '70': 'sounds/openhat.wav',
    '71': 'sounds/boom.wav',
    '72': 'sounds/ride.wav',
    '74': 'sounds/snare.wav',
    '75': 'sounds/tom.wav',
    '76': 'sounds/tink.wav'
};

document.addEventListener('DOMContentLoaded', function (event) {
    Object.keys(map).map(function(key) {
        var newElement = document.createElement('audio');
        newElement.setAttribute('src', map[key]);
        newElement.setAttribute('id', key);
        newElement.setAttribute('type', 'audio/wav');
        document.getElementById('audio').appendChild(newElement);
    });

    document.body.addEventListener('keyup', function (e) {
        if (map[e.keyCode]) {
            document.getElementById('box'+e.keyCode).classList.remove('active');
        }
    });

    document.body.addEventListener('keydown', function (e) {
        if (map[e.keyCode]) {
            document.getElementById('box'+e.keyCode).classList.add('active');
            document.getElementById(e.keyCode).cloneNode().play();
        }
    });
});