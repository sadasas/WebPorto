import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/about/MySkill.module.scss";

function Skill({ text, logo, level, isActive, index }) {
  const calDelay = () => 300 * index;
  return (
    <div
      style={{ transitionDelay: calDelay() + "ms" }}
      data--skill={text + " | " + level}
      className={`${styles.skill} ${isActive ? styles["skill-active"] : null}`}
    >
      <img src={logo}></img>
    </div>
  );
}
Skill.propTypes = {
  text: PropTypes.string,
  level: PropTypes.string,
  logo: PropTypes.string,
  index: PropTypes.number,
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
          text="Graphql"
          level=""
          logo="/skill/GraphQL.png"
        />
        <Skill
          index={9}
          isActive={isActive}
          text="Nextjs"
          level=""
          logo="/skill/nextjs.svg"
        />
      </div>
    </div>
  );
}
MySkill.propTypes = {
  isActive: PropTypes.bool,
};

export default MySkill;
