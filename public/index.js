document.addEventListener('DOMContentLoaded', function () {

  /* ================== HEADER TRANSPARENT → SCROLL ================== */
  const header = document.querySelector('.site-header');
  function handleScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });


  /* ================== MENU MOBILE FULLSCREEN ================== */
  const burger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  const openMobile = () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    mobileMenu.setAttribute('aria-hidden', 'false');
  };

  const closeMobile = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    mobileMenu.setAttribute('aria-hidden', 'true');
  };

  if (burger) burger.addEventListener('click', openMobile);
  if (closeMenu) closeMenu.addEventListener('click', closeMobile);

  // Ferme si on clique sur l'arrière-plan
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMobile();
  });


  /* ================== SLIDER PRINCIPAL (HERO - 70vh) ================== */
  const mainSlider = document.getElementById('main-slider');
  if (mainSlider) {
    new Splide(mainSlider, {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 4500,
      speed: 900,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: true,
      pagination: true,
      rewind: true,
    }).mount();
  }


  /* ================== SLIDER GALLERY (Avant/Après) ================== */
  const gallerySlider = document.getElementById('gallery-carousel');
  if (gallerySlider) {
    new Splide(gallerySlider, {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 4000,
      pauseOnHover: true,
      speed: 800,
      arrows: true,
      pagination: true,
      rewind: true,
    }).mount();
  }

});
