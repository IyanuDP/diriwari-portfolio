export const $ = (sel, root=document) => root.querySelector(sel);
export const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
export function notify(msg, type='ok'){
  const n = document.createElement('div');
  n.textContent = msg;
  n.style.cssText = `position:fixed;top:84px;right:20px;background:${type==='ok'?'#10b981':'#ef4444'};color:#fff;padding:12px 16px;border-radius:10px;box-shadow:0 10px 20px rgba(0,0,0,.2);z-index:80`;
  document.body.appendChild(n); setTimeout(()=> n.remove(), 2600);
}
