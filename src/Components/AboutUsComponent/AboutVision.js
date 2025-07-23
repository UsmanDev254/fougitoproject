import { NavLink } from "react-router-dom";
import "../../Components/HomePageComponent/FougitoSolution/FougitoSolution.css";
// import "../../FougitoSolution/FougitoSolution.css"
import "../../Components/HomePageComponent/ReliableComponent/Reliable.css";

import VisionsImage from "../../Assests/Images/AboutImages/visions.webp";

function AboutMission() {
  return (
    <div className="container-fluid p-lg-0 mt-0 mt-lg-5">
      <div className="container about_vision_parent d-flex flex-column-reverse flex-lg-row pt-0 pt-lg-5 pb-5 p-lg-0">
        <div className="fougito_first_child col-12 col-xl-6 d-flex justify-content-center align-items-center pt-5 pt-xl-0">
          <div className="fougito_content">
            <h3 className="text-danger">Our Vision</h3>
            <h2>Pioneering secure and sustainable tech solutions</h2>
            <p>
              Our vision at Fougito is to lead the way in secure, sustainable,
              and cutting-edge technology solutions on a global scale. We strive
              to pave the path towards effortless operations, simplifying
              complexities, and embracing eco-friendly practices. By providing
              all-encompassing systems, like sustainable POS Systems and Fougito
              App, we envision a future free from dependencies and
              complications, where easy solutions empower businesses worldwide.
              Together, we aim to revolutionise tech excellence, shaping a
              greener and more sustainable tomorrow for generations to come.
            </p>
          </div>
        </div>
        <div className="about_second_child about_vision_img d-flex justify-content-center align-item-center col-12 col-xl-6 text-center text-lg-center ps-0 ps-lg-5">
          <img
            src={VisionsImage}
            alt="fougito_about_img"
            className="w-100"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;
