import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { hamburgerToggled } from "../../../features/hamburger/hamburgerToggleSlice";
import styles from "../../../styles/navbar/list_nav_hamburger/ListNavHamburger.module.scss";
import { List } from "./List";

function ListNavHamburger() {
  const dispatch = useDispatch();
  const { value: isOpen } = useSelector((state) => state.hamburgerToggle);
  const toggleHamburger = () => dispatch(hamburgerToggled({}));

  return (
    <>
      <div
        className={`${styles["list-nav"]} ${
          isOpen ? null : styles["list-nav-close"]
        }`}
      >
        <div onClick={() => toggleHamburger()} className={styles["close-btn"]}>
          <AiOutlineClose />
        </div>
        <ul>
          <List link="#about" text="HOME" index={1} />
          <List link="#about" text="ABOUT" index={2} />
          <List link="#projects" text="WORKS" index={3} />
          <List link="#contact" text="CONTACT" index={4} />
        </ul>
      </div>
    </>
  );
}

export default ListNavHamburger;
