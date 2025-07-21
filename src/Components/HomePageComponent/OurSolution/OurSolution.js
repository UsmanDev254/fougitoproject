import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../OurSolution/OurSolution.css";

// import images for this section

import FougitoPos from "../../Assests/Images/pos.webp";
import FougitoAutomobile from "../../Assests/Images/auto.webp";
import FougitoOnline from "../../Assests/Images/online.webp";
import FougitoMarkeet from "../../Assests/Images/market.webp";
import FougitoSquad from "../../Assests/Images/squad.webp";
import FougitoProperty from "../../Assests/Images/properties.webp";

function OurSoluton() {
  return (
    <Container className="custom_container">
      <div className="fougito_content our_solution_heading text-start text-lg-center">
        <h2>Our Solutions</h2>
      </div>
      <div className="our_solution_parent p-0 p-lg-5 d-flex flex-column flex-lg-row gap-2">
        <div className="our_solution_child_main our_solution_first_child d-flex flex-column flex-lg-row col-12 col-lg-6 gap-2 gap-lg-0">
          <NavLink
            className="our_solution_inner_child our_solution_inner_child_1 col-12 col-lg-6"
            to={"#"}
            style={{
              backgroundImage: `url(${FougitoPos})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="our_solution_inner_child_content">
              <h3>Fougito POS</h3>
              <p>
                First mobile POS—QR payments, digital receipts, web dashboard
                and more
              </p>
            </div>
          </NavLink>
          <div className="our_solution_inner_child_2 d-flex flex-column gap-2 col-12 col-lg-6 ps-lg-2">
            <NavLink
              className="our_solution_mini_child_1"
              style={{
                backgroundImage: `url(${FougitoAutomobile})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="our_solution_inner_child our_solution_inner_child_1">
                <div className="our_solution_inner_child_content">
                  <h3>Fougito Automobile</h3>
                  <p>A comprehensive platform for all your automotive needs</p>
                </div>
              </div>
            </NavLink>
            <NavLink
            className="our_solution_mini_child_2"
              style={{
                backgroundImage: `url(${FougitoOnline})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="our_solution_inner_child our_solution_inner_child_1">
                <div className="our_solution_inner_child_content">
                  <h3>Fougito Online Ordering Website</h3>
                  <p>Your custom online ordering platform, ready in 48 hours</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="our_solution_child_main our_solution_first_child d-flex flex-column-reverse gap-2 col-12 col-lg-6">
          <NavLink
            className="our_solution_inner_child our_solution_inner_child_3 col-12"
            to={"#"}
            style={{
              backgroundImage: `url(${FougitoMarkeet})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="our_solution_inner_child_content">
              <h3>Fougito Properties</h3>
              <p>
                Revolutionized property transactions with vast sources and easy comparisons
              </p>
            </div>
          </NavLink>
          <div className="our_solution_inner_child_4 d-flex flex-column flex-lg-row gap-2 col-12">
            <NavLink
              className="our_solution_mini_child_1"
              style={{
                backgroundImage: `url(${FougitoSquad})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="our_solution_inner_child our_solution_inner_child_1">
                <div className="our_solution_inner_child_content">
                  <h3>Fougito Marketplace</h3>
                  <p>Simplify procurement for restaurants and suppliers with our digital platform</p>
                </div>
              </div>
            </NavLink>
            <NavLink
            className="our_solution_mini_child_2"
              style={{
                backgroundImage: `url(${FougitoProperty})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="our_solution_inner_child our_solution_inner_child_1">
                <div className="our_solution_inner_child_content">
                  <h3>Fougito Squad</h3>
                  <p>Streamline restaurant delivery with our dedicated riders app</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        {/* <div className="our_solution_child_main our_solution_second_child col-6"></div> */}
      </div>
    </Container>
  );
}

export default OurSoluton;
