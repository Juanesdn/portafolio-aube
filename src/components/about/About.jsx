import React from "react";
import { about } from "./About.module.scss";

const About = () => {
  return (
    <div className={about} id="about">
      <h2>Who we are</h2>
      <h3>
        #Aube Design is a StartUp that creates and Designs everything related
        with the Web. Content Design, App Design, Api, Responsive Design and
        Programming to bring every tool to the customer.
      </h3>
    </div>
  );
};

export default About;
