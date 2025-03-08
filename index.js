import * as  THREE from 'three';
import { OrbitControls } from "jsm/controls/OrbitControls.js"
import { getStarField } from './utility/getStarField.js';
const width = window.innerWidth;
const height = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
console.log('renderer..', renderer.domElement)

const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const earthGroup=new THREE.Group();
earthGroup.rotation.z=-23.4 *Math.PI/180;
scene.add(earthGroup);

new OrbitControls(camera, renderer.domElement);
const loader=new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 8);
const mat = new THREE.MeshStandardMaterial({
    // color: 0xffffff,
    // flatShading:true,
    map:loader.load('/assests/textures/earthlights1k.jpg'),
    // map:loader.load('/assests/textures/earthmap2k.jpg'),
   

});

const earth = new THREE.Mesh(geometry, mat);
earthGroup.add(earth);
  
const stars=getStarField({numStars:2000});
scene.add(stars); 

// const hemilight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
// const hemilight = new THREE.HemisphereLight(pink, green);
// scene.add(hemilight);
const sunLight=new THREE.DirectionalLight(0xffffff); 
sunLight.position.set (-2,-.5,1)
scene.add(sunLight);

function animate() {

    requestAnimationFrame(animate);
    // earth.rotation.x += 0.001;
    earth.rotation.y += 0.001;
    renderer.render(scene, camera)
}
animate()