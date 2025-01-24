import React, { useState } from 'react';
import Slider from "react-slick"; // Import react-slick for carousel
import FooterSection from "./Footer";
import "../stylesheet/About.css";
import accountServiceImg from "../assets/accountService.jpg";
import itServiceImg from "../assets/AboutUsService.jpg";
import contactUs from '../assets/contactUs.jpg';
import Swal from "sweetalert2";
import CustomSlider from "./CustomSlider";

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Accounting & Book Keeping',
    message: ''
  });

  const [status, setStatus] = useState("Submit");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, message, service } = e.target.elements;
    let details = {
      fullName: name.value,
      email: email.value,
      mobileNo: phone.value,
      message: message.value,
      service: service.value,
    };
    let response = await fetch("https://techtax.onrender.com/api/contactDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    if (result != "") {
      Swal.fire({
        title: "Success!",
        text: result,
        icon: "success"
      });
      // Reset form values
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message. Please try again later.",
        icon: "error",
      });
    }
    console.log('Form Data:', formData);
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
      <CustomSlider/>

      {/* Contact Form */}
      <div className="contact-form">
        <div className="form-image">
          <img src={contactUs} alt="Businessman" />
        </div>
        <div className="form-container">
          <h2>Ready to Get Started?</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Accounting & Book Keeping</option>
                <option>Taxation & VAT</option>
                <option>Business Advisory</option>
                <option>ERP & IT Services</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="submit-btn">
              SUBMIT NOW →
            </button>
          </form>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default About;
