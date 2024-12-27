import React from "react";
import "../stylesheet/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Experience Expert Guidance for Taxation Services & IT Software Services</h1>
            <p>Empowering your success through personalized advice creating wealth strategies tailored for you and your business.</p>
            <a href="http://TaxTech/contact-us/" className="hero-button">
              Contact Us →
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;
