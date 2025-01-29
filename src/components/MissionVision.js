import React from "react";
import "../stylesheet/MissionVision.css";
import founder1 from "../assets/Founder1.jpg";

import founder2 from "../assets/Founder2.jpg"; // Replace with actual second founder image path

const MissionVision = () => {
  return (
    <div className="mission-vision-section">
      <div className="founders-container">
        
        <div className="founder-section">
          <div className="image-container">
            <img src={founder1} alt="Ankit Panchal" className="founder-image" />
          </div>
          <div className="description-container">
            <blockquote className="quote">
              "At TechTax, we don't just manage numbers; we create value. Our goal is to empower businesses with the tools and insights they need to thrive in an ever-evolving market."
            </blockquote>
            <h3 className="founder-name">Ankit Panchal</h3>
            <p className="founder-title">Founder & CTO, TechTax Accounting & Advisory</p>
            <p className="founder-bio">
              Mr. Ankit Panchal is the visionary Founder and Managing Director of 
              TechTax Accounting & Advisory, established in 2025. With over six 
              years of experience in Java full-stack development and DevOps, 
              Ankit has been instrumental in delivering customer-centric UI/UX solutions 
              and scalable applications across financial services, HRMS projects, and 
              Enterprise Data Management. His expertise in Java, Spring Boot, 
              Microservices, and the MEAN stack has enabled him to drive impactful 
              outcomes under tight deadlines. 
              </p>
              <p className="founder-education">
              Ankit also holds a Bachelors Of Engineering into Information Technology from Mumbai University.
              Since moving to the UAE in 2024, he has played key leadership roles in renowned companies, leveraging his 
              technical and financial acumen to reshape the industry landscape.
              </p>
            
          </div>
        </div>

        <div className="founder-section">
          <div className="image-container">
            <img src={founder2} alt="Darshan Mansuriya" className="founder-image" />
          </div>
          <div className="description-container">
            <blockquote className="quote">
            "Innovation and integrity are the cornerstones of TechTax. Our commitment is to deliver excellence in financial and technological solutions."
            </blockquote>
            <h3 className="founder-name">Darshan Mansuriya</h3>
            <p className="founder-title">Founder & Managing Director, TechTax Accounting & Advisory</p>
            <p className="founder-bio">
            Darshan Mansuriya is the Co-Founder of TechTax Accounting & Advisory. With extensive expertise in finance and business strategy, he has played a crucial role in shaping the company’s direction. 
              He has over 6+ years of experience in financial management, business consulting, and digital transformation, helping clients navigate complex financial landscapes with ease.
            
            </p>
            <p className="founder-education">
              He is a Chartered Accountant from The Institute of Chartered Accountants of India and holds a Master's in Commerce from the University of Mumbai. 
              His academic foundation in business and finance strengthens his expertise in taxation and financial management.
            </p>
          </div>
        </div>
      </div>

      <div className="mission-vision-content">
        <h2 className="section-title">Our Mission & Vision</h2>
        <p className="mission">
          <strong>Our Mission</strong> is to provide bespoke financial services
          to our vast clientele and to continue to meet their needs now and in
          the future to ensure mutual long-term success. Additionally, we
          strive to respect our team and clients as individuals & professionals,
          to provide a dynamic, free environment in order to cultivate innovation, 
          creativity and growth amongst our staff to foster their development & success, 
          both in their professional & personal lives.
        </p>
        <p className="vision">
          <strong>Our Vision</strong> is to be recognized as one of UAE’s
          premier financial service institutions, known for our world-class
          service & innovation while also fostering a work environment known
          for encouraging growth amongst our team in order to succeed in the
          industry.
        </p>

        <div className="stats">
          <div className="stat-item"><span className="stat-value">200+</span><br/><span className="stat-label">Satisfied Clients</span></div>
          <div className="stat-item"><span className="stat-value">100%</span><br/><span className="stat-label">Affordable Fee</span></div>
          <div className="stat-item"><span className="stat-value">95%</span><br/><span className="stat-label">Accuracy & On Time</span></div>
          <div className="stat-item"><span className="stat-value">99%</span><br/><span className="stat-label">Excellent Service</span></div>
          <div className="stat-item"><span className="stat-value">99%</span><br/><span className="stat-label">Transparency</span></div>
          <div className="stat-item"><span className="stat-value">95%</span><br/><span className="stat-label">Growth Guaranteed</span></div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
