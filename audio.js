let audio = new Audio("musica.mp3");
let playing = false;

function toggleAudio() {
    if (!playing) {
        audio.play();
        playing = true;
    } else {
        audio.pause();
        playing = false;
    }
}
