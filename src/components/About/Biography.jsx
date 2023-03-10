import React from "react";
import PropTypes from "prop-types";
import styles from "./Biography.module.css";

function Biography({ isActive }) {
  return (
    <div
      className={`${styles.biography} ${
        isActive ? null : styles["biography-inactive"]
      }`}
    >
      <h2>Biography</h2>
      <h4>
        {" "}
        Hi! i'm Wahyu. Being a fresher, I think I am very flexible and adaptive
        to learning new things. Computer science has always been my favorite
        subject, currently studying game programming and in my free time
        studying web development{" "}
      </h4>
    </div>
  );
}

Biography.propTypes = {
  isActive: PropTypes.bool,
};

export default Biography;
