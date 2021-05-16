import React from 'react'
import { Navbar , Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
const Header = () => {
    return (
        <>
        <Navbar className="justify-content-between headbar">
        <Link to="/" className="ml-4"><img src={logo} alt="logo" className="img-class"></img></Link>
        <Nav className = "ml-4 mr-4">
           <a href="https://vaccine.mohp.gov.np">&#128680; Register for Vaccination</a>
        </Nav>
        </Navbar>
        </>
    )
}

export default Header;
