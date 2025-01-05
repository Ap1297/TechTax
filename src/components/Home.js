import React from "react";
import HeroSection from "./HeroSection"; 
import ServiceSection from "./ServiceSection";
import FooterSection from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import ContactUs from "./Contact";

const Home = () => {
  return (
    <div>
      <HeroSection /> 
      <ServiceSection />
      <WhyChooseUs/>
      <ContactUs/>
      <FooterSection/>
    </div>
  );
};

export default Home;
