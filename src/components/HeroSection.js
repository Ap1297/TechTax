import React from "react";
import "../stylesheet/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Expert Taxation & IT Software Services</h1>
            <p>
              Empowering your success through personalized strategies tailored to fit your business and financial goals.
            </p>
            <a href="/contact" className="hero-button">
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
