import React from "react";
import {
  portfolio,
  websites,
  container,
  inner,
  image
} from "./Portfolio.module.scss";
import xpWebsite from "../../images/xp-website.png";

const Portfolio = () => {
  return (
    <div className={portfolio} id="portfolio">
      <h2>Our recent work</h2>
      <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
      <div className={websites}>
        <div className={container}>
          <img src={xpWebsite} alt="xp-logo" className={image} />
          <div className={inner}>
            <h3>Website for a gamer community</h3>
            <a href="https://globalxp.org/">Visit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
