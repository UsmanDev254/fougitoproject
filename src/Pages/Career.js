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
import image3 from "../Assests/Images/CareerImages/work-with.webp";
import image4 from "../Assests/Images/CareerImages/bulb.webp";
import image5 from "../Assests/Images/CareerImages/hand.webp";
import image6 from "../Assests/Images/CareerImages/house.webp";
import image7 from "../Assests/Images/CareerImages/profile-icon.webp";
import image8 from "../Assests/Images/CareerImages/thrive-bg.19a4373f0b2f2f6f.webp";
import image9 from "../Assests/Images/CareerImages/learnmore_bg.5ce197fda9350329.webp";

function CareerPage() {
  const slides = [
    {
      image: image1, // ✅ just use variable, NOT wrapped in { }
    },
    {
      image: image2,
    },
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image1,
    },
    {
      image: image2,
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
          speed={3000}
          modules={[Autoplay]}
          className="mySwiper1 pt-2 pt-md-4"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 2, spaceBetween: 0 },
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
        <div className="image-block text-center p-3 p-lg-0">
          {/* <img className="w-25" src={slide.image} alt="slide_img"></img> */}
          <h1>Discover opportunities at our start-up</h1>
          <p>
            Our team at Fougito is growing fast thanks to our work in providing
            sustainable solutions through cutting-edge technology.
          </p>
        </div>
      </div>

      {/* work with us section start  */}

      <div className="container d-flex flex-column flex-lg-row p-4 p-lg-0 pt-4 pb-3 pt-lg-5 pb-lg-5">
        <div className="work_with_img col-12 col-lg-6">
          <img
            src={image3}
            className="work_with_img w-75"
            alt="work_with_img"
          ></img>
        </div>
        <div className="work_with_content col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="work_content_child pt-4 pt-lg-0">
            <h2>Work with us</h2>
            <p>
              If sustainability is what drives you, Fougito is the right place
              for you. We are looking for highly motivated individuals to join
              our team. Be a part of our community of innovators and let your
              skills contribute to sustainability and technology!
            </p>
            <p>
              We are committed to providing innovative solutions for businesses
              and customers alike.
            </p>
          </div>
        </div>
      </div>

      {/* Thrive with us section start */}
      <div className="container p-4 p-lg-0">
        <div
          className="thrive_with_us_parent text-center pt-5 pb-5"
          style={{
            backgroundImage: `url(${image8})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="thrive_us_title_main">
            <h2 className="text-danger">Thrive With Us</h2>
            <h3 className="text-secondary">
              Your best work can happen at Fougito
            </h3>
          </div>
          <div className="thrive_icon_box_parent d-flex flex-wrap m-auto">
            <div className="thrive_icon_box_child col-6 col-lg-3"> 
              <img src={image4} alt="thrive_icon" className="w-50"></img>
              <h4>Seize the opportunity</h4>
            </div>
            <div className="thrive_icon_box_child col-6 col-lg-3"> 
              <img src={image5} alt="thrive_icon" className="w-50"></img>
              <h4>We are committed to diversity</h4>
            </div>
            <div className="thrive_icon_box_child col-6 col-lg-3"> 
              <img src={image6} alt="thrive_icon" className="w-50"></img>
              <h4>We prioritize work-life balance</h4>
            </div>
            <div className="thrive_icon_box_child col-6 col-lg-3"> 
              <img src={image7} alt="thrive_icon" className="w-50"></img>
              <h4>Explore new challenges in technology</h4>
            </div>
          </div>
        </div>
      </div>

      <div>
      <h2 className="text-[24px] lg:text-[44px] font-satoshiBold text-center lg:leading-[55px]">
        Does it sound like you? <br /> Explore opportunities at Fougito
      </h2>
      <div>
        <div className="w-full bg-grayDark/10 text-center text-grayDark/40 py-10 rounded-lg mt-10 lg:mt-14">
          <h3 className="text-grayDark font-satoshiBold text-[24px] lg:text-[30px]">
            No positions available
          </h3>
          <p className="font-satoshiMedium text-zinc-700 lg:text-xl w-[95%] lg:w-[55%] mx-auto pt-1">
            Currently, there are no job openings available. Please follow our
            social media channels to stay informed about future opportunities.
          </p>
        </div>
      </div>
    </div>

    </>
  );
}

export default CareerPage;
