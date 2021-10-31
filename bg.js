import * as THREE from './three.js-master/build/three.module.js'//'https://cdn.skypack.dev/three@0.134.0';

//"three.js-master/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#bg'),
    //alpha: true,
})

renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(20);

function addStar(){
    const geometry = new THREE.SphereGeometry(0.25, 24, 24)
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff} )
    const star = new THREE.Mesh(geometry, material)

    
    const [x, y, z] =[THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloatSpread(100)]
    
    star.position.set(x, y, z);
    scene.add(star)
}

for (let i = 0; i < 200; i++) {
    addStar()
} 

const ambientLight = new THREE.AmbientLight(0xffffff)
ambientLight.position.set(5,5,5)


scene.add(ambientLight)

function moveCamera(){
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * -0.01
    camera.position.x = t * -0.0002
    camera.rotation.y = t * -0.0002
}

document.body.onscroll = moveCamera

function animate(){
    requestAnimationFrame( animate );
    renderer.render(scene, camera)
}

animate()

scene.background = new THREE.Color("rgb(3, 3, 24)");