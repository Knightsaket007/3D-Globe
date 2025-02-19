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

new OrbitControls(camera, renderer.domElement);
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.03;

const geometry = new THREE.IcosahedronGeometry(1, 12);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading:true,
});

const earth = new THREE.Mesh(geometry, mat);
scene.add(earth);


const hemilight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
// const hemilight = new THREE.HemisphereLight(pink, green);
scene.add(hemilight);

function animate(t = 0) {

    requestAnimationFrame(animate);
    earth.rotation.x += 0.001;
    earth.rotation.y += 0.002;
    renderer.render(scene, camera)
}
animate()