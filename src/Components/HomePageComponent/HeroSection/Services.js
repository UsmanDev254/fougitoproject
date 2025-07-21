import React from "react";
import "./Services.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Hero Section Images
import Image1 from "../../../Assests/Images/Banner-1.jpg";
import Image2 from "../../../Assests/Images/Banner-2.jpg";
import Image3 from "../../../Assests/Images/Banner-3.jpg";
import Image4 from "../../../Assests/Images/Banner-4.jpg";
import Image5 from "../../../Assests/Images/Foods.jpeg";
import Image6 from "../../../Assests/Images/Grocery.jpeg";
import Image7 from "../../../Assests/Images/header.020ad54afa2b69eb.webp";
import Image8 from "../../../Assests/Images/RealEstate.jpeg";
import Image9 from "../../../Assests/Images/Automobile.jpeg";

function Services() {
  const [bgImage, setBgImage] = useState(Image7);
  // const [bgHover, setBgHover] = useState(null);

  const HeroServices = [
    {
      Title: "Food & Beverages",
      Description:
        "Discover seamless restaurant ordering with our Fougito App and Mobile POS solutions for efficient management.",
      Link: "https://www.fougito.com/food-and-beverages",
      Background: Image5,
      Background2: Image1,
    },
    {
      Title: "Automobile",
      Description:
        "Explore a unique digital hub for car sales, spare parts, connecting buyers, and sellers effortlessly.",
      Link: "https://www.fougito.com/food-and-beverages",
      Background: Image9,
      Background2: Image2,
    },
    {
      Title: "Real Estate",
      Description: `Discover a unified platform for in-depth property listings, comparisons, trends, and visual insights with Fougito's.`,
      Link: "https://www.fougito.com/food-and-beverages",
      Background: Image8,
      Background2: Image3,
    },
    {
      Title: "Grocery",
      Description: `Grocery shopping made easy: Simplify grocery shopping for homeowners with Fougito's all-in-one platform.`,
      Link: "https://www.fougito.com/food-and-beverages",
      Background: Image6,
      Background2: Image4,
    },
  ];

  function handleHover(Background2) {
    setBgImage(Background2);
  }

  return (
    <div className="Hero-Main">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      {
        <div className="services-parent d-flex flex-column flex-lg-row h-100">
          {HeroServices.map((item, index) => (
            <div
              onMouseEnter={() => handleHover(item.Background2)}
              key={index}
              style={{ background: "url(" + item.Background + ")" }}
              className="services-child d-flex flex-column text-center justify-content-end col-12 col-lg-3 border border-opacity-25 border-white"
            >
              <div className="verticle_btn">
                <NavLink className="service_btn_1" to={item.Link}>
                  {item.Title}
                </NavLink>
              </div>
              <div className="service-child-content">
                <h2>{item.Title}</h2>
                <p>{item.Description}</p>
                <NavLink className="service_btn_2" to={item.Link}>
                  View More
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Services;
