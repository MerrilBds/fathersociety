document.addEventListener('DOMContentLoaded', function () {
  // --- SLIDER HERO (principal) ---
  const hero = document.querySelector('.hero-splide');
  if (hero) {
    new Splide(hero, {
      type: 'loop',
      perPage: 1,
      arrows: true,
      autoplay: true,
      interval: 4000,
      pauseOnHover: true,
      speed: 900,
      rewind: true,
      pagination: true,
      // le fade de Splide nécessite l'extension; si non incluse, on reste en slide
      // use: 'fade' si tu ajoutes l’extension correspondante.
    }).mount();
  }

  // --- SLIDER GALLERY ---
  const gallery = document.getElementById('gallery-carousel');
  if (gallery) {
    new Splide(gallery, {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 4200,
      pauseOnHover: true,
      speed: 800,
      arrows: true,
      pagination: true,
    }).mount();
  }

  // --- SUB NAVBAR EFFECT ON SCROLL (>= 20px) ---
  const subNav = document.getElementById('subNav');
  const SCROLL_TRIGGER = 20; // M2
  const toggleSubNav = () => {
    if (!subNav) return;
    if (window.scrollY > SCROLL_TRIGGER) subNav.classList.add('sub-scrolled');
    else subNav.classList.remove('sub-scrolled');
  };

  toggleSubNav();
  window.addEventListener('scroll', toggleSubNav, { passive: true });
});
