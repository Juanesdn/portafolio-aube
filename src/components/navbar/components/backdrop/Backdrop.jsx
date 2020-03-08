import React from "react";
import { backdrop } from "./Backdrop.module.scss";

const Backdrop = ({ click }) => {
  return <div onClick={click} className={backdrop}></div>;
};

export default Backdrop;
