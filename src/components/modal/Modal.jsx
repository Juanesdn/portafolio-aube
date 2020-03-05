import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { container, icon, text_container } from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={container}>
      <div className={text_container}>
        <MdEmail size={"2em"} className={icon} />
        <h3>aube.desing@gmail.com</h3>
      </div>
      <div className={text_container}>
        <MdLocationOn size={"2em"} className={icon} />
        <h3>Barranquilla, Colombia</h3>
      </div>
    </div>
  );
};

export default Modal;
