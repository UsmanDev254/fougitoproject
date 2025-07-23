import React from "react";
import "../AboutUsComponent/About.css"
// import images

import AboutBanner from "../../Assests/Images/AboutImages/about-us-banner.webp";
import AboutHero from "../../Assests/Images/AboutImages/about-hero.webp";
import Mission from "../../Assests/Images/AboutImages/mission.webp";
import Vision from "../../Assests/Images/AboutImages/vision.webp";
import Featured from "../../Assests/Images/AboutImages/feature.webp";
import Founder2 from "../../Assests/Images/AboutImages/founder2.webp";
import Founder3 from "../../Assests/Images/AboutImages/founder3.webp";

function AboutUs() {
  return (
      <div
        className="container-fluid about_hero_main"
        style={{
          backgroundImage: `url(${AboutBanner})`,
          backgroundSize: "Cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container about_hero_content_main d-flex flex-column flex-lg-row">
          <div className="about_hero_first_col about_hero_content_child pe-0 pe-lg-5 col-12 col-lg-8 d-flex flex-column gap-3 justify-content-center">
            <h1 className="text-danger text-bold">Fougito App: We are here with innovative solutions for you</h1>
            <p className="banner_text">
              The journey with Fougito is more than just a business partnership;
              it's about empowering the growth of our clients' businesses. With
              user-friendly technology, data-driven insights, and strategic
              support, we equip restaurants with the tools they need to thrive
              in a competitive market.
            </p>
          </div>
          <div className="banner_second_col col-12 col-lg-4 text-center text-lg-end">
            <img src={AboutHero} alt="about_hero" className="w-100"></img>
          </div>
        </div>
      </div>
  );
}

export default AboutUs;
