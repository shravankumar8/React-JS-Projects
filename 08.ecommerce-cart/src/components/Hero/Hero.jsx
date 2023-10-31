import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
import hero_image2 from "../Assets/model-png-1976.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <p>
          New collections <br />
          for everyone
        </p>

        <div className="hero-latest-button">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image2} alt="" />

        <div className="rightimage">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
