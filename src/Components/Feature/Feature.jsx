import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="boxContainer">
      <h2 className="text-sm">Service</h2>
      <h1 className="text-xxl">What I Provide?</h1>
      <div className="featureContent">
        <div className="box">
          <i className="fa-solid fa-terminal icons"></i>
          <div className="text-content">
            <h2>Web Development</h2>
            <p>
              This is a web development service, and I’ll provide the website
              for your business.
            </p>
          </div>
          <i className="fa-solid fa-arrow-right arrow"></i>
        </div>
        <div className="box">
          <i className="fa-solid fa-gauge icons"></i>
          <div className="text-content">
            <h2>SEO Optimization</h2>
            <p>
              This is an SEO optimization service to improve your website's
              visibility in search results.
            </p>
          </div>
          <i className="fa-solid fa-arrow-right arrow"></i>
        </div>
        <div className="box">
          <i className="fa-solid fa-bug icons"></i>
          <div className="text-content">
            <h2>Error Fixing</h2>
            <p>
              This is a service to fix errors and optimize the performance of
              your website.
            </p>
          </div>
          <i className="fa-solid fa-arrow-right arrow"></i>
        </div>
      </div>
    </div>
  );
};

export default Feature;
