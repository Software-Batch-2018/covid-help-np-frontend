import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="justify-content-between ">
        <NavLink to="/" className="ml-4">
          &#128681;Covid Help Nepal
        </NavLink>
        <Nav className="ml-4 mr-4">
          <a href="https://vaccine.mohp.gov.np">
            &#128680; Register for Vaccination
          </a>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
