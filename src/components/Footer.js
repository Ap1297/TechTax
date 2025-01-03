import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import '../stylesheet/Footer.css';
import logo from "../logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="TechTax Logo" />
        <p>
          Providing exceptional corporate services while maintaining the highest
          levels of integrity and professionalism.
        </p>
      </div>

      <div className="footer-social">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedinIn />
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Accounting Services</li>
            <li>Business Advisory</li>
            <li>CFO Services</li>
            <li>ERP & IT Services</li>
            <li>Taxation & VAT</li>
            <li>UAE Business Setup</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Industries</h4>
          <ul>
            <li>Automotive</li>
            <li>Real Estate</li>
            <li>Corporate</li>
            <li>Healthcare</li>
            <li>Technology</li>
            <li>Retail</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Details</h4>
          <ul>
            <li>Office No. Silicon Heights 2, Silicon Oasis, Dubai</li>
            <li>+971 50 7 294 904</li>
            <li>info@techtax.ae</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2025. All Rights Reserved by TechTax.</p>
      </div>
    </footer>
  );
}

export default Footer;
