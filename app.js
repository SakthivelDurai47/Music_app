import { songs } from "./data.js";
// For Song list rendering
let song_count = 0;
let likedSongs = JSON.parse(localStorage.getItem("likedSongs")) || [];
// controls
const bf = document.getElementById("bf");
const backBtn = document.getElementById("back");
const pause = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const ff = document.getElementById("ff");
// Player UI
const img = document.getElementById("img");
const audio = document.getElementById("player");
const title = document.getElementById("title");
const currentTimeEl = document.getElementById("currentTime");
const progress = document.getElementById("timeline");
const durationEl = document.getElementById("duration");
// Playlist
const likedTab = document.getElementById("likeSongBtn");
const likedList = document.getElementById("likedSongs");
const allTab = document.getElementById("allSongBtn");
const list = document.getElementById("allSongs");
// feature Buttons
const theme = document.getElementById("theme");
// Inital song loading on load
try {
  audio.src = songs[likedSongs[song_count]].url;
  title.innerText = songs[likedSongs[song_count]].title;
  img.src = songs[likedSongs[song_count]].cover;
  updateNavigator();
} catch (e) {
  title.innerText = "...............";
}

// gets the duration of the song
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
    updatePlayUI(likedSongs[song_count]);
    audio.play();
  } else {
    audio.pause();
  }
  playBtnChange();
});

function playBtnChange() {
  if (audio.paused) {
    pause.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>';
  } else {
    pause.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>';
  }
}
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
  audio.src = songs[likedSongs[song_count + 1]].url;
  title.innerText = songs[likedSongs[song_count + 1]].title;
  img.src = songs[likedSongs[song_count + 1]].cover;
  updatePlayUI(likedSongs[song_count + 1]);
  song_count++;
  audio.play();
  updateNavigator();
}

backBtn.addEventListener("click", previousSong);

function previousSong() {
  audio.src = songs[likedSongs[song_count - 1]].url;
  title.innerText = songs[likedSongs[song_count - 1]].title;
  img.src = songs[likedSongs[song_count - 1]].cover;
  updatePlayUI(likedSongs[song_count - 1]);
  song_count--;
  audio.play();
  updateNavigator();
}

audio.addEventListener("ended", nextSong);

// switching to liked songs
likedTab.addEventListener("click", () => {
  likedList.style.display = "block";
  list.style.display = "none";
  likedTab.classList.add("active");
  allTab.classList.remove("active");
});
// switching to all songs
allTab.addEventListener("click", () => {
  likedList.style.display = "none";
  list.style.display = "block";
  likedTab.classList.remove("active");
  allTab.classList.add("active");
});
function updateLikeList() {
  likedList.innerHTML = "";

  likedSongs.forEach((id) => {
    const div = document.createElement("div");
    div.classList.add(`song${id}`);
    div.innerHTML = `
    <img src='${songs[id].cover}' width="60"/>
    <p>${songs[id].title}</p>
    <button onclick="likeSong('${id}')">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f6f6f6c4">
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
      </svg>
    </button>
    <button onclick="playSong('${id}')">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
        <path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"/>
      </svg>
    </button>
    `;
    likedList.appendChild(div);
    div.classList.add("songList");
    div.classList.add("liked");
  });
  if (likedList.innerHTML == "") {
    likedList.innerHTML =
      "<h4>Nothing to see here :(<br>start liking music to add it here</h4>";
  }
  updatePlayUI(likedSongs[song_count]);
}
updateLikeList();

function updateAllList() {
  list.innerHTML = "";
  Object.entries(songs).forEach(([id, song]) => {
    if (likedSongs.includes(id)) {
      null;
    } else {
      const div = document.createElement("div");
      div.classList.add("songList");
      div.classList.add(`song${id}`);
      div.innerHTML = `
    <img src='${song.cover}' onerror="this.src='covers/images.jpg';" width="60"/>
    <p>${song.title}</p>
    
    <button onclick="likeSong('${id}')">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f6f6f6c4">
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
      </svg>
    </button>

    <button onclick="playSong('${id}')">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
        <path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"/>
      </svg>
    </button>
  `;

      list.appendChild(div);
    }
  });
}

updateAllList();

function playSong(id) {
  updatePlayUI(id);
  song_count = likedSongs.indexOf(id);
  console.log(song_count);
  audio.src = songs[id].url;
  title.innerText = songs[id].title;
  img.src = songs[id].cover;
  audio.play();
  playBtnChange();
  updateNavigator();
  audio.addEventListener("ended", nextSong);
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
  updateAllList();
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
}

function updatePlayUI(id) {
  const playingSong = document.querySelectorAll(".playing");
  playingSong.forEach((ele) => {
    ele.classList.remove("playing");
  });
  const songPlaying = document.querySelector(`.song${id}`);
  try {
    songPlaying.classList.add("playing");
  } catch (e) {
    // console.log(e);
    null;
  }
}

let currentTheme = localStorage.getItem("theme") || "dark";

themeSwither();

theme.addEventListener("click", () => {
  currentTheme = currentTheme == "dark" ? "light" : "dark";
  themeSwither();
});

function themeSwither() {
  const root = document.documentElement;
  if (currentTheme == "light") {
    root.style.setProperty("--background-color", "#f6f6f6");

    root.style.setProperty("--text-color", "#131313");

    root.style.setProperty("--secondary-dim", "#131313c4");
  } else {
    root.style.setProperty("--background-color", "#131313");

    root.style.setProperty("--text-color", "#f6f6f6");

    root.style.setProperty("--secondary-dim", "#f6f6f6c4");
  }
  localStorage.setItem("theme", currentTheme);
}

// Check if the browser supports the Media Session API
if ("mediaSession" in navigator) {
  // 1. Set the Metadata
  try {
    updateNavigator();

    navigator.mediaSession.setActionHandler("play", () => {
      audio.play();
    });

    navigator.mediaSession.setActionHandler("pause", () => {
      audio.pause();
    });

    navigator.mediaSession.setActionHandler("previoustrack", () => {
      previousSong();
    });

    navigator.mediaSession.setActionHandler("nexttrack", () => {
      nextSong();
    });
  } catch (e) {
    null;
  }
}

function updateNavigator() {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: songs[likedSongs[song_count]].title,
    artist: "Sakthi's Music Player",
    artwork: [
      {
        src: (img.src = songs[likedSongs[song_count]].cover),
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: (img.src = songs[likedSongs[song_count]].cover),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });
}
