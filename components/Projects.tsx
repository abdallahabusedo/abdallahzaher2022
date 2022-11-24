import React from "react";
import styles from "./../styles/Home.module.css";
function Projects() {
  return (
    <section
      className={`${styles.Welcome} flex flex-col gap-8 justify-center items-center p-4`}
    >
      <span className={`${styles.text}`}>
        {"{"} Projects {"}"}
      </span>
      <div
        className={`${styles.glassEffect} grid grid-cols-6 justify-items-center justify-center gap-4 items-center w-2/3 bg-[#290e56] p-4`}
      >
        <div></div>
      </div>
    </section>
  );
}

export default Projects;
