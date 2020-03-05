import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Modal } from "../index";
import { callToAction } from "./CallToAction.module.scss";

const swal = withReactContent(Swal);

const CallToAction = () => {
  const showModal = () => {
    swal.fire({
      html: <Modal />,
      confirmButtonColor: "#e94e1b",
      icon: "info"
    });
  };

  return (
    <div className={callToAction} id="contact-us">
      <h2>Get in contact with us!</h2>
      <input
        onClick={() => showModal()}
        className="btn__filled"
        type="button"
        value="Get Started"
      />
    </div>
  );
};

export default CallToAction;
