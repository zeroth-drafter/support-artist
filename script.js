document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     AUDIO / PLAYER
  ========================= */

  const audio = document.getElementById("globalAudio");
  const playBtn = document.querySelector(".play-btn");
  const playerBar = document.getElementById("playerBar");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const progressBar = document.getElementById("progressBar");

  const album = document.querySelector(".album-art");
  const trackTitle = document.getElementById("playerTrackTitle");
  const trackNumber = document.getElementById("playerTrackNumber");
  const playerArt = document.getElementById("playerArt");

  audio.src = album.dataset.audio;
  playerArt.src = album.querySelector("img").src;
  trackTitle.textContent = document.querySelector(".track-title").textContent;
  trackNumber.textContent = document.querySelector(".track-number").textContent;

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "❚❚";
      playPauseBtn.textContent = "❚❚";
      playerBar.classList.remove("hidden");
    } else {
      audio.pause();
      playBtn.textContent = "▶";
      playPauseBtn.textContent = "▶";
    }
  }

  playBtn.addEventListener("click", togglePlay);
  playPauseBtn.addEventListener("click", togglePlay);

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  });

  progressBar.addEventListener("input", () => {
    if (!audio.duration) return;
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });

  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
    playPauseBtn.textContent = "▶";
  });

  /* =========================
     ABOUT TRACK MODAL
  ========================= */

  const aboutBtn = document.getElementById("aboutTrackBtn");
  const aboutModal = document.getElementById("aboutTrackModal");

  aboutBtn.addEventListener("click", () => {
    aboutModal.classList.add("show");
  });

  aboutModal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal-x")
    ) {
      aboutModal.classList.remove("show");
    }
  });

  /* =========================
     SUPPORT / HQ MODAL
  ========================= */

  const supportBtn = document.querySelector(".paid-download");
  const qrModal = document.getElementById("qrModal");
  const confirmBtn = document.querySelector(".confirm-download");

  supportBtn.addEventListener("click", () => {
    qrModal.classList.add("show");
  });

  confirmBtn.addEventListener("click", () => {
    window.open(album.dataset.hq, "_blank");
    qrModal.classList.remove("show");
  });

  qrModal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal-x")
    ) {
      qrModal.classList.remove("show");
    }
  });

});
