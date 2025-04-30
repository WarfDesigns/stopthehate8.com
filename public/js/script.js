document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.slides-wrapper');
    const slideCount = wrapper.children.length;
    let index = 0;

    function goToSlide(i) {
      wrapper.style.transform = `translateX(-${i * 100}%)`;
    }

    // advance every 5s
    setInterval(() => {
index = (index + 1) % slideCount;
goToSlide(index);
      // for debugging, open your console and uncomment:
      // console.log('auto-advance to slide', index);
    }, 5000);
});
