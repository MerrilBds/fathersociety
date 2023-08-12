document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop', // Permet le défilement en boucle
        perPage: 1,   // Nombre d'images affichées à la fois
        arrows: true, // Affiche les flèches de navigation
        autoplay: true, // Active l'autoplay
        interval: 4000, // Intervalle de temps en millisecondes entre chaque diapositive (par exemple, 3000 = 3 secondes)
        fade: true, // Active l'effet de fondu (fade)
        speed: 1000, // Vitesse de transition en millisecondes (par exemple, 1000 = 1 seconde)
    }).mount();
});


// JavaScript to automatically add the mobile menu icon
window.addEventListener('load', function () {
    const navbarMenu = document.querySelector('.navbar__menu');
    const mobileMenuIcon = document.createElement('div');
    mobileMenuIcon.classList.add('mobile-menu-icon');
    mobileMenuIcon.innerHTML = '<span>&#9776;</span>'; // You can adjust the icon as needed
    navbarMenu.insertBefore(mobileMenuIcon, navbarMenu.firstChild);

    mobileMenuIcon.addEventListener('click', function () {
        navbarMenu.classList.toggle('show-mobile-menu');
    });
});