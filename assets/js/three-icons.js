// three-icons.js - 3D animated icons for sections
import { notify } from './utils.js';

const iconAnimations = [];
let isEnabled = false;

/**
 * Initialize a 3D icon in the given container
 */
async function createIconAnimation(container, type = 'default') {
  try {
    const THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js');
    
    // Save original content
    const originalContent = container.innerHTML;
    container.innerHTML = '';
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      100
    );
    camera.position.set(0, 0, 3);
    
    // Create geometry based on type
    let mesh;
    switch(type) {
      case 'user':
        // Sphere for user icon
        const sphereGeo = new THREE.SphereGeometry(0.8, 32, 32);
        const sphereMat = new THREE.MeshStandardMaterial({
          color: 0x6366f1,
          metalness: 0.5,
          roughness: 0.3,
          emissive: 0x3730a3,
          emissiveIntensity: 0.2
        });
        mesh = new THREE.Mesh(sphereGeo, sphereMat);
        break;
        
      case 'file':
        // Plane for file icon
        const planeGeo = new THREE.PlaneGeometry(1, 1.3);
        const planeMat = new THREE.MeshStandardMaterial({
          color: 0x8b5cf6,
          metalness: 0.4,
          roughness: 0.4,
          side: THREE.DoubleSide,
          emissive: 0x6d28d9,
          emissiveIntensity: 0.1
        });
        mesh = new THREE.Mesh(planeGeo, planeMat);
        break;
        
      case 'image':
        // Torus for image/gallery icon
        const torusGeo = new THREE.TorusGeometry(0.6, 0.25, 16, 32);
        const torusMat = new THREE.MeshStandardMaterial({
          color: 0x10b981,
          metalness: 0.6,
          roughness: 0.2,
          emissive: 0x059669,
          emissiveIntensity: 0.2
        });
        mesh = new THREE.Mesh(torusGeo, torusMat);
        break;
        
      case 'contact':
        // Octahedron for contact icons
        const octaGeo = new THREE.OctahedronGeometry(0.8, 0);
        const octaMat = new THREE.MeshStandardMaterial({
          color: 0xf59e0b,
          metalness: 0.5,
          roughness: 0.3,
          emissive: 0xd97706,
          emissiveIntensity: 0.2
        });
        mesh = new THREE.Mesh(octaGeo, octaMat);
        break;
        
      default:
        // Default: icosahedron
        const icoGeo = new THREE.IcosahedronGeometry(0.8, 1);
        const icoMat = new THREE.MeshStandardMaterial({
          color: 0x3b82f6,
          metalness: 0.5,
          roughness: 0.3,
          emissive: 0x1d4ed8,
          emissiveIntensity: 0.2
        });
        mesh = new THREE.Mesh(icoGeo, icoMat);
    }
    
    scene.add(mesh);
    
    // Add lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(2, 3, 2);
    scene.add(directionalLight);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add subtle point light for depth
    const pointLight = new THREE.PointLight(0x88aaff, 0.5);
    pointLight.position.set(-2, 0, 1);
    scene.add(pointLight);
    
    // Resize handler
    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();
    
    // Animation variables
    let time = Math.random() * 100; // Random start time for variety
    let raf;
    
    // Animation loop
    function tick() {
      time += 0.01;
      
      // Different rotation patterns based on type
      switch(type) {
        case 'user':
          mesh.rotation.x = Math.sin(time * 0.5) * 0.2;
          mesh.rotation.y = time * 0.3;
          break;
        case 'file':
          mesh.rotation.y = Math.sin(time * 0.7) * 0.5;
          mesh.rotation.z = Math.cos(time * 0.3) * 0.1;
          mesh.position.y = Math.sin(time) * 0.1;
          break;
        case 'image':
          mesh.rotation.x = time * 0.4;
          mesh.rotation.y = time * 0.3;
          break;
        case 'contact':
          mesh.rotation.x = time * 0.5;
          mesh.rotation.y = time * 0.5;
          mesh.rotation.z = time * 0.2;
          break;
        default:
          mesh.rotation.x = Math.sin(time) * 0.3;
          mesh.rotation.y = time * 0.4;
      }
      
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    
    tick();
    
    // Cleanup function
    const cleanup = () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      renderer.dispose();
      container.innerHTML = originalContent;
      container.style.position = '';
      container.style.overflow = '';
    };
    
    return cleanup;
    
  } catch (err) {
    console.error('Failed to create icon animation:', err);
    return null;
  }
}

/**
 * Enable 3D animations for all section icons
 */
export async function enableIconAnimations() {
  if (isEnabled) return;
  
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    notify('3D animations disabled due to reduced-motion preference', 'err');
    return;
  }
  
  try {
    // Get all section titles and add animations to them
    const sectionTitles = document.querySelectorAll('.section-title');
    
    // Define which sections to animate (by their parent section id)
    const sectionsToAnimate = ['about', 'career', 'skills', 'publications', 'gallery'];
    
    for (const title of sectionTitles) {
      // Find the parent section
      const section = title.closest('.section') || title.closest('section');
      if (!section) continue;
      
      const sectionId = section.id;
      
      // Only animate titles in the specified sections
      if (sectionsToAnimate.includes(sectionId)) {
        let animationType = 'default';
        
        // Choose animation type based on section
        switch(sectionId) {
          case 'about':
            animationType = 'user';
            break;
          case 'career':
            animationType = 'contact';
            break;
          case 'skills':
            animationType = 'default';
            break;
          case 'publications':
            animationType = 'file';
            break;
          case 'gallery':
            animationType = 'image';
            break;
        }
        
        const cleanup = await createIconAnimation(title, animationType);
        if (cleanup) iconAnimations.push(cleanup);
      }
    }
    
    isEnabled = true;
    console.log(`Enabled ${iconAnimations.length} section title animations`);
    
  } catch (err) {
    console.error('Failed to enable icon animations:', err);
    notify('Failed to enable icon animations', 'err');
  }
}

/**
 * Disable 3D animations for all section icons
 */
export function disableIconAnimations() {
  if (!isEnabled) return;
  
  // Run all cleanup functions
  for (const cleanup of iconAnimations) {
    cleanup();
  }
  
  // Clear the array
  iconAnimations.length = 0;
  isEnabled = false;
  
  console.log('Disabled all icon animations');
}

/**
 * Check if icon animations are currently enabled
 */
export function areIconAnimationsEnabled() {
  return isEnabled;
}
