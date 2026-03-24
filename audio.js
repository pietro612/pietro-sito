const audioBtn = document.getElementById("audio-btn");
const audioPlayer = document.getElementById("audio-player");

audioBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    audioBtn.textContent = "❚❚"; // icona pausa
  } else {
    audioPlayer.pause();
    audioBtn.textContent = "♫"; // icona musica
  }
});
