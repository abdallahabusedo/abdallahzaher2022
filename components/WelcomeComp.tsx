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

      <div
        className="flex lg:flex-row lg:items-center lg:justify-center  md:flex-col md:justify-center md:items-center
      sm:flex-col sm:justify-center sm:items-center 
      xs:flex-col xs:justify-center xs:items-center 
      "
      >
        <div className="flex flex-col items-start justify-center">
          <p className="lg:text-[30px] text-white ml-[70px] md:text-[20px]  sm:text-[10px]">
            Hi, My name is
          </p>
          <p className="lg:text-[50px] text-white ml-[100px] md:text-[20px]  sm:text-[15px] ">
            <span className="text-[#fb0691]">{"{"}</span> .Abdallah Zaher{" "}
            <span className="text-[#f60a90]">{"}"}</span>
          </p>
          <p className="lg:text-[30px] text-white ml-[70px] md:text-[20px]  sm:text-[10px]">
            I&apos;am a {"< "}Full-Stack developer{"  />"}
          </p>
        </div>
        <div className="lg:w-[50rem] lg:h-[35rem] md:w-[30rem] md:h-[20rem] ">
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
