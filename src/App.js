import React from "react";
import "./App.css";
import logo from "./logo.png"; // Replace with TechTax logo

function App() {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <span>+971 50 7 294 904</span>
        <span>info@techtax.ae</span>
        <span>Office No. M-45 Aswar Building Business Bay, PO Box: 91929</span>
      </div>
      <div className="navbar-main">
      <div className="navbar-logo">
        <img src={logo} alt="TechTax Logo" />
        <div className="company-name">
          <h1>TechTax</h1>
          <span>Accounting & Technology</span>
        </div>
      </div>

        <nav className="navbar-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#services">SERVICES</a>
          <a href="#contact">CONTACT US</a>
          <a href="#blogs">BLOGS</a>
        </nav>
        <div className="navbar-actions">
          <button className="btn-get-in-touch">GET IN TOUCH →</button>
        </div>
      </div>
    </header>
  );
}

export default App;
