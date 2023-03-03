import React from "react";
import { useSelector } from "react-redux";

import styles from "./ListNav.module.css";
import { List } from "./List";

function ListNav() {
  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);
  return (
    <div
      className={`${styles["list-nav"]} ${
        isOpen ? null : styles["list-nav-close"]
      }`}
    >
      <ul>
        <List link="#introduction" text="HOME" index={1} isOpen={isOpen} />
        <List link="#about" text="ABOUT" index={2} isOpen={isOpen} />
        <List link="#projects" text="PROJECTS" index={3} isOpen={isOpen} />
      </ul>
    </div>
  );
}

export default ListNav;
