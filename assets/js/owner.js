import { $, $$, notify } from './utils.js';
let isOwner = false;
const OWNER_HASH = "68dda963148c57b86f5ae7cf568be3465a45f208d9fb4b14ccf006b44bd73fc0";
const ownerEls = $$('.owner-only');
function updateOwnerUI(){ ownerEls.forEach(el=> el.style.display = isOwner ? '' : 'none'); }
updateOwnerUI();
async function sha256Hex(text){ const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)); return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join(''); }
document.getElementById('owner-lock').addEventListener('click', async ()=>{ const pwd = prompt('Enter owner passphrase'); if(!pwd) return; const digest = await sha256Hex(pwd); if(digest === OWNER_HASH){ isOwner = true; localStorage.setItem('ownerMode','1'); notify('Owner mode ON'); updateOwnerUI(); } else notify('Incorrect passphrase','err'); });
if(localStorage.getItem('ownerMode')==='1'){ isOwner = true; updateOwnerUI(); }
const addPubBtn = document.getElementById('add-publication');
addPubBtn && addPubBtn.addEventListener('click', (e)=>{ if(!isOwner){ e.preventDefault(); notify('Owner access required','err'); return; } window.dispatchEvent(new CustomEvent('open-pub-modal')); });
const uploadBtn = document.getElementById('upload-photo');
const photoInput = document.getElementById('photo-input');
uploadBtn && uploadBtn.addEventListener('click', (e)=>{ if(!isOwner){ e.preventDefault(); notify('Owner access required','err'); return; } photoInput.click(); });
photoInput && photoInput.addEventListener('change', (e)=>{ if(!isOwner){ e.preventDefault(); e.target.value=''; } else window.dispatchEvent(new CustomEvent('photos-added', { detail: e.target.files })); });
