import { skills } from './cv-data.js';

function renderSkills(){
  const grid = document.querySelector('.skills-grid');
  if (!grid || !skills) return;
  const groups = Object.entries(skills);
  if (groups.length === 0) return;
  const html = groups.map(([group, items])=>{
    const list = (items||[]).map(it=>`<li>${it}</li>`).join('');
    return `
      <div class="card skill">
        <strong>${group}</strong>
        <ul class="bullets">${list}</ul>
      </div>
    `;
  }).join('');
  grid.innerHTML = html;
}

renderSkills();
