import React from "react";
import "./Hero.css";

import HeroBannerImage from "../../assests/image/banner.png";

const Hero = () => {

  const handleShowExcercise = ()=>{
    window.scrollTo(0, 1400);
  }
  return (
    <div className="container-fluid hero-wrapper">
      <div className="container hero-section">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="hero-banner-text">
              <p>Fitness Club</p>
              <p className="slogan">
                Sweat, Smile <br/> And Repeat
              </p>
              <p>Check out most effective exercises</p>
              <button onClick={handleShowExcercise}>Explore Exercises</button>
            </div>
          </div>
          <div className="hero-banner-big-text">
            <p>Fit India Hit India</p>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="hero-banner-img">
              <img src={HeroBannerImage} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
