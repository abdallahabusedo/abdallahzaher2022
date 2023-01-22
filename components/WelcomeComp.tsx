import React from "react";
import styles from "../styles/Home.module.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import NavBar from "./NavBar";
import Scene from "./Room";
function WelcomeComp() {
  return (
    <section className={styles.Welcome}>
      <NavBar />

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <p className={styles.WelcomeLine2}>Hi, My name is</p>
          <p className={styles.WelcomeLine1}>
            <span className="text-[#fb0691]">{"{"}</span> .Abdallah Zaher{" "}
            <span className="text-[#f60a90]">{"}"}</span>
          </p>
          <p className={styles.WelcomeLine2}>
            I&apos;am a {"< "}Full-Stack developer{"  />"}
          </p>
        </div>
        <div className="w-[50rem] h-[35rem]">
          <Canvas shadows flat linear>
            <Scene />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default WelcomeComp;
