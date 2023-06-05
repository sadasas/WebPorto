import React from "react";
import LoadingImg from "/img/loader/dotLoader.svg";
import styles from "@styles/loaders/dotLoader.module.scss";

function DotLoader() {
  return (
    <div className={styles.loader}>
      <img alt="loader" src={LoadingImg} />
    </div>
  );
}

export default DotLoader;
