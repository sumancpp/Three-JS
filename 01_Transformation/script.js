let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;2
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
let mesh = new THREE.Mesh(box, material);
//mesh.position.x = 3;
//mesh.position.y = 3;
//mesh.position.z = 3;


//mesh.rotation.x = 1;
//mesh.rotation.y = 1;
//mesh.rotation.z = 1;

//mesh.scale.x = 2;
//mesh.scale.y = 2;
//mesh.scale.z = 2;

//mesh.rotation.y = Math.PI * 4;
//mesh.rotation.x = Math.PI * 4;
//mesh.rotation.z = Math.PI * 4;


scene.add(mesh);

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);