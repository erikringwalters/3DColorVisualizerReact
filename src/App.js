import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // const controls = new THREE.OrbitControls( camera, renderer.domElement );

    var render;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    // controls = new THREE.OrbitControls( camera );
    // controls.addEventListener( 'change', render );

    function animate() {

      requestAnimationFrame( animate );

      // required if controls.enableDamping or controls.autoRotate are set to true
      // controls.update();

      renderer.render( scene, camera );

    }	
    const min = 0;
    const max = 255;
    var increment = 15;
    var scale = increment*0.75;

    var i,j,k;
    for(i = min; i <= max; i+=increment) {
      for(j = min; j <= max; j+= increment) {
        for(k = min; k <= max; k+= increment) {
        
        var geometry = new THREE.BoxGeometry( scale, scale, scale );
        var material = new THREE.MeshBasicMaterial( { color: rgbToHex(i, j, k) } );
        
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        cube.position.set(i, j, -k);
        }
      }
    }

    camera.position.x = max/2;
    camera.position.y = max/2;
    camera.position.z = max;


    function animate() {
      requestAnimationFrame( animate );

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    animate();
  }
  )
  
  return (
    <div>
        <canvas id="boxCanvas" />
    </div>
  );
}

export default App;
