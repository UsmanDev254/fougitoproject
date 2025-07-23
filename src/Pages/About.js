import React from "react";
import HeaderWhite from "../Components/GlobalComponent/Header/WhiteBgHeader";
import AboutUs from "../Components/AboutUsComponent/AboutHero";
import AboutMission from "../Components/AboutUsComponent/AboutMission";
import AboutVision from "../Components/AboutUsComponent/AboutVision";
import AboutFeatured from "../Components/AboutUsComponent/AboutFeaturedBanner";
import ImageBox from "../Components/AboutUsComponent/AboutImageBox";
import Founder from "../Components/AboutUsComponent/Founder";

function AboutPage() {
  return (
    <>
      <HeaderWhite />
      <AboutUs />
      <div className="container p-0 px-4 pt-5 p-lg-5">
        <div className="abou_story_main">
          <div class="fougito_content about_story_content text-center">
            <h2>Our Story</h2>
            <p>
              Since 2022, Fougito has been dedicated to pioneering inventive
              solutions in the F&B and Automobile sectors. Our innovative
              offerings, such as self-ordering websites and a smart POS system
              for F&B and Job cart and spare part listings with Fougito App
              integration, are tailored to elevate operations.
            </p>
          </div>
        </div>
      </div>
      <AboutMission/>
      <AboutVision/>
      <AboutFeatured/>
      <ImageBox/>
      <Founder/>
    </>
  );
}

export default AboutPage;
