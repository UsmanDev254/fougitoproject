import React from "react";
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, FontAwesomeIcon } from 'mdb-react-ui-kit';
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitch,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import ColorLogo from "../../Assests/Images/logo.svg";

function BotomFooter() {
  return (
    <>
      <Container bgColor="light" className="text-start text-md-start pe-4 ps-4 pt-0 pe-lg-0 ps-lg-0 pt-lg-5 mt-5">
        <Row className="mt-3">
          <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
            <div>
              <img
                src={ColorLogo}
                alt="color_logo"
                className="footer_logo mb-2"
              ></img>
              <p>
                Future-Ready POS Solutions: Fougito's Tech Empowers Your
                Business.
              </p>
            </div>
            <div className="d-flex social_icons">
              <NavLink to="#" className="me-4 footer_menu fs-4">
                <FontAwesomeIcon color="secondary" icon={faFacebook} />
              </NavLink>
              <NavLink to="#" className="me-4 footer_menu fs-4">
                <FontAwesomeIcon color="secondary" icon={faTwitch} />
              </NavLink>
              <NavLink to="" className="me-4 footer_menu fs-4">
                <FontAwesomeIcon color="secondary" icon={faLinkedin} />
              </NavLink>
              <NavLink to="" className="me-4 footer_menu fs-4">
                <FontAwesomeIcon color="secondary" icon={faGithub} />
              </NavLink>
            </div>
          </Col>

          <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Solutions</h5>
            <p>
              <NavLink to="#!" className="footer_menu">
                Fougito Food
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="footer_menu">
                Fougito Deliver
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="footer_menu">
                Fougito POS
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="footer_menu">
                Fougito Auto
              </NavLink>
            </p>
          </Col>

          <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Company</h5>
            <p>
              <NavLink to="#!" className="footer_menu">
                About us
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="footer_menu">
                Careers
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="footer_menu">
                Sustainability
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="footer_menu">
                Blogs
              </NavLink>
            </p>
          </Col>

          <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
            <p>i8 Markaz, Islamabad, Pakistan</p>
            <p>
              <a
                href="mailto:usmanali33474@gmail.com"
                className="me-3 text-decoration-none"
              >
                usmanali33474.com
              </a>
            </p>
            <p>
              <a href="tel:+923087246381" className="me-3 text-decoration-none">
                +92 308-7246381
              </a>
            </p>
            <p>
              <a href="tel:+923156365067" className="me-3 text-decoration-none">
                +92 315-6365067
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <div
        className="text-center p-4 fw-bold"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Fougito © 2025. Developed by Usman Ali
      </div>
    </>
  );
}

export default BotomFooter;
