import React, { useEffect } from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

export default function CityScene() {
  useEffect(() => {
    const _VS = `
      varying vec3 v_Normal;

      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        v_Normal = normal;
      }
    `;
    const _FS = `
      uniform vec3 torusColor;
      varying vec3 v_Normal;

      void main() {
        // gl_FragColor = vec4(v_Normal,1.0);
        gl_FragColor = vec4(torusColor, 1.0);
      }
    `;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(100);
    camera.position.setY(50);

    const[width,height,depth] = [5,10,5]
    const buildingGeometry = new THREE.BoxGeometry(width,height,depth,width,height,depth);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const materialShader = new THREE.ShaderMaterial({
      uniforms: {
        torusColor: {
          value: new THREE.Vector3(0,0,1)
        }
      },
      vertexShader: _VS,
      fragmentShader: _FS,
    });
    const building = new THREE.Mesh(buildingGeometry, material);
    building.position.set(0,height/2,0);
    scene.add(building);

    const pointLight = new THREE.PointLight(0xffffff,100)
    pointLight.position.set(0,50,0)
    const ambientLight = new THREE.AmbientLight(0xffffff,5)
    scene.add(pointLight, ambientLight);

    const gridHelper = new THREE.GridHelper(200,50)
    const lightHelper = new THREE.PointLightHelper(pointLight)
    scene.add(lightHelper, gridHelper)

    const controls = new OrbitControls(camera, renderer.domElement);

    // function addBuilding() {
    //     const[u,v,w] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(50));
    //     const geometry = new THREE.BoxGeometry(u,v,w,u,v,w);
    //     const pointsMaterial = new THREE.PointsMaterial({
    //         size: 0.001
    //     })
    //     const box = new THREE.Points(geometry, pointsMaterial);
  
    //     const[x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));
    //     box.position.set(x,Math.abs(v/2),z);
    //     scene.add(box)
    // }

    // Array(2).fill().forEach(addBuilding);

    function animate() {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.001; // Scale down time for smoother transitions
      const r = Math.abs(Math.sin(time)); // Red channel cycles
      const g = Math.abs(Math.sin(time + Math.PI / 2)); // Green channel offset
      const b = Math.abs(Math.sin(time + Math.PI)); // Blue channel offset

      // Update the torusColor uniform
      materialShader.uniforms.torusColor.value.set(r, g, b);

    //   torus.rotation.x += 0.000;
    //   torus.rotation.y += 0.010;
    //   torus.rotation.z += 0.000;

      controls.update();

      renderer.render(scene, camera);
    }

    animate();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg" />;
}
