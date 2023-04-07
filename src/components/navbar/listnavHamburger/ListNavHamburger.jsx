import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./ListNavHamburger.module.css";
import { List } from "./List";
import pointerHandler from "../../pointerHandler";

function ListNavHamburger() {
  const [isHover, SetIsHover] = useState(false);
  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);

  useEffect(() => {
    pointerHandler(isHover);
  }, [isHover]);

  return (
    <div
      onMouseEnter={() => SetIsHover(true)}
      onMouseLeave={() => SetIsHover(false)}
      className={`${styles["list-nav"]} ${
        isOpen ? null : styles["list-nav-close"]
      }`}
    >
      <ul>
        <List link="#introduction" text="HOME" index={1} />
        <List link="#about" text="ABOUT" index={2} />
        <List link="#projects" text="WORKS" index={3} />
        <List link="#contact" text="CONTACT" index={4} />
      </ul>
    </div>
  );
}

export default ListNavHamburger;
