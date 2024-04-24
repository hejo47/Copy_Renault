import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';


const canvas = document.getElementById("car__view-canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  alpha: true,
});

windowResize();

function windowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas.appendChild(renderer.domElement);
}

window.addEventListener("resize", windowResize);

const loader = new GLTFLoader();

loader.load('../src/model/free_1975_porsche_911_930_turbo/scene.gltf', function (gltf) {
  const model = gltf.scene;
  scene.add(model);

  model.rotation.y = -0.65;
  let ambientLight = new THREE.AmbientLight(0xffffff, 10);  // 색상과 강도
  scene.add(ambientLight);

  let dirLight = new THREE.DirectionalLight(0xffffff, 5);
  dirLight.position.set(-1, 3, -2);  // 위치 설정
  scene.add(dirLight);
}, undefined, function (error) {
  console.error(error);
});

camera.position.set(0, 1, 4);
camera.rotation.x = -.1;
camera.rotation.y = 0.2;

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();