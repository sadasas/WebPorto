import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { hamburgerToggled } from "../../../features/hamburger/hamburgerToggleSlice";
import styles from "./ListNavHamburger.module.scss";

export function List({ text, index, link }) {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const toggleHamburger = () => dispatch(hamburgerToggled({}));

  function calDurByIndex() {
    return 200 + 100 * index;
  }

  return (
    <>
      <HashLink to={link} className={styles["list-nav-content"]} smooth>
        <li
          onClick={toggleHamburger}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hover && <h3>&rarr;</h3>}
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
