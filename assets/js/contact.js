import { notify } from './utils.js';
document.getElementById('contact-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  notify("Thanks! I'll get back to you soon.");
  e.target.reset();
});
