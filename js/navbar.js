// ============================================
// Navbar — scroll state & mobile toggle
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // Scroll state
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const updateNavbar = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', updateNavbar);
        updateNavbar();
    }

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            navToggle.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

});
