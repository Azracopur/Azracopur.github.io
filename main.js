// ===========================
// NAV SCROLL
// ===========================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===========================
// HAMBURGER
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===========================
// TYPED TEXT HERO
// ===========================
const phrases = [
  'Full Stack Developer',
  'React & Laravel',
  'AI Entegrasyonu',
  'Android (Kotlin)',
  'Problem Çözücü'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 55 : 85);
}
type();

// ===========================
// BG CODE RAIN
// ===========================
const snippets = [
  'const dev = new Azra();',
  'function solve(problem) {',
  '  return creative.solution();',
  '}',
  'import React from "react";',
  'Route::get("/api", fn);',
  'SELECT * FROM projects;',
  '@Override public void build() {',
  'git commit -m "feat: done"',
  'npm install && npm start',
  'kubectl apply -f deploy.yml',
  'AI.integrate(chatbot);',
  'jwt.verify(token, secret)',
  'db.migrate().run();',
  'Modbus.read(plc, 0x01)',
  'useState(null)',
  'async/await Promise.all()',
  'docker build -t azra .',
  'python train_model.py',
  '@RestController',
  'class Solution { ... }',
  '.env loaded ✓',
];

const bgEl = document.getElementById('bgCode');
if (bgEl) {
  let html = '';
  for (let r = 0; r < 28; r++) {
    for (let c = 0; c < 5; c++) {
      html += snippets[Math.floor(Math.random() * snippets.length)].padEnd(32) + '   ';
    }
    html += '\n';
  }
  bgEl.textContent = html;
}

// ===========================
// SCROLL REVEAL
// ===========================
const revealEls = document.querySelectorAll(
  '.timeline-item, .project-card, .skill-group, .about-text p, .about-terminal, .stat'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===========================
// ACTIVE NAV HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 150) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--text)' : '';
  });
}, { passive: true });
