import React from "react";
import { useDispatch } from "react-redux";

import { hamburgerToggled } from "../../../features/hamburger/hamburgerToggleSlice";
import Styles from "./Hamburger.module.css";
import { Line } from "./Line";

function Hamburger() {
  const dispatch = useDispatch();
  function toggleHamburger() {
    dispatch(hamburgerToggled({}));
  }
  return (
    <div className={Styles.hamburger} onClick={toggleHamburger}>
      <Line index={1} />
      <Line index={2} />
      <Line index={3} />
    </div>
  );
}

export default Hamburger;
