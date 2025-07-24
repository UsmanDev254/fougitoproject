import HeaderWhite from "../Components/GlobalComponent/Header/WhiteBgHeader";

// HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Assests/Styles/Style.css"; // For custom styling

import image1 from "../Assests/Images/Banner-1.jpg";
import image2 from "../Assests/Images/Banner-2.jpg";

function CareerPage() {
  const slides = [
    {
      image: image1, // ✅ just use variable, NOT wrapped in { }
      heading: "Your Gateway to Excellence",
      subText: "Join the best team to grow your career.",
    },
    {
      image: image2,
      heading: "Innovate with Us",
      subText: "Build your future with Fougito.",
    },
    {
      image: image1,
      heading: "Innovate with Us",
      subText: "Build your future with Fougito.",
    },
    {
      image: image2,
      heading: "Innovate with Us",
      subText: "Build your future with Fougito.",
    },
    {
      image: image1,
      heading: "Innovate with Us",
      subText: "Build your future with Fougito.",
    },
  ];

  return (
    <>
      <HeaderWhite />
      <div className="swiper_parent">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 0, // Adjusted for readability
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay]}
          className="mySwiper1 pt-2 pt-md-4"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 0 },
            1200: { slidesPerView: 3, spaceBetween: 0 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide mt-5 pt-5"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="overlay"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="image-block text-center">
          {/* <img className="w-25" src={slide.image} alt="slide_img"></img> */}
          <h1>Discover opportunities at our start-up</h1>
          <p>
            Our team at Fougito is growing fast thanks to our work in providing
            sustainable solutions through cutting-edge technology.
          </p>
        </div>
      </div>
    </>
  );
}

export default CareerPage;
