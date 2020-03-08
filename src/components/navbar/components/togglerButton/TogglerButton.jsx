import React from "react";
import {
  toggle_button__line,
  toggle_button
} from "./TogglerButton.module.scss";

const TogglerButton = ({ click }) => {
  return (
    <button className={toggle_button} onClick={click}>
      <div className={toggle_button__line}></div>
      <div className={toggle_button__line}></div>
      <div className={toggle_button__line}></div>
    </button>
  );
};

export default TogglerButton;
