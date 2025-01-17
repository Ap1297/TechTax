import React from 'react';
import '../stylesheet/ServiceSection.css';
import taxConsultant from "../assets/image_1.jpg";
import softwareServiceImage from "../assets/image_2.jpg";

const ServiceSection = () => {
  return (
    <div className="service-section">
      <div className="service service-left">
        <div className="service-content">
          <h2>Tax Consultation Services</h2>
          <p>
            Welcome to TechTax Accounting, your trusted partner for over a decade in Dubai! We deliver tailored solutions to meet all your business needs. Our services include precise Accounting, Bookkeeping, Taxation Consultancy, CFO Services, Business Advisory, ERP & IT Solutions, Business Setup, and Auditing Assistance.
          </p>
          <a href="/contact" className="hero-button">
              Contact Us →
            </a>
        </div>
        <div className="service-image">
          <img src={taxConsultant} alt="Tax Consultation" />
        </div>
      </div>

      <div className="service service-right">
        
        <div className="service-content">
          <h2>IT Software Services</h2>
          <p>
            Our IT software services empower businesses with innovative solutions, enabling seamless operations and improved productivity. From ERP systems to tailored software applications, we provide cutting-edge technology to meet your evolving business requirements.
          </p>
          <a href="/contact" className="hero-button">
              Contact Us →
          </a>
        </div>
        <div className="service-image">
          <img src={softwareServiceImage} alt="IT Software Services" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
