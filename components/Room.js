import { OrthographicCamera } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function Scene({ ...props }) {
  const gltf = useLoader(GLTFLoader, "/static/fish/scene.gltf");

  let mixer = null;
  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    document.addEventListener("keydown", (event) => {
      console.log(event.key);
      let action = null;
      switch (event.key) {
        case "j":
          action = mixer.clipAction(gltf.animations[1]);
          action.setLoop(THREE.LoopOnce);
          action.play();
          break;
        case "w":
          action = mixer.clipAction(gltf.animations[2]);
          action.setLoop(THREE.LoopOnce);
          action.play();
          break;
        case "f":
          action = mixer.clipAction(gltf.animations[6]);
          action.setLoop(THREE.LoopOnce);
          action.play();
          break;
        case "s":
          action = mixer.clipAction(gltf.animations[9]);
          action.setLoop(THREE.LoopOnce);
          action.play();
          break;
        case "h":
          action = mixer.clipAction(gltf.animations[10]);
          action.setLoop(THREE.LoopOnce);
          action.play();
          break;
        default:
          action = mixer.clipAction(gltf.animations[0]);
          action.play();
          break;
      }
    });
  }
  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <>
      <group {...props} dispose={null}>
        <OrthographicCamera
          name="Default Camera"
          makeDefault={true}
          zoom={150}
          far={50000}
          near={-50000}
          position={[1.7, 100, 998.56]}
          rotation={[0, 0, 0]}
          scale={1}
        >
          <directionalLight
            name="Default Directional Light"
            intensity={0.99}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            color="#dadada"
            position={[850000, 1300000, 1000000]}
          />
        </OrthographicCamera>
        <primitive object={gltf.scene} position={[0, -1.5, 0]} />
        <ambientLight intensity={2} />
        <pointLight intensity={5} position={[0, 0, 5]} />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} />
      </group>
    </>
  );
}
