import React, { useContext } from "react";
import PropTypes from "prop-types";

import styles from "@/styles/navbar/hamburger/Hamburger.module.scss";
import { HamburgerToggleContext } from "@/context/hamburgerContext";

export function Line({ index }) {
  const { isHamburgerOpen } = useContext(HamburgerToggleContext);
  function lineAnim() {
    if (isHamburgerOpen) {
      if (index == 1) return styles["line-1-onClick"];
      else if (index == 2) return styles["line-2-onClick"];
      else return styles["line-3-onClick"];
    }
  }
  return <div className={`${styles.line} ${lineAnim()}`}></div>;
}

Line.propTypes = {
  isOpen: PropTypes.bool,
  index: PropTypes.number,
};
