document.addEventListener('DOMContentLoaded', function () {
  /* ===== Header scroll state ===== */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ===== Mobile menu (fullscreen) ===== */
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

  burger?.addEventListener('click', openMobile);
  closeMenu?.addEventListener('click', closeMobile);
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMobile();
  });

  /* ===== Splide: main slider (70vh) ===== */
  const mainSliderEl = document.getElementById('main-slider');
  if (mainSliderEl) {
    new Splide(mainSliderEl, {
      type: 'loop',
      perPage: 1,
      arrows: true,
      autoplay: true,
      interval: 4500,
      speed: 900,
      rewind: true,
      pagination: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      classes: {
        arrows: 'splide__arrows hero__arrows',
      },
    }).mount();
  }

  /* ===== Splide: gallery carousel (16:9) ===== */
  const galleryEl = document.getElementById('gallery-carousel');
  if (galleryEl) {
    new Splide(galleryEl, {
      type: 'loop',
      perPage: 1,
      gap: '16px',
      arrows: true,
      autoplay: true,
      interval: 3800,
      speed: 700,
      rewind: true,
      pagination: true,
      breakpoints: {
        768: { gap: '10px' }
      }
    }).mount();
  }
});
