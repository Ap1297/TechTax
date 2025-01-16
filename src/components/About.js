import React from "react";
import FooterSection from "./Footer";
import "../stylesheet/About.css";
import accountServiceImg from "../assets/accountService.jpg";
import itServiceImg from "../assets/AboutUsService.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-section">
        <div className="about-overlay"></div>
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h1>About Us</h1>
              <p>
                Provide exceptional corporate services while maintaining the highest levels of integrity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section">
        {/* Accounting Services */}
        <div className="service-row">
          <div className="service-image">
            <img src={accountServiceImg} alt="Accounting Services" />
          </div>
          <div className="service-text">
            <h1>Providers of Premier Accounting Services in UAE</h1>
            <p>
              At DKK, we deliver excellence and quality financial services, utilizing both expertise and technology. Our offerings include:
            </p>
            <ul>
              <li>Accounting</li>
              <li>Bookkeeping</li>
              <li>Auditing</li>
              <li>VAT Consulting</li>
              <li>Business Setup & Advising</li>
              <li>CFO Services</li>
              <li>ERP/IT Services</li>
            </ul>
            <p>
              Our commitment to technological innovation helps clients achieve growth and prosperity by leveraging real-time solutions.
            </p>
            <a href="/contact" className="service-button">Contact Us →</a>
          </div>
        </div>

        {/* IT Services */}
        <div className="service-row">
          <div className="service-text">
            <h1>IT Solutions Provider</h1>
            <p>
              We provide cutting-edge IT services to businesses worldwide. Our offerings include:
            </p>
            <ul>
              <li>Custom Software Development</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>
              <li>Custom ERP Systems</li>
              <li>System Integration</li>
            </ul>
            <p>
              By focusing on technological innovation, we create tailored solutions to help clients achieve their digital transformation goals.
            </p>
            <a href="/contact" className="service-button">Contact Us →</a>
          </div>
          <div className="service-image">
            <img src={itServiceImg} alt="IT Services" />
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
