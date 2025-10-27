import { $, $$ } from './utils.js';
const hamburger = $('#hamburger');
const navMenu = $('#nav-menu');
if (hamburger) {
  // initialize ARIA
  hamburger.setAttribute('aria-expanded', 'false');
  if (navMenu) navMenu.setAttribute('aria-hidden', 'true');

  hamburger.addEventListener('click', ()=>{
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    const willOpen = !isOpen;
    hamburger.setAttribute('aria-expanded', String(willOpen));
    if (navMenu) {
      navMenu.setAttribute('aria-hidden', String(!willOpen));
      // when opened on mobile, display as column
      if (willOpen) { navMenu.style.display = 'flex'; navMenu.style.flexDirection = 'column'; }
      else { navMenu.style.display = 'none'; }
    }
    // move focus to first link when opening
    if (willOpen) {
      const first = navMenu && navMenu.querySelector('a');
      if (first) first.focus();
    } else {
      hamburger.focus();
    }
  });

  // Close menu with Escape key for accessibility
  window.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        hamburger.setAttribute('aria-expanded','false');
        if (navMenu) { navMenu.setAttribute('aria-hidden','true'); navMenu.style.display = 'none'; }
        hamburger.focus();
      }
    }
  });
}
const sections = $$('#home, #about, #career, #skills, #publications, #gallery, #contact');
window.addEventListener('scroll', () => {
  let current = 'home';
  for (const s of sections){ if (scrollY >= s.offsetTop - 120) current = s.id; }
  $$('.nav-link').forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});
document.getElementById('year').textContent = new Date().getFullYear();
