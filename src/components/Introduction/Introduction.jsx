import React from "react";
import styles from "./Introduction.module.css";
import TypedText from "./TypedText";

const text = [
  "hi",
  "let me introduce my self",
  "i'am Wahyu Setio Rilo Pambudi",
  "a",
  "tech enthusiast",
  "game programmer",
  "front-end web developer",
];

function Introduction() {
  return (
    <section id={styles.introduction}>
      <TypedText text={text} delay={100} />
    </section>
  );
}

export default Introduction;
