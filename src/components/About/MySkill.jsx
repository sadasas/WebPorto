import React from "react";
import styles from "./MySkill.module.css";
import PropTypes from "prop-types";

function Skill({ text, level, isActive, index }) {
  const delay = (() => {
    return (index - 1) * 3000;
  })();
  const { width, textLevel } = (() => {
    switch (level) {
      case 1:
        return { width: "50%", textLevel: "Beginner" };
      case 2:
        return { width: "75%", textLevel: "Intermediate" };
      case 3:
        return { width: "100%", textLevel: "Master" };
    }
  })();

  return (
    <>
      <div
        style={{ transitionDelay: delay + "ms" }}
        className={`${styles.skill} ${
          isActive ? styles["skill-active"] : null
        }`}
      >
        <h4 className={`${styles["skill-title"]}`}>{text}</h4>
        <h5
          style={{ transitionDelay: delay + 3000 + "ms" }}
          className={`${styles["skill-level"]} ${
            isActive ? styles["skill-level-active"] : null
          }`}
        >
          {textLevel}
        </h5>
        <div
          style={{
            transitionDelay: delay + "ms",
            width: isActive ? width : "0",
          }}
          className={`${styles.line} `}
        ></div>
      </div>
    </>
  );
}

Skill.propTypes = {
  text: PropTypes.string,
  level: PropTypes.number,
  index: PropTypes.number,
  isActive: PropTypes.bool,
};

function MySkill({ isActive }) {
  return (
    <div
      className={`${styles.mySkill} ${
        isActive ? null : styles["mySkill-inactive"]
      }`}
    >
      <h2>My Skill</h2>
      <Skill index={1} isActive={isActive} text="C/C++" level={1} />
      <Skill index={2} isActive={isActive} text="C#" level={2} />
      <Skill index={3} isActive={isActive} text="Javascript" level={2} />
      <Skill index={4} isActive={isActive} text="Typescript" level={1} />
      <Skill index={5} isActive={isActive} text="React-js" level={2} />
      <Skill index={6} isActive={isActive} text="Unity-engine" level={2} />
    </div>
  );
}
MySkill.propTypes = {
  isActive: PropTypes.bool,
};

export default MySkill;
