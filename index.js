import * as  THREE from 'three';
import { OrbitControls } from "jsm/controls/OrbitControls.js"
const width = window.innerWidth;
const height = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const geometry = new THREE.BoxGeometry();
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
});

const cube = new THREE.Mesh(geometry, mat);
scene.add(cube);


const hemilight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
// const hemilight = new THREE.HemisphereLight(pink, green);
scene.add(hemilight);

function animate(t = 0) {

    requestAnimationFrame(animate);
   cube.rotation.x+=0.01;
   cube.rotation.y+=0.02;
renderer.render(scene,camera)
}
animate()