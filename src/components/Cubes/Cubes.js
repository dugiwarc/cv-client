import React, { Component } from "react";
// import * as THREE from "three";
// import { TimelineMax, Expo } from "gsap";

export default class Cubes extends Component {
  // componentDidMount() {
  //   const scene = new THREE.Scene();

  //   const camera = new THREE.PerspectiveCamera(
  //     // field of view
  //     75,
  //     // browser aspect
  //     window.innerWidth / window.innerHeight,
  //     // near plane
  //     0.1,
  //     // far plane
  //     1000
  //   );

  //   camera.position.z = 10;

  //   // [3] Set up a renderer
  //   // Types: WebGL renderer - most flexibility, no limitations
  //   //        CSS2D renderer
  //   //        CSS3D renderer
  //   //        SVG Renderer
  //   const renderer = new THREE.WebGLRenderer({
  //     // avoid jagged results
  //     antialias: true,
  //   });

  //   // Background color
  //   renderer.setClearColor("#e5e5e5");

  //   // Size
  //   renderer.setSize(window.innerWidth, window.innerHeight);

  //   // Create our canvas element
  //   document.body.appendChild(renderer.domElement);

  //   window.addEventListener("resize", () => {
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     // readjust camera ratio
  //     camera.aspect = window.innerWidth / window.innerHeight;

  //     // update project matrix on the camera
  //     camera.updateProjectionMatrix();
  //   });

  //   const raycaster = new THREE.Raycaster();
  //   const mouse = new THREE.Vector2();

  //   // Body - count vertices
  //   //       const geometry = new THREE.SphereGeometry(1, 40, 40);
  //   const geometry = new THREE.BoxGeometry(1, 1, 1);

  //   // Cover color
  //   const material = new THREE.MeshLambertMaterial({
  //     color: 0x202020,
  //   });

  //   // Combine geometry and material into a mesh
  //   //       const mesh = new THREE.Mesh(geometry, material);

  //   //       mesh.position.x = -2;
  //   //       mesh.position.y = 2;
  //   //       mesh.position.z = 2;

  //   //       mesh.position.set(-2, 2, 2);
  //   //       mesh.rotation.set(45, 0, 0);
  //   //       mesh.scale.set(1, 2, 2);

  //   // Add mesh
  //   //       scene.add(mesh);

  //   //       meshX = -10;
  //   for (let i = 0; i < 15; i++) {
  //     let mesh = new THREE.Mesh(geometry, material);
  //     mesh.position.x = (Math.random() - 0.5) * 10;
  //     mesh.position.y = (Math.random() - 0.5) * 10;
  //     mesh.position.z = (Math.random() - 0.5) * 10;
  //     scene.add(mesh);
  //     // meshX += 1;
  //   }

  //   // Add light
  //   const light = new THREE.PointLight(0xffffff, 10, 500);

  //   light.position.set(1, 6, 5);
  //   scene.add(light);

  //   const render = () => {
  //     // pauses when user navigates to another tab
  //     // 60 fps
  //     // redrawing everything everytime the screen refreshes
  //     // mesh.rotation.x += 0.01;
  //     // mesh.rotation.y += 0.01;

  //     // mesh.scale.x -= 0.01;
  //     requestAnimationFrame(render);
  //     renderer.render(scene, camera);
  //   };

  //   const onMouseMove = (evt) => {
  //     evt.preventDefault();

  //     mouse.x = (evt.clientX / window.innerWidth) * 2 - 1;
  //     mouse.y = -(evt.clientY / window.innerHeight) * 2 + 1;

  //     raycaster.setFromCamera(mouse, camera);

  //     const intersects = raycaster.intersectObjects(scene.children, true);

  //     for (let i = 0; i < intersects.length; i++) {
  //       //   intersects[i].object.material.color.set(0xff0000);
  //       //       this.tl = new TimelineMax().delay(0.3);
  //       //   this.tl = new TimelineMax({ paused: true });
  //       this.tl = new TimelineMax();
  //       //   this.tl.to(mesh.scale, 1, { x: 2, ease: Expo.easeOut });
  //       this.tl.to(intersects[i].object.scale, 1, {
  //         x: 2,
  //         ease: Expo.easeOut,
  //       });
  //       this.tl.to(intersects[i].object.scale, 0.3, {
  //         x: 1,
  //         ease: Expo.easeOut,
  //       });
  //       this.tl.to(intersects[i].object.position, 0.5, {
  //         x: 2,
  //         ease: Expo.easeOut,
  //       });
  //       this.tl.to(
  //         intersects[i].object.rotation,
  //         0.3,
  //         { y: Math.PI * 5, ease: Expo.easeOut },
  //         // -1.5s before it normally would
  //         "=-1.5"
  //       );
  //     }
  //   };

  //   render();

  //   window.addEventListener("click", onMouseMove);
  // }

  render() {
    return (
      <div className="hello-class">
        <h1>Hello</h1>
        <button onClick={() => console.log(this.props.say())}></button>
      </div>
    );
  }
}
