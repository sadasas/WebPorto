import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hamburger from "./hamburger/Hamburger";
import ListNav from "./list/ListNav";
import styles from "./Navbar.module.css";
import { hamburgerToggled } from "../../features/hamburger/hamburgerToggleSlice";

function Navbar() {
  const [pos, setPos] = useState(0);
  const dispatch = useDispatch();
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: "",
    scrollPos: 0,
  });
  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);
  useEffect(() => setPos(document.body.getBoundingClientRect().top));
  useEffect(() => {
    window.addEventListener("scroll", handleScrollDocument);

    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);

  useEffect(() => {
    const bg = getComputedStyle(document.documentElement).getPropertyValue(
      "--background"
    );
    const fg = getComputedStyle(document.documentElement).getPropertyValue(
      "--foreground"
    );
    if (pos < 0 && scrollStatus.scrollDirection === "up") {
      document.documentElement.style.setProperty("--background-navbar", fg);
      document.documentElement.style.setProperty("--foreground-navbar", bg);
    } else {
      document.documentElement.style.setProperty("--background-navbar", bg);
      document.documentElement.style.setProperty("--foreground-navbar", fg);
      if (isOpen && pos < 0) toggleHamburger();
    }
  });
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
  const toggleHamburger = () => dispatch(hamburgerToggled({}));

  return (
    <section id="navbar">
      <nav
        className={`${styles.navbar} ${
          pos < 0 && scrollStatus.scrollDirection === "up"
            ? styles["navbar-scroll"]
            : null
        }`}
      >
        <h2 className={styles.logo}>WSRP</h2>
        <Hamburger />
      </nav>
      <ListNav />
    </section>
  );
}

export default Navbar;
