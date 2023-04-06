import React from "react";
import styles from "./Introduction.module.css";

const text = [
  "hi",
  "let me introduce my self",
  "i'am Wahyu Setio Rilo Pambudi",
  "a",
  "tech enthusiast",
  "game programmer",
  "react developer",
];

function Introduction() {
  return <section id="introduction" className={styles.introduction}></section>;
}

export default Introduction;
