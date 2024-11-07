import React from "react";
import "./HeroSection.css";
import { usePostData } from "../../Context/Context";

const HeroSection = () => {
  const { posts } = usePostData(); // Using `usePostData` custom hook

  return (
    <section>
      <div className="container">
        <div className="hero content">
          <h4 className="text-sm">I'm {posts.name}, a Web Developer</h4>
          <h1 className="heroHeading text-xxl">
            I will Build a Professional Website
          </h1>
          <p className="heroText">
            Professionally crafted websites to drive leads, increase sales, and
            build communities. Best website service in Karaikudi.
          </p>
          <div className="heroBtn">
            <a href="#" className="btn btnPrimary">
              Get a Quote
            </a>
            <a href="#" className="btn btnBook">
              <i className="fa-solid fa-calendar-days"></i> Book a Free
              Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
