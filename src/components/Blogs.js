import React from "react";
import FooterSection from "./Footer";
import '../stylesheet/Blogs.css';


const Blogs = () => {
  return (
    <div>
      <section className="contact-hero-section">
      <div className="contact-hero-overlay"></div>
      <div className="contact-hero-container">
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <h1>Blog</h1>
            <p>
            Provide exceptional corporate services while maintaining the highest levels of integrity and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>

      <FooterSection/>
    </div>
  );
};

export default Blogs;
