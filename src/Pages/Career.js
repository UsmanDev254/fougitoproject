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
          
          <div className="w-[90%] lg:w-[70%] mx-auto flex flex-row flex-wrap justify-between mt-10">
            {/* Item 1 */}
            <div className="w-[48%] lg:w-[24%] flex flex-col items-center">
              <img
                src={image4}
                alt="Seize the opportunity"
                loading="lazy"
                className="w-20 lg:w-24 hover:scale-110 transition-all ease-in-out duration-500"
              />
              {/* Desktop text */}
              <p className="font-bold text-center pt-2 text-gray-800 text-[18px] lg:text-xl hidden lg:block">
                Seize the <br /> opportunity
              </p>
              {/* Mobile text */}
              <p className="font-bold text-center text-gray-800 text-[18px] lg:hidden lg:text-xl">
                Seize the opportunity
              </p>
            </div>

            {/* Item 2 */}
            <div className="w-[48%] lg:w-[24%] flex flex-col items-center">
              <img
                src={image5}
                alt="Committed to diversity"
                loading="lazy"
                className="w-20 lg:w-24 hover:scale-110 transition-all ease-in-out duration-500"
              />
              <p className="font-bold text-center pt-2 text-gray-800 text-[18px] hidden lg:block lg:text-xl">
                We are committed <br /> to diversity
              </p>
              <p className="font-bold text-center text-gray-800 text-[18px] lg:hidden lg:text-xl">
                We are committed to diversity
              </p>
            </div>

            {/* Item 3 */}
            <div className="w-[48%] lg:w-[24%] flex flex-col items-center mt-6 lg:mt-0">
              <img
                src={image6}
                alt="Work-life balance"
                loading="lazy"
                className="w-20 lg:w-24 hover:scale-110 transition-all ease-in-out duration-500"
              />
              <p className="font-bold text-center pt-2 text-gray-800 text-[18px] hidden lg:block lg:text-xl">
                We prioritize <br /> work-life balance
              </p>
              <p className="font-bold text-center text-gray-800 text-[18px] lg:hidden lg:text-xl">
                We prioritize work-life balance
              </p>
            </div>

            {/* Item 4 */}
            <div className="w-[48%] lg:w-[24%] flex flex-col items-center mt-6 lg:mt-0">
              <img
                src={image7}
                alt="Explore new challenges"
                loading="lazy"
                className="w-20 lg:w-24 hover:scale-110 transition-all ease-in-out duration-500"
              />
              <p className="font-bold text-center pt-2 text-gray-800 text-[18px] hidden lg:block lg:text-xl">
                Explore new <br /> challenges in technology
              </p>
              <p className="font-bold text-center text-gray-800 text-[18px] lg:hidden lg:text-xl">
                Explore new challenges in technology
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Does it sound section start */}

      <div className="container p-4 p-lg-0 py-5">
        <h2 className="text-[24px] lg:text-[44px] font-bold text-center lg:leading-[55px]">
          Does it sound like you? <br /> Explore opportunities at Fougito
        </h2>

        <div className="w-full bg-gray-200 text-center text-gray-500 py-10 rounded-lg mt-10 lg:mt-14">
          <h3 className="text-gray-800 font-bold text-[24px] lg:text-[30px]">
            No positions available
          </h3>
          <p className="text-gray-700 text-base lg:text-xl w-[95%] lg:w-[55%] mx-auto pt-1">
            Currently, there are no job openings available. Please follow our
            social media channels to stay informed about future opportunities.
          </p>
        </div>
      </div>

      {/* Fougito is an equal opportunity employer start */}

      <div
        className="container p-4 p-lg-0 py-8 mt-0 mt-lg-5 bg-learnMob lg:bg-learn bg-no-repeat bg-cover rounded-md shadow-md mx-auto"
        style={{ backgroundImage: `url(${image9})` }}
      >
        <div className="text-center py-2">
          <h4 className="text-[24px] lg:text-[43px] lg:leading-[53px] text-gray-800 font-bold">
            Fougito is an equal opportunity employer
          </h4>
          <p className="text-zinc-700 lg:text-xl font-medium pt-4 pb-4 mx-auto">
            Can’t find what you’re looking for? Send in your CV at
            <br className="hidden lg:block" />
            <span className="text-red-600 cursor-pointer">
              careers@fougito.com
            </span>{" "}
            and we’ll reach out if anything opens up!
          </p>
        </div>
      </div>
    </>
  );
}

export default CareerPage;
