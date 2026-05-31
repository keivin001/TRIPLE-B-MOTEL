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