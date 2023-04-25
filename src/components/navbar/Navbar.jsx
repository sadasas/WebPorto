import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hamburger from "./hamburger/Hamburger";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.scss";
import { hamburgerToggled } from "../../features/hamburger/hamburgerToggleSlice";
import ListNavHamburger from "./listnavHamburger/ListNavHamburger";
import PropTypes from "prop-types";

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

  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: "",
    scrollPos: 0,
  });
  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);
  function handleScrollDocument() {
    setScrollStatus((prev) => {
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? "up"
            : "down",
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  }
  useEffect(() => setPos(document.body.getBoundingClientRect().top));
  useEffect(() => {
    window.addEventListener("scroll", handleScrollDocument);
    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);
  useEffect(() => {
    if (pos == 0 && isOpen) toggleHamburger();
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
