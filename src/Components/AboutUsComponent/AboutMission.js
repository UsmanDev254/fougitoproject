import { NavLink } from "react-router-dom";
import "../../Components/HomePageComponent/FougitoSolution/FougitoSolution.css";
// import "../../FougitoSolution/FougitoSolution.css"
import "../../Components/HomePageComponent/ReliableComponent/Reliable.css";

import MissionImage from "../../Assests/Images/AboutImages/mission.webp";

function AboutMission() {
  return (
    <div className="container-fluid p-lg-0 mt-0 mt-lg-5">
      <div className="container about_mission_parent d-flex flex-column flex-lg-row pt-5 pb-5 p-lg-0">
        <div className="about_second_child about_mission_img d-flex justify-content-center align-item-center col-12 col-xl-6 text-center text-lg-center pe-0 pe-lg-5">
          <img
            src={MissionImage}
            alt="fougito_about_img"
            className="w-100"
          ></img>
        </div>
        <div className="fougito_first_child col-12 col-xl-6 d-flex justify-content-center align-items-center pt-4 pt-xl-0">
          <div className="fougito_content">
            <h3 className="text-danger">Our Mission</h3>
            <h2>
              Empowering<br></br>tomorrow sustainably
            </h2>
            <p>
              At Fougito, we are committed to simplifying our technologies to
              bring about sustainability and reliability in businesses. For
              restaurant owners, we an easy-to-use, dependable Fougito App and
              POS system that encourages sustainability by limiting paper usage.
              Our goal is to empower businesses for a greener future, fostering
              eco-friendly practices and ensuring accessibility for all.
            </p>
            <div className="mt-4">
              <NavLink className="service_btn_2" to="/contact">
                Get in touch
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;
