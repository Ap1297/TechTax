import React, { useState } from "react";
import "../stylesheet/Slider.css"; // Ensure the CSS file path is correct
import financialImage from "../assets/businessAdvisory.jpg";
import advisory from "../assets/businessSetup.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Accounting and Book Keeping",
      image: financialImage,
    },
    {
      title: "Taxation & VAT",
      image: advisory,
    },
    {
      title: "Business Consulting",
      image: financialImage, // Add more slides if needed
    },
    {
      title: "Auditing Services",
      image: advisory,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev >= slides.length - 2 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-grid">
        {/* Left Content */}
        <div className="slider-left">
          <p className="services-label">Our Services</p>
          <h1 className="services-title">Corporate Business Services</h1>
          <p className="services-description">
            Provide exceptional corporate services while maintaining the highest
            levels of integrity and professionalism.
          </p>
          <button className="download-button">Download Profile</button>
        </div>

        {/* Slider Content */}
        <div className="slider-right">
          <button className="slider-button left" onClick={handlePrev}>
            ‹
          </button>

          <div className="slider-img-container">
            {slides
              .slice(currentSlide, currentSlide + 2) // Display two slides
              .map((slide, index) => (
                <div key={index} className="slide">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                  <h2 className="slide-title">{slide.title}</h2>
                </div>
              ))}
          </div>

          <button className="slider-button right" onClick={handleNext}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
