document.addEventListener('DOMContentLoaded', async () => {
  const gallery = document.getElementById('gallery');

  try {
    // 1. Fetch the list of image URLs
    const images = await fetch('/api/images').then(res => res.json());

    // 2. Create & append an <img> for each
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      gallery.appendChild(img);
    });
  } catch (e) {
    console.error('Failed to load images', e);
    gallery.textContent = 'Could not load gallery.';
  }
});
