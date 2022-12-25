import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
  fov: number;
  canvasId: string;
  scene?: THREE.Scene;
  stats?: Stats;
  camera?: THREE.Camera;
  controls?: OrbitControls;
  renderer?: THREE.WebGLRenderer;
  boxMesh?: THREE.Mesh;
  animReq?: number;

  constructor(canvasId: string) {
    this.fov = 45;
    this.canvasId = canvasId;
    this.scene = undefined;
    this.stats = undefined;
    this.camera = undefined;
    this.controls = undefined;
    this.renderer = undefined;
    this.animReq = undefined;
  }
  initialize() {
    // Create a "scene"
    this.scene = new THREE.Scene();

    // Camera
    // const scale = window.innerHeight * 0.005 + 4.8
    // this.camera = new THREE.OrthographicCamera(
    //   -scale,
    //   scale,
    //   scale,
    //   -scale,
    //   0.01,
    //   50000
    // )
    // this.camera.position.copy(initialCameraPosition);
    // this.camera.lookAt(target);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 96;

    // Setup the "renderer"
    const canvas: HTMLCanvasElement = document.getElementById(
      "myThreeJsCanvas"
    ) as HTMLCanvasElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.setClearColor(0xfef3c7, 1);
    // this.renderer.setSize(512, 512);

    // Lighting;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    ambientLight.castShadow = true;
    this.scene.add(ambientLight);

    const light = new THREE.PointLight(0xffffff, 0.5);
    light.position.set(0, 30, 0);
    this.scene.add(light);

    const spotLight = new THREE.SpotLight(0xffffff, 0.4);
    spotLight.position.set(10, 64, 32);
    const spotLight2 = new THREE.SpotLight(0xffffff, 0.4);
    spotLight2.position.set(-32, 64, -32);
    this.scene.add(spotLight);
    this.scene.add(spotLight2);

    // Add a cube to the scene
    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    this.boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // this.scene.add(this.boxMesh);

    // Orbit Controls and Stats
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.stats = Stats();
    document.body.appendChild(this.stats.dom);

    window.addEventListener("resize", () => this.onWindowResize(), false);
  }

  animate() {
    if (
      !this.scene ||
      !this.camera ||
      !this.boxMesh ||
      !this.renderer ||
      !this.stats ||
      !this.controls
    )
      return;

    this.animReq = window.requestAnimationFrame(this.animate.bind(this));
    this.boxMesh.rotation.x += 0.02;
    this.boxMesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
    this.stats.update();
    this.controls.update();
  }

  onWindowResize() {
    if (!this.renderer) return;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onUnmount() {
    if (!this.animReq || !this.renderer) return;
    cancelAnimationFrame(this.animReq);
    this.renderer.dispose();
  }
}

// Animate (call func every frame)
