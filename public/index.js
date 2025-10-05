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

    // --- NAVBAR MOBILE BURGER ---
    const navbarMenu = document.querySelector('.navbar__menu');
    const mobileMenuIcon = document.createElement('div');
    mobileMenuIcon.classList.add('mobile-menu-icon');
    mobileMenuIcon.innerHTML = '<span>&#9776;</span>'; // Icône hamburger
    document.querySelector('.navbar').appendChild(mobileMenuIcon);

    mobileMenuIcon.addEventListener('click', function () {
        navbarMenu.classList.toggle('show-mobile-menu');
    });
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
