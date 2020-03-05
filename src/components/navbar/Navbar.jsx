import React from "react";
import { Link } from "react-scroll";
import { link } from "./Navbar.module.scss";
import Logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <a href="#home">
        <img src={Logo} alt="logo" />
      </a>
      <ul>
        <li>
          <Link
            activeClass="active"
            className={link}
            to="portfolio"
            spy={true}
            smooth={true}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            className={link}
            to="about"
            spy={true}
            smooth={true}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            className={link}
            to="contact-us"
            spy={true}
            smooth={true}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
