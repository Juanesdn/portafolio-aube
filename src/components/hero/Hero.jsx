import React from "react";
import { image } from "./Hero.module.scss";
import PeopleIcon from "../../images/people.svg";

const Hero = () => {
  return (
    <div className="row">
      <div className="column">
        <h1>You dream it, we make it</h1>
        <h4>
          Aube Design, the new Start Up that came to improve and innovate on the
          way companies leave a mark regardless the market or public that they
          want to reach.
        </h4>
        <a href="#" className="btn__outline">
          Get Started
        </a>
      </div>
      <div className="column">
        <img className={image} src={PeopleIcon} alt="people" />
      </div>
    </div>
  );
};

export default Hero;
