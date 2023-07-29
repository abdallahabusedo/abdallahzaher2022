import { OrthographicCamera } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import React from "react";

export default function Scene({ ...props }) {
  const gltf = useLoader(GLTFLoader, "/static/Models/skull.glb");
  const modelRef = React.useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
    }
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
            intensity={10}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            color="#fff"
            position={[50, 13, 100]}
          />
          <directionalLight
            name="Default Directional Light"
            intensity={10}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            color="#fff"
            position={[-50, 13, 10]}
          />
        </OrthographicCamera>
        <primitive
          ref={modelRef}
          object={gltf.scene}
          position={[0, 0, 0]}
          scale={1.5}
          rotation={[0, 45, 0]}
        />
        <ambientLight intensity={10} />
        <pointLight intensity={5} position={[0, 0, 5]} />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} />
      </group>
    </>
  );
}
