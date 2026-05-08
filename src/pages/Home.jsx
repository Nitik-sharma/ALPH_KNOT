import React from "react";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import WhyChooseUs from "../sections/WhyChooseUs";
import HowitWorks from "../sections/HowItWorks";
import Services from "../sections/Services";
import OurIndustry from "../sections/OurIndustry";

const Home = () => {
  return (
    <>
          <Hero />
      <WhyChooseUs />
      <Services />
      <OurIndustry/>
      <HowitWorks/>
    </>
  );
};

export default Home;
