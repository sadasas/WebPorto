import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, useInView } from "framer-motion";

import styles from "../../styles/about/About.module.scss";
import picture from "../../assets/profile.png";
import Biography from "./Biography";
import MySkill from "./MySkill";

function Picture() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const photoWrapperMotion = {
    visible: {
      opacity: 1,
      transition: { duration: 0.7 },
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={photoWrapperMotion}
      className={styles.photo}
      animate={isInView ? "visible" : "hidden"}
    >
      <LazyLoadImage
        placeholderSrc="/placeholder/200x400.png"
        src={picture}
      ></LazyLoadImage>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className={styles["about-container"]}>
      <div className={styles.about}>
        <div className={styles.bio}>
          <Picture />
          <Biography />
        </div>
        <MySkill />
      </div>
    </section>
  );
}

export default About;
