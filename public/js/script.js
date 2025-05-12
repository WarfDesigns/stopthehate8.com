document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel .slide");
  let current = 0;

  setInterval(() => {
    // fade out current
    slides[current].classList.remove("active");
    // advance index
    current = (current + 1) % slides.length;
    // fade in next
    slides[current].classList.add("active");
  }, 5000);  // change every 5 seconds (adjust as you like)
});