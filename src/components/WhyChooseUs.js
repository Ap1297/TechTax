import React from "react";
import "../stylesheet/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-container">
      <h2 className="why-heading">Why Choose Us</h2>
      <p className="why-subheading">
        Our Mission Is to Build the Foundation of a Secure Future
      </p>
      <div className="cards-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="card-icon">{item.icon}</div>
            <h3 className="card-value">{item.value}</h3>
            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const data = [
  { icon: "👤", value: "200+", text: "Satisfied Clients" },
  { icon: "💰", value: "100%", text: "Affordable Fee" },
  { icon: "⏰", value: "95%", text: "Accuracy & On Time" },
  { icon: "📦", value: "99%", text: "Excellent Service" },
  { icon: "🔍", value: "99%", text: "Transparency" },
  { icon: "📈", value: "95%", text: "Growth Guaranteed" },
];

export default WhyChooseUs;
