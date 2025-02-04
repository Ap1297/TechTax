import React, { useState } from 'react';
import '../stylesheet/Contact.css';
import contactUs from '../assets/contactUs.jpg';
import Swal from "sweetalert2";
import FooterSection from "./Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
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
    const {name, email, phone, message, service} = e.target.elements;
    let details = {
      fullName : name.value,
      email : email.value,
      mobileNo : phone.value,
      message : message.value,
      service : service.value,
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
    if (result!= "") {
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

  return (
    <div>

      <section className="contact-hero-section">
            <div className="contact-hero-overlay"></div>
            <div className="contact-hero-container">
              <div className="contact-hero-content">
                <div className="contact-hero-text">
                  <h1>Contact Us</h1>
                  <p>
                  Provide exceptional corporate services while maintaining the highest levels of integrity and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </section>

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
          <div className="map-container">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.401725778839!2d55.37288807605273!3d25.12210578473684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f643f2cffffff%3A0xb811338ac5abae81!2sSilicon%20Heights%20II!5e0!3m2!1sen!2sae!4v1736770979006!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
      </div>
      <div className="contact-details">
        <div className="office-info">
          <h3>
            <FaMapMarkerAlt className="icon" /> Dubai Office
          </h3>
          <p>Silicon Oasis, Silicon Heights 2, Dubai</p>
          <p><strong>Office:</strong> (05) 07294904</p>
        </div>
        <div className="office-info">
          <h3>
            <FaMapMarkerAlt className="icon" /> India Office
          </h3>
          <p>Silicon Oasis, Silicon Heights 2</p>
          <p><strong><FaPhone className="icon" /> Phone:</strong> +971 507294904</p>
          <p><strong><FaEnvelope className="icon" /> For Inquiry:</strong> info@techtax.ae</p>
        </div>
      </div>
    <div><FooterSection/></div>
  </div>
  );
}
  export default Contact;