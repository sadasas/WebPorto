import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./About.module.scss";
import picture from "../../assets/profile.png";
import Biography from "./Biography";
import MySkill from "./MySkill";
import pointerHandler from "../pointerHandler";

function Picture({ isActive }) {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    pointerHandler(isHover);
  }, [isHover]);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${styles.photo} ${
        isActive ? null : styles["photo-inactive"]
      }`}
    >
      <div className={styles["photo-bg"]}></div>
      <LazyLoadImage
        className={`${styles["photo-content"]} ${
          isActive ? styles["photo-content-active"] : null
        }`}
        placeholderSrc="/placeholder/200x400.png"
        src={picture}
      ></LazyLoadImage>
    </div>
  );
}
Picture.propTypes = {
  isActive: PropTypes.bool,
};

function About() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setActive(true), 300);
  }, []);

  return (
    <section id="about" className={styles["about-container"]}>
      <div className={styles.about}>
        <div className={styles.bio}>
          <Picture isActive={active} />
          <Biography isActive={active} />
        </div>
        <MySkill isActive={active} />
      </div>
    </section>
  );
}

export default About;
