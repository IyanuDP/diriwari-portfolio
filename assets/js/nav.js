import { $, $$ } from './utils.js';
const hamburger = $('#hamburger');
const navMenu = $('#nav-menu');
if (hamburger) hamburger.addEventListener('click', ()=>{
  const open = navMenu.style.display === 'flex';
  navMenu.style.display = open ? 'none' : 'flex';
  navMenu.style.flexDirection = 'column';
});
const sections = $$('#home, #about, #career, #skills, #publications, #gallery, #contact');
window.addEventListener('scroll', () => {
  let current = 'home';
  for (const s of sections){ if (scrollY >= s.offsetTop - 120) current = s.id; }
  $$('.nav-link').forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});
document.getElementById('year').textContent = new Date().getFullYear();
