import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./About.module.css";
import picture from "../../assets/profile.JPG";
import Biography from "./Biography";
import MySkill from "./MySkill";

function Picture({ isActive }) {
  return (
    <div
      className={`${styles.photo} ${
        isActive ? null : styles["photo-inactive"]
      }`}
    >
      <LazyLoadImage
        placeholderSrc="/placeholder/200x400.png"
        src={picture}
        className={styles["photo-content"]}
      ></LazyLoadImage>
    </div>
  );
}
Picture.propTypes = {
  isActive: PropTypes.bool,
};

function checkView(element, setActive, setOverlaped) {
  var windowHeight = window.innerHeight;
  var elemenTop = element.current.getBoundingClientRect().top;
  var elemenVisible = 700;
  if (elemenTop < windowHeight - elemenVisible) {
    setActive(true);
    setOverlaped(true);
  } else setActive(false);
}

function About() {
  const [active, setActive] = useState(false);
  const [overlaped, setOverlaped] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      checkView.bind(null, aboutRef, setActive, setOverlaped)
    );
  }, []);

  return (
    <section ref={aboutRef} id="about" className={styles.about}>
      <Biography isActive={overlaped ? true : active} />
      <Picture isActive={overlaped ? true : active} />
      <MySkill isActive={overlaped ? true : active} />
    </section>
  );
}

export default About;
