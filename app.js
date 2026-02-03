import { songs } from "./data.js";

let song_count = 1;
let likedSongs = JSON.parse(localStorage.getItem("likedSongs")) || [];
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const audio = document.getElementById("player");
const ff = document.getElementById("ff");
const bf = document.getElementById("bf");
const pause = document.getElementById("pause");
const title = document.getElementById("title");
const img = document.getElementById("img");
const progress = document.getElementById("timeline");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const list = document.getElementById("allSongs");
const likedList = document.getElementById("likedSongs");
audio.src = songs[song_count].url;
title.innerText = songs[song_count].title;
img.src = songs[song_count].cover;

audio.addEventListener("loadedmetadata", () => {
  progress.max = audio.duration;
  durationEl.textContent = formatTime(audio.duration);
});

// update while playing
audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// user drags the timeline
progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

pause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

//fast forwarding by 5 sec
ff.addEventListener("click", () => {
  audio.currentTime += 5;
});

//replaying by 5 sec
bf.addEventListener("click", () => {
  audio.currentTime -= 5;
});

//changing to next song
nextBtn.addEventListener("click", nextSong);

function nextSong() {
  audio.src = songs[song_count + 1].url;
  title.innerText = songs[song_count + 1].title;
  img.src = songs[song_count + 1].cover;
  song_count++;
  audio.play();
}

backBtn.addEventListener("click", previousSong);

function previousSong() {
  audio.src = songs[song_count - 1].url;
  title.innerText = songs[song_count - 1].title;
  img.src = songs[song_count - 1].cover;
  song_count--;
  audio.play();
}

audio.addEventListener("ended", nextSong);

function updateLikeList() {
  likedList.innerHTML = "";
  likedSongs.forEach((id) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${songs[id].cover}" width="60"/>
    <p>${songs[id].title}</p>
    <button onclick="likeSong('${id}')">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff003c">
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
      </svg>
    </button>
    <button onclick="playSong('${id}')"><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg></button>
    `;
    likedList.appendChild(div);
    div.classList.add("songList");
    div.classList.add("liked");
  });
  if (likedList.innerHTML == "") {
    likedList.innerHTML =
      "<h3>Nothing to see here, start liking music to add it here</h3>";
  } else {
    console.log("hkk");
  }
}
updateLikeList();

Object.entries(songs).forEach(([id, song]) => {
  const div = document.createElement("div");
  div.classList.add("songList");
  div.classList.add(`song${id}`);
  div.innerHTML = `
    <img src="${song.cover}" width="60"/>
    <p>${song.title}</p>
    
    <button onclick="likeSong('${id}')">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
      </svg>
    </button>

    <button onclick="playSong('${id}')">
      <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
        <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/>
      </svg>
    </button>
  `;

  list.appendChild(div);
});

function playSong(id) {
  const playingSong = document.querySelector(".playing");
  playingSong.classList.remove("playing");
  audio.src = songs[id].url;
  title.innerText = songs[id].title;
  img.src = songs[id].cover;
  audio.play();
  document.querySelector(`.song${id}`).classList.add("playing");
}

function likeSong(id) {
  const index = likedSongs.indexOf(id);

  if (index === -1) {
    // Not liked yet, so add it
    likedSongs.push(id);
    updateHeartUI(id, "ok");
    console.log(`Song ${id} added to favorites`);
  } else {
    // Already liked, so remove it (toggle off)
    likedSongs.splice(index, 1);
    updateHeartUI(id, "no");
    console.log(`Song ${id} removed from favorites`);
  }

  // 2. Save the updated array back to localStorage
  localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
  updateLikeList();
  // Optional: Refresh the UI to show the filled/empty heart
}

window.playSong = playSong;
window.likeSong = likeSong;
window.updateHeartUI = updateHeartUI;
// to fromate song duration into time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

function updateHeartUI(id, option) {
  let songId = `.song${id}`;
  let likedUi = document.querySelector(songId);
  if (option == "ok") {
    likedUi.classList.add("liked");
  } else {
    likedUi.classList.remove("liked");
  }

  console.log(likedUi);
}
