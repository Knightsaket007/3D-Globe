import * as  THREE from 'three';

const width=window.innerWidth;
const height=window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const geometry = new THREE.IcosahedronGeometry(1.0, 2);
const mat=new THREE.MeshBasicMaterial({color:0xccff});

const mesh=new THREE.Mesh(geometry,mat);
scene.add(mesh);


function animate(t=0){
    console.log(t)

    requestAnimationFrame(animate);
    mesh.scale.setScalar(Math.cos(t*0.001)+1);
    renderer.render(scene,camera);


    // mesh.rotation.x=t/2000;
    // mesh.rotation.y=t/1000;
    // renderer.render(scene,camera);
    // requestAnimationFrame(animate);
  
}
animate()
