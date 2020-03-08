import React from "react";
import { Link } from "react-scroll";
import {
  navbar,
  navbar__navigation,
  navbar__logo,
  navbar__navigationItems,
  spacer,
  navbar__toggle
} from "./Navbar.module.scss";
import { TogglerButton } from "./components";
import Logo from "../../images/logo.svg";

const Navbar = ({ drawerClickHandler }) => {
  return (
    <header className={navbar}>
      <nav className={navbar__navigation}>
        <div className={navbar__toggle}>
          <TogglerButton click={drawerClickHandler} />
        </div>
        <div className={navbar__logo}>
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className={spacer} />
        <div className={navbar__navigationItems}>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact-us"
                spy={true}
                smooth={true}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
