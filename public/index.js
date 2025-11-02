document.addEventListener('DOMContentLoaded', function () {
  /* HERO SPLIDE */
  const hero = document.querySelector('.splide-hero');
  if (hero) {
    new Splide(hero, {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 4200,
      speed: 850,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
    }).mount();
  }

  /* GALLERY SPLIDE */
  const gallery = document.querySelector('#gallery-carousel');
  if (gallery) {
    new Splide(gallery, {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 4000,
      speed: 800,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
    }).mount();
  }

  /* SCROLL EFFECT UNIQUEMENT SUR LA SUB_NAVBAR */
  const subbar = document.getElementById('subbar');
  const onScroll = () => {
    if (!subbar) return;
    if (window.scrollY > 20) subbar.classList.add('scrolled');
    else subbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // état initial
});
