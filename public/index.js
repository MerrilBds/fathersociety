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
