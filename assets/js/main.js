const btn = document.querySelector('#menu-btn');
const nav = document.querySelector('#menu');
const header = document.querySelector('.site-header');

if (btn && nav) {
    btn.addEventListener('click', () => {
        const open = !nav.classList.contains('active');
        btn.classList.toggle('open', open);
        nav.classList.toggle('active', open);
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        document.body.classList.toggle('menu-open', open);
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            btn.classList.remove('open');
            nav.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'Open menu');
            document.body.classList.remove('menu-open');
        });
    });
}

const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
};

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
