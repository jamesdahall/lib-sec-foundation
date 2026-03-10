// Mobile menu toggle
const btn = document.querySelector('#menu-btn');
const nav = document.querySelector('#menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking a link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        btn.classList.remove('open');
        nav.classList.remove('active');
    });
});

// Shrink header on scroll
const header = document.querySelector('.site-header');
const shrinkThreshold = 100;

window.addEventListener('scroll', () => {
    if (window.scrollY >= shrinkThreshold) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
