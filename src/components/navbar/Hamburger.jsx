import React from "react";
import PropTypes from "prop-types";
import Styles from "./Hamburger.module.css";

function Line({ isOpen, index }) {
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

function Hamburger({ hamburgerOpen, toggleHamburger }) {
  return (
    <div className={Styles.hamburger} onClick={toggleHamburger}>
      <Line isOpen={hamburgerOpen} index={1} />
      <Line isOpen={hamburgerOpen} index={2} />
      <Line isOpen={hamburgerOpen} index={3} />
    </div>
  );
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
};

export default Hamburger;
