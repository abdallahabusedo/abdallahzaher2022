import React from "react";
import styles from "../styles/ScrollDown.module.css";
function ScrollDown() {
  return (
    <div className={styles.container}>
      <a id="scroll-btn" href="/skills" className={styles.chevron}></a>
    </div>
  );
}

export default ScrollDown;
