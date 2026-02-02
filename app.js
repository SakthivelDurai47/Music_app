const BASE_URL =
  "https://github.com/sakthivel-0707/music-files/releases/download/v1/";

const songs = [
  {
    title: "Aandipatti",
    audio: `${BASE_URL}${encodeURIComponent("Aandipatti.mp3")}`,
    cover: "covers/Aandipatti.jpeg",
  },
  {
    title: "Aaruyire",
    audio: `${BASE_URL}${encodeURIComponent("Aaruyire.mp3")}`,
    cover: "covers/Aaruyire.jpeg",
  },
  {
    title: "Aila Aila",
    audio: `${BASE_URL}${encodeURIComponent("Aila.Aila.mp3")}`,
    cover: "covers/Aila Aila.jpeg",
  },
  {
    title: "Anbil Avan",
    audio: `${BASE_URL}${encodeURIComponent("Anbil.Avan.mp3")}`,
    cover: "covers/Anbil Avan.jpeg",
  },
  {
    title: "Aval",
    audio: `${BASE_URL}${encodeURIComponent("Aval.mp3")}`,
    cover: "covers/Aval.jpeg",
  },
  {
    title: "Azhagiya Soodana Poovey",
    audio: `${BASE_URL}${encodeURIComponent("Azhagiya.Soodana.Poovey.mp3")}`,
    cover: "covers/Azhagiya Soodana Poovey.jpeg",
  },

  {
    title: "Chammak Challo",
    audio: `${BASE_URL}${encodeURIComponent("Chammak.Challo.Muthada.Chammak.Challo.mp3")}`,
    cover: "covers/Chammak Challo (Muthada Chammak Challo).jpeg",
  },
  {
    title: "Chella Kutti",
    audio: `${BASE_URL}${encodeURIComponent("Chella.Kutti.mp3")}`,
    cover: "covers/Chella Kutti.jpeg",
  },
  {
    title: "Ennodu Nee Irundhaal",
    audio: `${BASE_URL}${encodeURIComponent("Ennodu.Nee.Irundhaal.mp3")}`,
    cover: "covers/Ennodu Nee Irundhaal.jpeg",
  },
  {
    title: "Ennodu Nee Irundhaal - Reprise",
    audio: `${BASE_URL}${encodeURIComponent("Ennodu.Nee.Irundhaal.-.Reprise.mp3")}`,
    cover: "covers/Ennodu Nee Irundhaal - Reprise.jpeg",
  },
  {
    title: "Feel My Love",
    audio: `${BASE_URL}${encodeURIComponent("Feel.My.Love.mp3")}`,
    cover: "covers/Feel My Love.jpeg",
  },
  {
    title: "Halena",
    audio: `${BASE_URL}${encodeURIComponent("Halena.mp3")}`,
    cover: "covers/Halena.jpeg",
  },
  {
    title: "Idhayam Love",
    audio: `${BASE_URL}${encodeURIComponent("Idhayam.Love.Megamo.Aval.mp3")}`,
    cover: "covers/Idhayam Love (Megamo Aval).jpeg",
  },
  {
    title: "Kaadhalai Solla Mudiyatha",
    audio: `${BASE_URL}${encodeURIComponent("Kaadhalai.Solla.Mudiyatha.mp3")}`,
    cover: "covers/Kaadhalai Solla Mudiyatha.jpeg",
  },
  {
    title: "Kanimaa",
    audio: `${BASE_URL}${encodeURIComponent("Kanimaa.From.Retro.mp3")}`,
    cover: "covers/Kanimaa.jpeg",
  },
  {
    title: "Kannadi Poove",
    audio: `${BASE_URL}${encodeURIComponent("Kannadi.Poove.mp3")}`,
    cover: "covers/Kannadi Poove.jpeg",
  },
  {
    title: "Konjam - 1",
    audio: `${BASE_URL}${encodeURIComponent("Konjam.-1.mp3")}`,
    cover: "covers/Konjam -1.jpeg",
  },
  {
    title: "Konjam - 2",
    audio: `${BASE_URL}${encodeURIComponent("Konjam.-.2.mp3")}`,
    cover: "covers/Konjam - 2.jpeg",
  },
  {
    title: "Kurumugil",
    audio: `${BASE_URL}${encodeURIComponent("Kurumugil.mp3")}`,
    cover: "covers/Kurumugil.jpeg",
  },
  {
    title: "Ladio",
    audio: `${BASE_URL}${encodeURIComponent("Ladio.mp3")}`,
    cover: "covers/Ladio.jpeg",
  },
  {
    title: "Maya Nadhi",
    audio: `${BASE_URL}${encodeURIComponent("Maya.Nadhi.mp3")}`,
    cover: "covers/Maya Nadhi.jpeg",
  },
  {
    title: "Mazhai Vara Pogudhae",
    audio: `${BASE_URL}${encodeURIComponent("Mazhai.Vara.Pogudhae.mp3")}`,
    cover: "covers/Mazhai Vara Pogudhae.jpeg",
  },
  {
    title: "Megham Karukatha",
    audio: `${BASE_URL}${encodeURIComponent("Megham.Karukatha.From.Thiruchitrambalam.mp3")}`,
    cover: "covers/Megham_Karukatha.jpeg",
  },
  {
    title: "Melliname",
    audio: `${BASE_URL}${encodeURIComponent("Melliname.mp3")}`,
    cover: "covers/Melliname.jpeg",
  },
  {
    title: "Mersalaayitten",
    audio: `${BASE_URL}${encodeURIComponent("Mersalaayitten.mp3")}`,
    cover: "covers/Mersalaayitten.jpeg",
  },
  {
    title: "Mersalaayitten - Remix",
    audio: `${BASE_URL}${encodeURIComponent("Mersalaayitten.-.Remix.mp3")}`,
    cover: "covers/Mersalaayitten - Remix.jpeg",
  },
  {
    title: "Munbe Vaa",
    audio: `${BASE_URL}${encodeURIComponent("Munbe.Vaa.mp3")}`,
    cover: "covers/Munbe Vaa.jpeg",
  },
  {
    title: "Muzhumathi",
    audio: `${BASE_URL}${encodeURIComponent("Muzhumathi.mp3")}`,
    cover: "covers/Muzhumathi.jpeg",
  },
  {
    title: "Naan Un",
    audio: `${BASE_URL}${encodeURIComponent("Naan.Un.mp3")}`,
    cover: "covers/Naan Un.jpeg",
  },
  {
    title: "Nan Pogiren",
    audio: `${BASE_URL}${encodeURIComponent("Nan.pogiren.mp3")}`,
    cover: "covers/Nan pogiren.jpeg",
  },
  {
    title: "Orasaadha",
    audio: `${BASE_URL}${encodeURIComponent("Orasaadha.-.Madras.Gig.mp3")}`,
    cover: "covers/Orasaadha - Madras Gig.jpeg",
  },
  {
    title: "Othaiyadi Pathayila",
    audio:
      "https://github.com/sakthivel-0707/music-files/releases/download/v1/Othaiyadi.Pathayila.mp3",
    cover: "covers/images.jpg",
  },
  {
    title: "Pookkalae Sattru Oyivedungal",
    audio: `${BASE_URL}${encodeURIComponent("Pookkalae.Sattru.Oyivedungal.mp3")}`,
    cover: "covers/Pookkalae Sattru Oyivedungal.jpeg",
  },
  {
    title: "Sidu Sidu",
    audio: `${BASE_URL}${encodeURIComponent("Sidu.Sidu.mp3")}`,
    cover: "covers/Sidu Sidu.jpeg",
  },
  {
    title: "Sirukki Vaasam",
    audio: `${BASE_URL}${encodeURIComponent("Sirukki.Vaasam.mp3")}`,
    cover: "covers/Sirukki Vaasam.jpeg",
  },
  {
    title: "Sonapareeya",
    audio: `${BASE_URL}${encodeURIComponent("Sonapareeya.mp3")}`,
    cover: "covers/Sonapareeya.jpeg",
  },
  {
    title: "Tak Bak",
    audio: `${BASE_URL}${encodeURIComponent("Tak.Bak.-.The.Tak.Bak.of.Tamizh.mp3")}`,
    cover: "covers/Tak Bak - The Tak Bak of Tamizh.jpeg",
  },
  {
    title: "Takkunu Takkunu",
    audio: `${BASE_URL}${encodeURIComponent("Takkunu.Takkunu.-.From.Mr.Local.mp3")}`,
    cover: "covers/Takkunu Takkunu.jpeg",
  },
  {
    title: "Thaarame Thaarame",
    audio: `${BASE_URL}${encodeURIComponent("Thaarame.Thaarame.mp3")}`,
    cover: "covers/Thaarame Thaarame.jpeg",
  },
  {
    title: "Thangapoovey",
    audio: `${BASE_URL}${encodeURIComponent("Thangapoovey.mp3")}`,
    cover: "covers/Thangapoovey.jpeg",
  },
  {
    title: "Vaa Senthaazhini",
    audio: `${BASE_URL}${encodeURIComponent("Vaa.Senthaazhini.-.From.Adiyae.mp3")}`,
    cover: "covers/Vaa Senthaazhini.jpeg",
  },
  {
    title: "Valayapatti",
    audio: `${BASE_URL}${encodeURIComponent("Valayapatti.mp3")}`,
    cover: "covers/Valayapatti.jpeg",
  },
  {
    title: "Vizhi Veekura",
    audio: `${BASE_URL}${encodeURIComponent("Vizhi.Veekura.-.From.Think.Indie.mp3")}`,
    cover: "covers/Vizhi Veekura.jpeg",
  },
  {
    title: "Yaanji",
    audio: `${BASE_URL}${encodeURIComponent("Yaanji.-.From.Vikram.Vedha.mp3")}`,
    cover: "covers/Yaanji.jpeg",
  },
  {
    title: "Yaaro En Nenjai",
    audio: `${BASE_URL}${encodeURIComponent("Yaaro.En.Nenjai.mp3")}`,
    cover: "covers/Yaaro En Nenjai.jpeg",
  },
  {
    title: "Yaarumillaa",
    audio: `${BASE_URL}${encodeURIComponent("Yaarumillaa.mp3")}`,
    cover: "covers/Yaarumillaa.jpeg",
  },
  {
    title: "Yennai Izhukkuthadi",
    audio: `${BASE_URL}${encodeURIComponent("Yennai.Izhukkuthadi.From.Kadhalikka.Neramillai.mp3")}`,
    cover: "covers/Yennai Izhukkuthadi.jpeg",
  },
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
audio.src = songs[song_count].audio;
title.innerText = songs[song_count].title;
img.src = songs[song_count].cover;

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
  audio.src = songs[song_count + 1].audio;
  title.innerText = songs[song_count + 1].title;
  img.src = songs[song_count + 1].cover;
  song_count++;
});

backBtn.addEventListener("click", () => {
  audio.src = songs[song_count - 1].audio;
  title.innerText = songs[song_count - 1].title;
  img.src = songs[song_count - 1].cover;
  song_count--;
});

const list = document.getElementById("playlist");

songs.forEach((song) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${song.cover}" width="80"/>
    <p>${song.title}</p>
    <button onclick="playSong('${song.audio}', '${song.cover}', '${song.title}')"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg></button>
  `;

  list.appendChild(div);
});

function playSong(music, cover, title) {
  audio.src = music;
  title.innerText = title;
  img.src = cover;
  audio.play();
}
