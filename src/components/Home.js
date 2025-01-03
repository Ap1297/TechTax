import React from "react";
import HeroSection from "./HeroSection"; 
import ServiceSection from "./ServiceSection";
import FooterSection from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection /> 
      <ServiceSection />
      <FooterSection/>
    </div>
  );
};

export default Home;
