import React from 'react'
import { Navbar , Nav , NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar className="justify-content-between ">
        <Link to="/" className="ml-4">Covid Help Nepal</Link>
        <Nav className = "ml-4 mr-4">
           <a href="https://vaccine.mohp.gov.np">&#128680; Register for Vaccination</a>
        </Nav>
        </Navbar>
        </>
    )
}

export default Header;
