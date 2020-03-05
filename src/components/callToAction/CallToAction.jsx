import React from "react";
import { callToAction } from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <div className={callToAction} id="contact-us">
      <h2>Get in contact with us!</h2>
      <a href="" className="btn__filled">
        Get Started
      </a>
    </div>
  );
};

export default CallToAction;
