import React, { useState } from 'react';
import '../stylesheet/Contact.css';
import contactUs from '../assets/contactUs.jpg';
import Swal from "sweetalert2";

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
    let response = await fetch("http://localhost:5000/api/contactDetails", {
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