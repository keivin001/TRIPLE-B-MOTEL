window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// scrolling effect whole pages 
window.addEventListener('scroll', () => {
    const btn = document.querySelector('.reserve-table-btn');

    if (window.scrollY > 200) {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
    } else {
        btn.style.opacity = '0.8';
    }
});

document.addEventListener('DOMContentLoaded', function () {

    const menu = document.getElementById('menu');
    const icon = document.getElementById('menuIcon');

    menu.addEventListener('show.bs.collapse', function () {
        icon.classList.remove('ri-menu-fill');
        icon.classList.add('ri-close-line');
    });

    menu.addEventListener('hide.bs.collapse', function () {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-fill');
    });

});