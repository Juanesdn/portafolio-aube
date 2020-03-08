import React from "react";
import { Link } from "react-scroll";

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

        <Link
          activeClass="active"
          className="btn__outline"
          to="contact-us"
          spy={true}
          smooth={true}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
