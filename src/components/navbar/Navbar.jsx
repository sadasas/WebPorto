import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

import Hamburger from "./hamburger/Hamburger";
import styles from "../../styles/navbar/Navbar.module.scss";
import { hamburgerToggled } from "../../features/hamburger/hamburgerToggleSlice";
import ListNavHamburger from "./listnavHamburger/ListNavHamburger";

function ListNav({ text, link, pos, index }) {
  const calDelayOut = (i) => {
    return i * 200;
  };
  return (
    <HashLink
      style={{ transitionDelay: calDelayOut(index) + "ms" }}
      to={link}
      className={`${styles.list} ${
        pos < 0 ? styles["list-inactive"] : styles["list-active"]
      }`}
      smooth
    >
      <h4>{text}</h4>
    </HashLink>
  );
}
ListNav.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  pos: PropTypes.number,
  index: PropTypes.number,
};

function Navbar() {
  const [pos, setPos] = useState(0);
  const dispatch = useDispatch();

  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);
  function handleScrollDocument() {
    setPos(document.body.getBoundingClientRect().top);
  }
  useEffect(() => setPos(document.body.getBoundingClientRect().top), []);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollDocument);
    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);
  useEffect(() => {
    if (pos > 0 && isOpen) toggleHamburger();
  }, [pos]);

  const toggleHamburger = () => dispatch(hamburgerToggled({}));

  return (
    <section id="navbar">
      <nav className={styles.navbar}>
        <div className={styles["navbar-container"]}>
          <h2 className={styles.logo}>WSRP</h2>
          <div className={styles["list-nav"]}>
            <ListNav index={1} pos={pos} link="#home" text="Home"></ListNav>
            <ListNav
              index={2}
              pos={pos}
              link="#projects"
              text="Works"
            ></ListNav>
            <ListNav index={3} pos={pos} link="#about" text="About"></ListNav>
            <ListNav
              index={4}
              pos={pos}
              link="#contact"
              text="Contact"
            ></ListNav>
          </div>
          <Hamburger pos={pos} />
        </div>
      </nav>
      <ListNavHamburger />
    </section>
  );
}

export default Navbar;
