import React from "react";
import PropTypes from "prop-types";
import styles from "./Biography.module.css";
import TypedText from "../introduction/TypedText";

const job = ["GAME PROGAMMER", "REACT DEVELOPER"];
function Biography({ isActive }) {
  return (
    <div
      className={`${styles.biography} ${
        isActive ? null : styles["biography-inactive"]
      }`}
    >
      <h3>Hello. I'M WAHYU SETIO RILO PAMBUDI</h3>

      <TypedText text={job} delay={100} />

      <h3 className={styles.description}>
        {" "}
        A freelancer who provides services for game development and web
        development, for all businesses with more than 1 years of experience{" "}
      </h3>
    </div>
  );
}

Biography.propTypes = {
  isActive: PropTypes.bool,
};

export default Biography;
