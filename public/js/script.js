  document.addEventListener('DOMContentLoaded', () => {
    const slides  = document.querySelectorAll('.carousel .slide');
    let   current = 0;
    const delay   = 5000; // ms between fades

    // start on first slide
    slides[current].classList.add('active');

    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, delay);
  });
