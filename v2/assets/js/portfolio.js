// Navbar scroll + avatar thumbnail (home: show after leaving hero; projects: always on)
const navbar = document.getElementById('navbar');
const aboutSection = document.getElementById('about');
const heroSection = document.getElementById('hero');

function updateNavbar() {
  if (!navbar) return;

  navbar.classList.toggle('scrolled', window.scrollY > 20);

  if (navbar.classList.contains('nav-show-avatar')) return;

  let showAvatar = false;
  if (aboutSection) {
    const navH = navbar.offsetHeight || 64;
    showAvatar = aboutSection.getBoundingClientRect().top <= navH + 8;
  } else if (heroSection) {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    showAvatar = window.scrollY >= heroBottom - 80;
  } else {
    showAvatar = window.scrollY > 320;
  }

  navbar.classList.toggle('show-avatar', showAvatar);
}

if (navbar) {
  window.addEventListener('scroll', updateNavbar, { passive: true });
  window.addEventListener('resize', updateNavbar, { passive: true });
  updateNavbar();
}

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Scroll reveal
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.skill-card, .job-block, .edu-card, .contact-tile, .community-block, .earlier-card, .section-header, .project-preview-card, .project-detail-card, .about-visual'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

// Before print: reveal all sections (scroll animations leave content invisible in PDF)
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  if (navbar) navbar.classList.add('show-avatar');
});

// Active nav link highlight (home page sections only)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-menu a[href^="#"]');

if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      const href = a.getAttribute('href');
      a.style.color = href === `#${current}` ? 'var(--accent)' : '';
    });
  }, { passive: true });
}
