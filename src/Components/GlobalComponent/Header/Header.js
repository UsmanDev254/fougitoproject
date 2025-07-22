import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect } from 'react';

import Logo from "../../../Assests/Images/logo_bw.svg";
import "../Header/Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBolt } from "@fortawesome/free-solid-svg-icons";

function Header() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) { // Adjust 100 based on navbar height
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const expand = false;

  return (
    <header className="App-header">
      <Navbar
        expand={expand}
        className={`${isSticky ? 'sticky' : ''} navbar_main bg-body-tertiary navbar-dark shadow-none`}
        style={{background: isSticky ? '#000': ''}}
        // bg="dark"
        // data-bs-theme="dark"
      >
        <Container className="d-flex">
          <div className="logo_main">
            <Navbar.Brand href="#">
              <img className="site_logo" src={Logo} alt="logo"></img>
            </Navbar.Brand>
          </div>

          {/* Right Side Buttons (Visible in navbar) */}
          <div className="nav_toggle_main d-flex align-items-center justify-content-end ms-auto gap-0 gap-lg-3">
            <Button variant="outline-light bg-white text-black">
              Book a Demo
            </Button>
            <Navbar.Toggle
              className="text-white border border-0 shadow-none"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
          </div>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            bg="dark"
            data-bs-theme="dark"
            className="custom-offcanvas-width"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                className="fs-2"
              >
                <img className="site_logo" src={Logo} alt="logo"></img>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5 fs-4">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                <Nav.Link href="#action3">Contact Us</Nav.Link>
                <Nav.Link href="#action4">Blogs</Nav.Link>
                <Nav.Link href="#action5">Careers</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
