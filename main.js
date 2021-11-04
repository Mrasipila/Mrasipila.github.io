import * as THREE from './three.js-master/build/three.module.js'//'https://cdn.skypack.dev/three@0.134.0';

//"three.js-master/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#three'),
    alpha: true,
})

//renderer.setPixelRation( window.devicePixelRatio );
if (window.innerWidth <= 800) {
    renderer.setSize( window.innerWidth/1.5, window.innerHeight/1.5);
    camera.position.setZ(30);
} else if (window.innerWidth <= 1440) {
    renderer.setSize( window.innerWidth/1.1, window.innerHeight/1.2);
    camera.position.setZ(25);
} else {
    renderer.setSize( window.innerWidth/3, window.innerHeight/3 );
    camera.position.setZ(20);
}


const geometry = new THREE.TorusGeometry( 10, 1, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color:0xFF6347 } );
const torus = new THREE.Mesh( geometry, material )

scene.add(torus)

renderer.render(scene, camera)

const textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = "";

const texture = textureLoader.load('./img/meyssan.png',);

const geometry1 = new THREE.BoxGeometry( 8.5, 8.5, 8.5 );
const material2 = new THREE.MeshBasicMaterial( { color:0xffffff } );
material2.map = texture;
const box = new THREE.Mesh( geometry1, material2 )

scene.add(box)

renderer.render(scene, camera)

const ambientLight = new THREE.AmbientLight(0xffffff)
ambientLight.position.set(5,5,5)


scene.add(ambientLight)

renderer.render(scene, camera)


function animate(){
    requestAnimationFrame( animate );

    torus.rotation.x += 0.004;
    torus.rotation.y += 0.001;
   
    renderer.render(scene, camera)
}

animate()
//renderer.render(scene, camera)

//const test = document.getElementById("test");

//test.innerHTML = "TEST"

//console.log("test")

//scene.background = new THREE.Color("rgb(3, 3, 24)");



