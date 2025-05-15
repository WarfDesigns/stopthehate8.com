document.addEventListener('DOMContentLoaded', () => {
    const imgs     = document.querySelectorAll('.carousel .slides img');
    let   current  = 0;
    const delay    = 5000;  // time between fades (ms)

    // initialize
    imgs[current].classList.add('active');

    setInterval(() => {
      imgs[current].classList.remove('active');
      current = (current + 1) % imgs.length;
      imgs[current].classList.add('active');
    }, delay);
  });