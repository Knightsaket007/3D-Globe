import * as  THREE from 'three';

const width=window.innerWidth;
const height=window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);