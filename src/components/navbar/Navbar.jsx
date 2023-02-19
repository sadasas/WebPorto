import React from "react";
import Hamburger from "./hamburger/Hamburger";
import ListNav from "./list/ListNav";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <section id="navbar">
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>WSRP</h2>
        <Hamburger />
      </nav>
      <ListNav />
    </section>
  );
}

export default Navbar;
