import React, { useState, useContext } from "react";

import styles from "../../../styles/navbar/hamburger/Hamburger.module.scss";
import { Line } from "./Line";
import { HamburgerToggleContext } from "../../../context/hamburgerContext";

function Hamburger({ pos }) {
  const [isHover, setIsHover] = useState(false);
  const { isHamburgerOpen, setIsHamburgerOpen } = useContext(
    HamburgerToggleContext
  );
  return (
    <div
      onMouseEnter={(e) => {
        e.preventDefault();
        setIsHover(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setIsHover(false);
      }}
      className={`${styles.hamburger} ${
        pos < 0 ? styles["hamburger-active"] : styles["hamburger-inactive"]
      }`}
      onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
    >
      <div
        className={`${styles.title} ${
          pos < 0 ? styles["title-active"] : null
        } ${isHover ? styles["title-hover"] : styles["title-unhover"]}`}
      >
        <h3>{isHover ? (isHamburgerOpen ? "Close" : "Open") : "Menu"}</h3>
      </div>

      <div className={styles.lines}>
        <Line index={1} />
        <Line index={2} />
        <Line index={3} />
      </div>
    </div>
  );
}

export default Hamburger;
