import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../Navbar.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

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

        <nav className={navbar-links ${menuOpen ? "active" : ""}}>
            <a href="/">HOME</a>
            <a href="/about">ABOUT US</a>
            <a href="/services">SERVICES</a>
            <a href="/contact">CONTACT US</a>
            <a href="/blogs">BLOGS</a>
          </nav>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

        <div className="navbar-actions">
          <button className="btn-get-in-touch">GET IN TOUCH →</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;