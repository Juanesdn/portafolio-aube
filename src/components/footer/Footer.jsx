import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { footerPages, link } from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <p>© 2020 Aube</p>
      <div className={footerPages}>
        <a className={link} onClick={() => scroll.scrollToTop()}>
          Home
        </a>
        <Link
          activeClass="active"
          className={link}
          to="portfolio"
          spy={true}
          smooth={true}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          className={link}
          to="about"
          spy={true}
          smooth={true}
        >
          About
        </Link>
        {/* <a href="#">Terms</a>
          <a href="#">Privacy</a> */}
      </div>
    </footer>
  );
};

export default Footer;
