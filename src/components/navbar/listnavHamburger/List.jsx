import React, { useState, useContext } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import styles from "../../../styles/navbar/list_nav_hamburger/List.module.scss";
import { HamburgerToggleContext } from "../../../context/hamburgerContext";

export function List({ text, index, link }) {
  const { isHamburgerOpen, setIsHamburgerOpen } = useContext(
    HamburgerToggleContext
  );

  //frame motion variant
  const listWrapperMotion = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };
  const listMotion = {
    initial: {},
    hover: {},
  };
  const arrowMotion = {
    initial: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    hover: {
      width: "1.2rem",
      opacity: 1,
      transition: { duration: 0.2, opacity: { delay: 0.1 } },
    },
  };
  const numberMotion = {
    hover: {
      rotate: "1turn",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={styles["list-nav-content"]}
      variants={listWrapperMotion}
    >
      <HashLink to={link} smooth>
        <motion.li
          variants={listMotion}
          whileHover="hover"
          initial="initial"
          onClick={() => setIsHamburgerOpen(false)}
        >
          <motion.h2 variants={arrowMotion}>&rarr;</motion.h2>
          <motion.h1 className={styles["text-list"]}>{text}</motion.h1>
          <motion.p variants={numberMotion} className={styles["number-list"]}>
            {index}
          </motion.p>
        </motion.li>
      </HashLink>
    </motion.div>
  );
}
List.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number,
  link: PropTypes.string,
};
