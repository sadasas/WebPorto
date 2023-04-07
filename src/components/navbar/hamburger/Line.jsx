import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Styles from "./Hamburger.module.scss";

export function Line({ index }) {
  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);

  function lineAnim() {
    if (isOpen) {
      if (index == 1) return Styles["line-1-onClick"];
      else if (index == 2) return Styles["line-2-onClick"];
      else return Styles["line-3-onClick"];
    }
  }
  return <div className={`${Styles.line} ${lineAnim()}`}></div>;
}

Line.propTypes = {
  isOpen: PropTypes.bool,
  index: PropTypes.number,
};
