import React from "react";

import LoadingImg from "/img/loader/circleLoader.svg";
import styles from "@styles/loaders/pageLoader.module.scss";

function PageLoader() {
  return (
    <div className={styles.loader}>
      <img alt="loader" src={LoadingImg} />
    </div>
  );
}

export default PageLoader;
