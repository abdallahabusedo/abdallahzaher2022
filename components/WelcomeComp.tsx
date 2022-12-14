import React from "react";
import styles from "../styles/Home.module.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'


import NavBar from "./NavBar";
import ScrollDown from "./ScrollDown";
import Scene from "./Room";
function WelcomeComp() {
  return (
    <section className={styles.Welcome}>
      <div className="sticky top-4">
        <NavBar />
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <p className={styles.WelcomeLine2}>Hi, My name is</p>
          <p className={styles.WelcomeLine1}>
            {"{"} Abdallah Zaher {"}"}
          </p>
          <p className={styles.WelcomeLine2}>
            I&apos;am a {"<"}Full-Stack developer{" />"}
          </p>
        </div>
        <div className="w-[50rem] h-[35rem]">
          <Canvas shadows flat linear>
            <Scene />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
}

export default WelcomeComp;
