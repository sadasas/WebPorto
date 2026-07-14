import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";

import styles from "@styles/about/Biography.module.scss";
import TypedText from "./TypedText";

const job = ["GAME PROGAMMER", "FULLSTACK WEB DEVELOPER"];
function Biography() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const biographyMotion = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.5 },
    },
    hidden: {
      opacity: 0,
      x: "100px",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={biographyMotion}
      animate={isInView ? "visible" : "hidden"}
      className={styles.biography}
    >
      <h2>Hello. I'M WAHYU SETIO RILO PAMBUDI</h2>

      <TypedText text={job} delay={100} />

      <h3 className={styles.description}>
       I am a Fullstack Web Developer and Game Programmer with a strong foundation in modern web
technologies and interactive development. I have experience in building responsive, scalable, and user-
friendly applications with a focus on code quality and performance. I am committed to continuous learning
and professional growth, and I am eager to contribute effectively within a collaborative team to deliver
impactful digital solutions.
      </h3>
    </motion.div>
  );
}

Biography.propTypes = {
  isActive: PropTypes.bool,
};

export default Biography;
