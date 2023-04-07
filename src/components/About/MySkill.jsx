import React from "react";
import styles from "./MySkill.module.scss";
import PropTypes from "prop-types";

function Skill({ text, logo, level }) {
  return (
    <div data--skill={text + " | " + level} className={styles.skill}>
      <img src={logo}></img>
    </div>
  );
}
Skill.propTypes = {
  text: PropTypes.string,
  level: PropTypes.string,
  logo: PropTypes.string,
  isActive: PropTypes.bool,
};

function MySkill({ isActive }) {
  return (
    <div className={`${styles.mySkill} `}>
      <h2>Tech Stack</h2>
      <div className={styles["mySkill-grid"]}>
        <Skill
          index={1}
          isActive={isActive}
          text="C/C++"
          logo="/skill/cpp.png"
          level="Beginner"
        />
        <Skill
          index={2}
          isActive={isActive}
          text="C#"
          logo="/skill/csharp.svg"
          level="Intermediate"
        />
        <Skill
          logo="/skill/js.png"
          index={3}
          isActive={isActive}
          text="Javascript"
          level="Intermediate"
        />
        <Skill
          index={4}
          isActive={isActive}
          text="Typescript"
          logo="/skill/ts.png"
          level="Beginner"
        />
        <Skill
          logo="/skill/react.png"
          index={5}
          isActive={isActive}
          text="React"
          level="Intermediate"
        />
        <Skill
          index={6}
          isActive={isActive}
          text="Unity"
          logo="/skill/unity.png"
          level="Intermediate"
        />
        <Skill
          index={7}
          isActive={isActive}
          text="MongoDB"
          logo="/skill/MongoDB.png"
          level="Intermediate"
        />
        <Skill
          index={8}
          isActive={isActive}
          text="Tailwindcss"
          logo="/skill/Tailwind.svg"
          level="Intermediate"
        />
      </div>
    </div>
  );
}
MySkill.propTypes = {
  isActive: PropTypes.bool,
};

export default MySkill;
