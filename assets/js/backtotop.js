const toTop = document.getElementById('to-top');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 400) toTop.classList.add('show'); else toTop.classList.remove('show');
});
toTop.addEventListener('click', ()=>{ window.scrollTo({top:0, behavior:'smooth'}); });
