document.addEventListener('DOMContentLoaded', function () {
    // --- SLIDER SPLIDE ---
    new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        arrows: true,
        autoplay: true,
        interval: 4000,
        fade: true,
        speed: 1000,
    }).mount();
});

// --- NAVBAR CHANGE AU SCROLL ---
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// --- SLIDER AVANT / APRÈS GLISSABLE ---
document.querySelectorAll('.before-after-slider').forEach(slider => {
  const handle = slider.querySelector('.slider-handle');
  const afterWrapper = slider.querySelector('.after-image-wrapper');

  let isDragging = false;

  const move = (x) => {
    const rect = slider.getBoundingClientRect();
    let position = ((x - rect.left) / rect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    handle.style.left = position + "%";
    afterWrapper.style.left = position + "%";
  };

  handle.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (isDragging) move(e.clientX);
  });

  // Support tactile
  handle.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', (e) => {
    if (isDragging) move(e.touches[0].clientX);
  });
});
