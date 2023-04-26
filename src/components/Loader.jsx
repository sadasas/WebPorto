import React from "react";

import LoadingImg from "/loader.svg";
import styles from "./loader.module.scss";

function Loader() {
  return (
    <div className={styles.loader}>
      <img src={LoadingImg} />
    </div>
  );
}

export default Loader;