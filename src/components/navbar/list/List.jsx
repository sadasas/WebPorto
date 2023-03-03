import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import styles from "./ListNav.module.css";

export function List({ text, index, link }) {
  const [hover, setHover] = useState(false);

  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  function calDurByIndex() {
    if (index == 1) {
      return 300;
    } else if (index == 2) {
      return 400;
    } else return 600;
  }

  return (
    <>
      <HashLink to={link} className={styles["list-nav-content"]} smooth>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {hover && <h1>&rarr;</h1>}
          <h1
            style={{ transitionDelay: calDurByIndex() + "ms" }}
            className={`${styles["text-list"]}  ${
              isOpen ? styles["text-list-open"] : styles["text-list-close"]
            }`}
          >
            {text}
          </h1>
          <h2
            className={`${styles["number-list"]} ${
              hover ? styles["number-list-hover"] : null
            }`}
          >
            {index}
          </h2>
        </li>
      </HashLink>
      <div
        className={`${hover ? styles["line-hover"] : null} ${styles.line}`}
      ></div>
    </>
  );
}
List.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number,
  link: PropTypes.string,
};
