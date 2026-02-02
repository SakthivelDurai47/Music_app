const songs = [
  "https://github.com/sakthivel-0707/music-files/releases/download/v1/Aila.Aila.mp3",
  "https://github.com/sakthivel-0707/music-files/releases/download/v1/Ennodu.Nee.Irundhaal.-.Reprise.mp3",
  "https://github.com/sakthivel-0707/music-files/releases/download/v1/Ennodu.Nee.Irundhaal.mp3",
  "https://github.com/sakthivel-0707/music-files/releases/download/v1/Ladio.mp3",
  "https://github.com/sakthivel-0707/music-files/releases/download/v1/Mersalaayitten.-.Remix.mp3",
  "https://github.com/sakthivel-0707/music-files/releases/download/v1/Pookkalae.Sattru.Oyivedungal.mp3",
];

let song_count = 0;
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const audio = document.getElementById("player");
const ff = document.getElementById("ff");
const bf = document.getElementById("bf");
const pause = document.getElementById("pause");
const title = document.getElementById("title");
const img = document.getElementById("img");
audio.src = songs[song_count];
title.innerText = audio.src;

pause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
ff.addEventListener("click", () => {
  audio.currentTime += 5;
});
bf.addEventListener("click", () => {
  audio.currentTime -= 5;
});

nextBtn.addEventListener("click", () => {
  audio.src = songs[song_count + 1];
  song_count++;

  title.innerText = audio.src;
});

backBtn.addEventListener("click", () => {
  audio.src = songs[song_count - 1];

  song_count--;
  title.innerText = audio.src;
});
