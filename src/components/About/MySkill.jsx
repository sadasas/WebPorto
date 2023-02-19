import React from "react";
import styles from "./MySkill.module.css";
import PropTypes from "prop-types";

function Skill({ text, level }) {
  return (
    <>
      <div className={styles.skill}>
        <h2>{text}</h2>
        <h2>{level}</h2>
        <div className={styles.line}></div>
      </div>
    </>
  );
}

Skill.propTypes = {
  text: PropTypes.string,
  level: PropTypes.string,
};

function MySkill({ isActive }) {
  return (
    <div
      className={`${styles.mySkill} ${
        isActive ? null : styles["mySkill-inactive"]
      }`}
    >
      <h1>My Skill</h1>
      <Skill text="C/C++" level="Beginner" />
      <Skill text="Javascript" level="Intermediate" />
      <Skill text="C#" level="Intermediate" />
      <Skill text="React-js" level="Beginner" />
      <Skill text="Unity-engine" level="Intermediate" />
    </div>
  );
}
MySkill.propTypes = {
  isActive: PropTypes.bool,
};

export default MySkill;
