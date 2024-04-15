import React from "react";
import arrow_icon from "../../Assets/arrow.png";
import hand_image from "../../Assets/hand_icon.png";
import hero_image from "../../Assets/hero_image.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h2>New Arrivals only</h2>
          <div>
            <div className="hand-icon">
              <p>new</p>
              <img src={hand_image} alt="handwave" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow image" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
