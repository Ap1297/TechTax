import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <span className="contact-item">+971 50 7 294 904</span>
        <span className="contact-item">info@techtax.ae</span>
        <span className="contact-item">Silicon Oasis, Silicon Heights 2</span>
      </div>
      <div className="navbar-main">
        <div className="navbar-logo">
          <img src={logo} alt="TechTax Logo" />
          <div className="company-name">
            <h1>TechTax</h1>
            <span>Accounting & Technology</span>
          </div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/blogs">BLOGS</Link>
        </nav>
        <div className="navbar-actions">
          <button className="btn-get-in-touch">GET IN TOUCH →</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;