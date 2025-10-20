// Hitung mundur
const eventDate = new Date("Dec 20, 2025 09:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdown.innerHTML = `Acara dimulai dalam ${days} hari ${hours} jam ${minutes} menit`;
}, 1000);

// Musik kontrol
const music = document.getElementById("music");
const btn = document.getElementById("toggleMusic");
let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.textContent = "🔈 Musik Aktif";
  } else {
    music.pause();
    btn.textContent = "🔇 Musik Mati";
  }
  playing = !playing;
});

// RSVP form
document.getElementById("rsvpForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const hadir = document.getElementById("kehadiran").value;
  const pesan = hadir === "hadir"
    ? `Terima kasih ${nama}, kami menunggu kehadiranmu dengan bahagia 💐`
    : `Terima kasih ${nama}, semoga doa terbaik untuk kami 🙏`;
  document.getElementById("rsvpMessage").innerText = pesan;
  e.target.reset();
});
