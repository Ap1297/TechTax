import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../stylesheet/Header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
          <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        </div>

        

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>HOME</Link>
          <Link to="/about" onClick={closeMenu}>ABOUT US</Link>
          <Link to="/services" onClick={closeMenu}>SERVICES</Link>
          <Link to="/contact" onClick={closeMenu}>CONTACT US</Link>
          <Link to="/blogs" onClick={closeMenu}>BLOGS</Link>
        </nav>

        <div className="navbar-actions">
            <a href="/contact" className="btn-get-in-touch">GET IN TOUCH →</a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
