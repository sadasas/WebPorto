import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { hamburgerToggled } from "../../../features/hamburger/hamburgerToggleSlice";
import styles from "./Hamburger.module.scss";
import { Line } from "./Line";

function Hamburger({ pos }) {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  function toggleHamburger() {
    dispatch(hamburgerToggled({}));
  }
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
      onClick={toggleHamburger}
    >
      <div
        className={`${styles.title} ${
          pos < 0 ? styles["title-active"] : null
        } ${isHover ? styles["title-hover"] : styles["title-unhover"]}`}
      >
        <h3>MENU</h3>
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
