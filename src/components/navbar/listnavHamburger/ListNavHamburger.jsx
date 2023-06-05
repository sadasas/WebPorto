import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import styles from "@styles/navbar/list_nav_hamburger/ListNavHamburger.module.scss";
import { List } from "./List";
import { HamburgerToggleContext } from "@/context/hamburgerContext";

function ListNavHamburger() {
  const { isHamburgerOpen, setIsHamburgerOpen } = useContext(
    HamburgerToggleContext
  );

  ///frame motion variant
  const containerMotion = {
    hidden: {
      visibility: "hidden",
      transition: { when: "afterChildren" },
    },
    visible: {
      visibility: "visible",
      transition: { when: "beforeChildren" },
    },
  };

  const ul = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        opacity: { duration: 0.2, delay: 0.3 },
        when: "afterChildren",
        staggerChildren: 0.3,
      },
    },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate={isHamburgerOpen ? "visible" : "hidden"}
        variants={containerMotion}
        className={styles["list-nav"]}
      >
        <div
          onClick={() => setIsHamburgerOpen(false)}
          className={styles["close-btn"]}
        >
          <AiOutlineClose />
        </div>
        <motion.ul variants={ul}>
          <List link="#about" text="HOME" index={1} />
          <List link="#about" text="ABOUT" index={2} />
          <List link="#projects" text="WORKS" index={3} />
          <List link="#contact" text="CONTACT" index={4} />
        </motion.ul>
      </motion.div>
    </>
  );
}

export default ListNavHamburger;
