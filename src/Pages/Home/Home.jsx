import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Feature from "../../Components/Feature/Feature";
import Context from "../../Context/Context";
// import CTA from "../../Components/CTA/CTA";
// import Benefits from "../../Components/Benefits/Benefits";

const Home = () => {
  return (
    <>
      <Context>
        <HeroSection />
        <Feature />
        {/* <Benefits /> */}
        {/* <CTA /> */}
      </Context>
    </>
  );
};

export default Home;
