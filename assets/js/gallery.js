import { $, notify } from './utils.js';
function handlePhotos(files){
  const grid = document.getElementById('gallery-grid');
  [...files].forEach(file=>{
    if(!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.aspectRatio = '1';
      card.innerHTML = `<img src="${e.target.result}" alt="${file.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/>`;
      grid.prepend(card);
    };
    reader.readAsDataURL(file);
  });
  notify(files.length + ' photo(s) added');
}
window.addEventListener('photos-added', (ev)=> handlePhotos(ev.detail));
