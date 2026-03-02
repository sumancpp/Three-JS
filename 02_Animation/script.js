let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;2
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
let mesh = new THREE.Mesh(box, material);

scene.add(mesh);

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.01;
// }

// animate();

let clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.x = clock.getElapsedTime() * 2;
    
}

animate();