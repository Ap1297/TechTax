import React from "react";
import Slider from "react-slick"; // React Slick for the carousel
import "../stylesheet/CustomSlider.css"; // Add custom styles here
import businessAdvisoryImg from "../assets/businessAdvisory.jpg";
import businessSetupImg from "../assets/businessSetup.jpg";
import financialPlanningImg from "../assets/financialPlanning.jpg";

const CustomSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show two slides at a time
        slidesToScroll: 1,
        arrows: true,
      };
    
      return (
        <div className="business-services-container">
          {/* Left content */}
          <div className="left-content">
            <h6 className="section-title">OUR SERVICES</h6>
            <h2 className="main-heading">Corporate Business Services</h2>
            <p className="description">
              Provide exceptional corporate services while maintaining the highest
              levels of integrity and professionalism.
            </p>
            <a href="/contact" className="slider-button">Download Profile →</a>
          </div>
    
          {/* Slider */}
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slide">
                <img src={businessAdvisoryImg} alt="Business Advisory" className="slide-img" />
                <div className="overlay">Business Advisory</div>
              </div>
              <div className="slide">
                <img src={businessSetupImg} alt="Business Setup" className="slide-img" />
                <div className="overlay">Business Setup</div>
              </div>
              <div className="slide">
                <img src={financialPlanningImg} alt="IT Services" className="slide-img" />
                <div className="overlay">IT Services</div>
              </div>
            </Slider>
          </div>
        </div>
      );
};

export default CustomSlider;
