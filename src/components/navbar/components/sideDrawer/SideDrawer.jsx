import React from "react";
import { Link } from "react-scroll";
import { side_drawer, open } from "./SideDrawer.module.scss";

const SideDrawer = ({ show }) => {
  return (
    <nav className={`${side_drawer} ${show ? open : ""}`}>
      <ul>
        <li>
          <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact-us" spy={true} smooth={true}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
