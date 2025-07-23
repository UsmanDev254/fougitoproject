import "../HomePageComponent/FougitoSolution/FougitoSolution.css";
import "../HomePageComponent/FougitoApp/FougitoApp.css";

import AppBackgroundImage from "../../Assests/Images/pos_bg.661adca781cdd1b8.webp";
import Founder2 from "../../Assests/Images/AboutImages/founder2.webp";
import Founder3 from "../../Assests/Images/AboutImages/founder3.webp";

function Founder() {
  return (
    <div
      style={{
        background: `url(${AppBackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="container-fluid p-lg-0"
    >
      <div className="custom_container app_parent pt-5 pb-5">
        <div className="aurthor_box_parent d-flex flex-column justify-content-center align-items-center text-center m-auto gap-4 pt-xl-0">
          <div className="fougito_content app_content">
            <h2>
              Our Founders
            </h2>
          </div>
          <div className="founder_box_main d-flex flex-column flex-lg-row">
            <div className="founder_box_child col-12 col-lg-6 d-flex flex-column gap-2 justify-content-center align-items-center">
              <img src={Founder2} alt="image_box" className="aurthor_box"></img>
              <h4>Nouman Amin</h4>
              <p>Chief Technology Officer</p>
            </div>
            <div className="founder_box_child col-12 col-lg-6 d-flex flex-column gap-2 justify-content-center align-items-center">
              <img src={Founder3} alt="image_box" className="aurthor_box"></img>
              <h4>Moza Al Gergawi</h4>
              <p>Chairwomen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
