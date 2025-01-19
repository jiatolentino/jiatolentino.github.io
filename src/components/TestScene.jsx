import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function InfinityFlowEffect() {
  useEffect(() => {
    const _VS = `
      uniform float time;
      uniform vec3 cursor;
      attribute float randomOffset; // Unique offset for each particle
      varying float v_Visibility;

      void main() {
        vec3 transformedPosition = position;

        // Flow field movement based on the infinity symbol
        float t = time * 0.1 + randomOffset; // Slower movement with random stagger
        float scale = 10.0; // Scale of the infinity symbol
        transformedPosition.x = scale * sin(t);
        transformedPosition.y = scale * sin(2.0 * t) / 2.0;
        transformedPosition.z = scale * cos(t);

        // Add some randomness to the flow
        transformedPosition.x += sin(position.x * 2.0 + time * 0.5) * 0.5;
        transformedPosition.y += cos(position.y * 2.0 + time * 0.5) * 0.5;
        transformedPosition.z += sin(position.z * 2.0 + time * 0.5) * 0.5;

        // Cursor-based displacement
        float distanceToCursor = distance(cursor, transformedPosition);
        float displacementIntensity = 0.5; // Adjust intensity of displacement
        if (distanceToCursor < 5.0) {
          float effectStrength = (5.0 - distanceToCursor) / 5.0;
          transformedPosition += normalize(transformedPosition - cursor) * effectStrength * displacementIntensity;
        }

        // Visibility transitions over 10 seconds, staggered by randomOffset
        float cycleTime = mod(time + randomOffset, 20.0); // 20-second cycle (10 up, 10 down)
        v_Visibility = smoothstep(0.0, 10.0, cycleTime) * (1.0 - smoothstep(10.0, 20.0, cycleTime));

        gl_PointSize = 2.0; // Small particle size
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformedPosition, 1.0);
      }
    `;
    const _FS = `
      varying float v_Visibility;

      void main() {
        // Create circular particles using a radial mask
        vec2 coord = gl_PointCoord - vec2(0.5);
        float distanceSquared = dot(coord, coord);

        // Discard fragments outside the circle
        if (distanceSquared > 0.25) discard;

        // Set the color to grayscale based on visibility
        vec3 gray = vec3(v_Visibility);
        gl_FragColor = vec4(gray, 1.0);
      }
    `;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const particleCount = 5000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = [];
    const randomOffsets = [];

    // Generate initial positions and offsets for the particles
    for (let i = 0; i < particleCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      randomOffsets.push(Math.random() * 20.0); // Random offset for visibility cycle
    }

    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    particleGeometry.setAttribute('randomOffset', new THREE.Float32BufferAttribute(randomOffsets, 1));

    const particleShaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        cursor: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexShader: _VS,
      fragmentShader: _FS,
      transparent: true,
    });

    const particles = new THREE.Points(particleGeometry, particleShaderMaterial);
    scene.add(particles);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 50, 30);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const cursor = new THREE.Vector3();
    function onMouseMove(event) {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      const vector = new THREE.Vector3(x, y, 0.5).unproject(camera); // Convert to 3D space
      cursor.set(vector.x, vector.y, 0);
      particleShaderMaterial.uniforms.cursor.value = cursor;
    }

    function animate() {
      requestAnimationFrame(animate);
      particleShaderMaterial.uniforms.time.value = performance.now() * 0.001;
      controls.update();
      renderer.render(scene, camera);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg" />;
}
