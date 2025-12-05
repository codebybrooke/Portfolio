window.addEventListener("DOMContentLoaded", () => {

  // --- Contact Dialog ---
  const dialog = document.getElementById("contact");
  const contactBtn = document.getElementById("contactBtn");
  const mobileContactBtn = document.getElementById("mobileContactBtn");

  contactBtn.addEventListener("click", () => dialog.showModal());
  mobileContactBtn.addEventListener("click", () => dialog.showModal());

  // --- Typewriter Effect ---
  const textElement = document.getElementById("hero-text");
  if (!textElement) return; // safety check
  const text = textElement.textContent;
  textElement.textContent = ""; // clear text to start typing

  let index = 0;
  const speed = 80; // typing speed in milliseconds

  function typeWriter() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter(); // start typing
});
