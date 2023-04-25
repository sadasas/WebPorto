import React from "react";
import PropTypes from "prop-types";
import styles from "./Biography.module.scss";
import TypedText from "./TypedText";

const job = ["GAME PROGAMMER", "REACT DEVELOPER"];
function Biography({ isActive }) {
  return (
    <div
      className={`${styles.biography} ${
        isActive ? null : styles["biography-inactive"]
      }`}
    >
      <h2>Hello. I'M WAHYU SETIO RILO PAMBUDI</h2>

      <TypedText text={job} delay={100} />

      <h3 className={styles.description}>
        A freelancer who provides services for game development and web
        development, and an explorer who is passionate about technology{" "}
      </h3>
    </div>
  );
}

Biography.propTypes = {
  isActive: PropTypes.bool,
};

export default Biography;
