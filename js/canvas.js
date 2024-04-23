import * as THREE from '../node_modules/three/build/three.module.js';
// import * as GLTFLoader from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


// const gltfLoader = new GLTFLoader();
// gltfLoader.load(
//   '/models/ilbuni.glb',
//   gltf=>{
//   	const ilbuniMesh = gltf.scene.children[0];
//   	scene.add(ilbuniMesh);
//   }
// );

const canvas = document.getElementById("car__view-canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  alpha: true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
canvas.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();