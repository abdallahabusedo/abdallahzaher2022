import React from "react";
import styles from "../styles/Home.module.css";
import Spline from "@splinetool/react-spline";
import NavBar from "./NavBar";

function WelcomeComp() {
  return (
    <section className={styles.Welcome}>
      <div className="sticky top-4">
        <NavBar />
      </div>
      <div className="flex flex-row h-screen items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <p className={styles.WelcomeLine2}>Hi, My name is</p>
          <p className={styles.WelcomeLine1}>
            {"{"} Abdallah Zaher {"}"}
          </p>
          <p className={`${styles.WelcomeLine2}`}>
            I'am a {"<"}Front-end developer{" />"}
          </p>
        </div>
        <div className="w-1/2 h-full">
          <Spline scene="https://prod.spline.design/AqaVuMhQ6L8yAIkB/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}

export default WelcomeComp;
