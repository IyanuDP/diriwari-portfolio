import { $, notify } from './utils.js';
import { enableIconAnimations, disableIconAnimations, areIconAnimationsEnabled } from './three-icons.js';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let threeCleanup = null;
let is3DEnabled = false;

document.getElementById('toggle3d').addEventListener('click', async ()=>{
  // If 3D is currently enabled, disable everything
  if(is3DEnabled){ 
    // Disable hero 3D
    if(threeCleanup) {
      threeCleanup(); 
      threeCleanup = null;
    }
    
    // Disable icon animations
    disableIconAnimations();
    
    is3DEnabled = false;
    document.getElementById('toggle3d').innerHTML = '<i class="fa-brands fa-unity"></i> Enable 3D'; 
    notify('3D animations disabled', 'info');
    return; 
  }
  
  // Enable 3D
  if(prefersReduced){ 
    notify('3D disabled due to reduced-motion preference','err'); 
    return; 
  }
  
  try{
    // Enable hero 3D
    const THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js');
    const stage = document.getElementById('three-stage');
    const canvas = document.createElement('canvas');
    stage.appendChild(canvas);
    const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, stage.clientWidth/stage.clientHeight, 0.1, 100);
    camera.position.set(0,0,6);
    const geo = new THREE.IcosahedronGeometry(1.4, 1);
    const mat = new THREE.MeshStandardMaterial({metalness:.35, roughness:.2, color:0x88aaff});
    const mesh = new THREE.Mesh(geo, mat); 
    scene.add(mesh);
    const light = new THREE.DirectionalLight(0xffffff, 1); 
    light.position.set(3,5,4); 
    scene.add(light);
    const amb = new THREE.AmbientLight(0xffffff, .4); 
    scene.add(amb);
    
    function resize(){ 
      const w = stage.clientWidth, h = stage.clientHeight; 
      renderer.setSize(w,h,false); 
      camera.aspect=w/h; 
      camera.updateProjectionMatrix(); 
    }
    
    resize(); 
    window.addEventListener('resize', resize);
    
    let raf; 
    function tick(){ 
      mesh.rotation.x+=0.004; 
      mesh.rotation.y+=0.006; 
      renderer.render(scene,camera); 
      raf = requestAnimationFrame(tick); 
    }
    
    tick();
    
    threeCleanup = ()=>{ 
      cancelAnimationFrame(raf); 
      window.removeEventListener('resize', resize); 
      renderer.dispose(); 
      stage.innerHTML=''; 
    };
    
    // Enable icon animations
    await enableIconAnimations();
    
    is3DEnabled = true;
    document.getElementById('toggle3d').innerHTML = '<i class="fa-brands fa-unity"></i> Disable 3D';
    notify('3D animations enabled', 'success');
    
  }catch(err){ 
    console.error(err); 
    notify('3D failed to load','err'); 
  }
});
