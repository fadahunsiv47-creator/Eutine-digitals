// Quotes rotation
const quotes = [
  '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
  '"The future belongs to those who believe in the beauty of their dreams."',
  '"Don’t watch the clock; do what it does. Keep going."',
  '"Great things never come from comfort zones."',
  '"Your limitation—it’s only your imagination."',
  '"Push yourself, because no one else is going to do it for you."'
];

let index = 0;
const quoteText = document.getElementById("quote-text");

setInterval(() => {
  index = (index + 1) % quotes.length;
  quoteText.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = quotes[index];
    quoteText.style.opacity = 1;
  }, 500);
}, 15000); // 15 seconds

// Popup message (for later CTA)
function showPopup(message) {
  alert(message);
}
document.addEventListener("DOMContentLoaded", () => {
 const images = [
  "../images/bg1.jpg",
  "../images/bg2.jpg",
  "../images/bg3.jpg"
  
];


  // Create the background div if it doesn’t exist
  let bg = document.querySelector(".slideshow-bg");
  if (!bg) {
    bg = document.createElement("div");
    bg.className = "slideshow-bg";
    document.body.prepend(bg);
  }

  let current = 0;
  function changeBg() {
    bg.style.backgroundImage = `url(${images[current]})`;
    current = (current + 1) % images.length;
  }

  changeBg();
  setInterval(changeBg, 5000);
});
