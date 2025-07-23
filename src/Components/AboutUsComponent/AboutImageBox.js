import "../AboutUsComponent/About.css"

import Icon1 from "../../Assests/Images/AboutImages/Sustainability.png";
import Icon2 from "../../Assests/Images/AboutImages/Customer.png";
import Icon3 from "../../Assests/Images/AboutImages/Seamless-Integration.png";
import Icon4 from "../../Assests/Images/AboutImages/Empowering-Growth.png";

function ImageBox() {
  return (
    <div className="container image_box_parent mt-5 p-4 pt-lg-5 pb-lg-5">
      <div className="image_box_content_main d-flex flex-wrap justify-content-between gap-4">
        <div className="image_box_child rounded-3 d-flex flex-column gap-2">
          <img src={Icon1} alt="image_box" className="image_box"></img>
          <h3>Sustainability-First Approach</h3>
          <p>
            At Fougito, we deeply value sustainability as a core principle. We
            are committed to integrating eco-friendly practices into every
            aspect of our solutions.
          </p>
        </div>
        <div className="image_box_child rounded-3 d-flex flex-column gap-2">
          <img src={Icon2} alt="image_box" className="image_box"></img>
          <h3>Customer-Centric Innovation</h3>
          <p>
            Customer satisfaction is at the heart of everything we do. We
            believe in continuously innovating and evolving our platform to meet
            the unique needs and expectations of our clients.
          </p>
        </div>
        <div className="image_box_child rounded-3 d-flex flex-column gap-2">
          <img src={Icon3} alt="image_box" className="image_box"></img>
          <h3>Seamless Integration</h3>
          <p>
            Our solutions are designed with the aim of streamlining operations,
            reducing complexities, and integrating all essential services under
            one cohesive platform.
          </p>
        </div>
        <div className="image_box_child rounded-3 d-flex flex-column gap-2">
          <img src={Icon4} alt="image_box" className="image_box"></img>
          <h3>Empowering Growth</h3>
          <p>
            We aim to equip restaurants with the tools they need to scale and
            thrive in a competitive market. We take pride in being your trusted
            partner on the journey to prosperity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageBox;
