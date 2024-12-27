import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <Router>
    <>
      <header className="navbar">
        <div className="navbar-top">
          <span>+971 50 7 294 904</span>
          <span>info@techtax.ae</span>
          <span>Silicon Oasis , Silicon Heights 2 Dubai</span>
        </div>
        <div className="navbar-main">
          <div className="navbar-logo">
            <img src={logo} alt="TechTax Logo" />
            <div className="company-name">
              <h1>TechTax</h1>
              <span>Accounting & Technology</span>
            </div>
          </div>

          {/* Toggle Button */}
          <button className="navbar-toggle" onClick={toggleMenu}>
            ☰
          </button>

          {/* Navbar Links */}
          <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <a href="/">HOME</a>
            <a href="/about">ABOUT US</a>
            <a href="/services">SERVICES</a>
            <a href="/contact">CONTACT US</a>
            <a href="/blogs">BLOGS</a>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/blogs" element={<Blogs/>} />

          </Routes>

          <div className="navbar-actions">
            <button className="btn-get-in-touch">GET IN TOUCH →</button>
          </div>
        </div>
      </header>

      <HeroSection />
    </>
    </Router>
  );
}

export default App;
