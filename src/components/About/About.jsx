import React from "react";

import styles from "@styles/about/About.module.scss";
import Biography from "./Biography";
import MySkill from "./MySkill";

const CanvasBio = React.lazy(() => import("@components/3d/CanvasBio"));

function About() {
  return (
    <section id="about" className={styles["container"]}>
      <div className={styles["about-container"]}>
        <div className={styles["bio-container"]}>
          <CanvasBio />
          <Biography />
        </div>
        <MySkill />
      </div>
    </section>
  );
}

export default About;
