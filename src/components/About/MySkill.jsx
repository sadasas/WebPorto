import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";

import styles from "../../styles/about/MySkill.module.scss";

function Skill({ text, logo, level }) {
  const skillMotion = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, opacity: { duration: 0.1 } },
    },
    hidden: {
      y: "90px",
      transition: { duration: 0.7, opacity: { duration: 0.1 } },
    },
  };
  return (
    <motion.div
      variants={skillMotion}
      data--skill={text + " | " + level}
      className={styles.skill}
    >
      <img src={logo}></img>
    </motion.div>
  );
}
Skill.propTypes = {
  text: PropTypes.string,
  level: PropTypes.string,
  logo: PropTypes.string,
};

function MySkill() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mySkillMotion = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: {},
  };
  return (
    <div className={styles.mySkill}>
      <h2>Tech Stack</h2>
      <motion.div
        ref={ref}
        variants={mySkillMotion}
        animate={isInView ? "visible" : "hidden"}
        className={styles["mySkill-grid"]}
      >
        <Skill text="C/C++" logo="/skill/cpp.png" level="Beginner" />
        <Skill text="C#" logo="/skill/csharp.svg" level="Intermediate" />
        <Skill logo="/skill/js.png" text="Javascript" level="Intermediate" />
        <Skill text="Typescript" logo="/skill/ts.png" level="Beginner" />
        <Skill logo="/skill/react.png" text="React" level="Intermediate" />
        <Skill text="Unity" logo="/skill/unity.png" level="Intermediate" />
        <Skill text="MongoDB" logo="/skill/MongoDB.png" level="Intermediate" />
        <Skill text="Graphql" level="" logo="/skill/GraphQL.png" />
        <Skill text="Nextjs" level="" logo="/skill/nextjs.svg" />
      </motion.div>
    </div>
  );
}

export default MySkill;
