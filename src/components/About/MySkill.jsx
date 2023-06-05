import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";

import styles from "@styles/about/MySkill.module.scss";

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
        <Skill text="C/C++" logo="/img/skill/cpp.png" level="Beginner" />
        <Skill text="C#" logo="/img/skill/csharp.svg" level="Intermediate" />
        <Skill
          logo="/img/skill/js.png"
          text="Javascript"
          level="Intermediate"
        />
        <Skill text="Typescript" logo="/img/skill/ts.png" level="Beginner" />
        <Skill logo="/img/skill/react.png" text="React" level="Intermediate" />
        <Skill text="Unity" logo="/img/skill/unity.png" level="Intermediate" />
        <Skill
          text="MongoDB"
          logo="/img/skill/MongoDB.png"
          level="Intermediate"
        />
        <Skill text="Graphql" level="Beginner" logo="/img/skill/GraphQL.png" />
        <Skill text="Nextjs" level="" logo="/img/skill/nextjs.svg" />
        <Skill text="Docker" level="Beginner" logo="/img/skill/docker.svg" />
      </motion.div>
    </div>
  );
}

export default MySkill;
