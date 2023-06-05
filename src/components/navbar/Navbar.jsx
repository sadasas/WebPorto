import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

import { HamburgerToggleContext } from "../../context/hamburgerContext";
import Hamburger from "./hamburger/Hamburger";
import styles from "@/styles/navbar/Navbar.module.scss";
import ListNavHamburger from "./listnavHamburger/ListNavHamburger";

function ListNav({ text, link }) {
  const listMotion = {
    hidden: {
      transition: { duration: 0.5 },
      x: "100px",
      opacity: 0,
    },
    visible: {
      transition: { duration: 0.5 },
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={listMotion}>
      <HashLink to={link} className={styles.list} smooth>
        <h4>{text}</h4>
      </HashLink>
    </motion.div>
  );
}
ListNav.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  pos: PropTypes.number,
};

function Navbar() {
  const [pos, setPos] = useState(0);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const listNavMotion = {
    hidden: {
      visibility: "hidden",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3,
      },
    },
    visible: {
      visibility: "visible",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  function handleScrollDocument() {
    setPos(document.body.getBoundingClientRect().top);
  }
  useEffect(() => setPos(document.body.getBoundingClientRect().top), []);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollDocument);
    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);
  useEffect(() => {
    if (pos > 0 && isHamburgerOpen) setIsHamburgerOpen(false);
  }, [pos]);

  return (
    <HamburgerToggleContext.Provider
      value={{
        isHamburgerOpen,
        setIsHamburgerOpen,
      }}
    >
      <section id="navbar">
        <nav className={styles.navbar}>
          <div className={styles["navbar-container"]}>
            <h2 className={styles.logo}>WSRP</h2>
            <motion.div
              initial="visible"
              animate={pos >= 0 ? "visible" : "hidden"}
              variants={listNavMotion}
              className={styles["list-nav"]}
            >
              <ListNav link="#home" text="Home"></ListNav>
              <ListNav link="#projects" text="Works"></ListNav>
              <ListNav index={3} pos={pos} link="#about" text="About"></ListNav>
              <ListNav link="#contact" text="Contact"></ListNav>
            </motion.div>
            <Hamburger pos={pos} />
          </div>
        </nav>
        <ListNavHamburger />
      </section>
    </HamburgerToggleContext.Provider>
  );
}

export default Navbar;
