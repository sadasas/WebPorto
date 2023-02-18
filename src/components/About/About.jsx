import React from "react";
import styles from "./About.module.css";
import picture from "../../assets/profile.JPG";
import Biography from "./Biography";
import MySkill from "./MySkill";

function Picture() {
  return (
    <div className={styles.photo}>
      <img src={picture} className={styles["photo-content"]}></img>
    </div>
  );
}

function About() {
  return (
    <section id="about" className={styles.about}>
      <Biography />
      <Picture />
      <MySkill />
    </section>
  );
}

export default About;
