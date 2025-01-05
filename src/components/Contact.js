import React, { useState } from 'react';
import '../stylesheet/Contact.css';
import contactUs from '../assets/contactUs.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Accounting & Book Keeping',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
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
  );
}
  export default Contact;