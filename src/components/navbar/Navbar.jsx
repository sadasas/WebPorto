import React, { useState } from "react";
import Hamburger from "./Hamburger";
import ListNav from "./ListNav";
import styles from "./Navbar.module.css";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <section id="navbar">
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>Nrawang Studio</h2>
        <Hamburger
          hamburgerOpen={hamburgerOpen}
          toggleHamburger={toggleHamburger}
        />
      </nav>
      <ListNav isOpen={hamburgerOpen} />
    </section>
  );
}

export default Navbar;
