import React from 'react'
import { Navbar , Nav , NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import GLogo from "../assets/images/gitlogo.png";


const Footer = () => {
    return (
        <>
        <Navbar className="footer justify-content-between ">
        <a href="https://github.com/Software-Batch-2018/covid-help-np-frontend" className="ml-4"><img src={GLogo}></img></a>
        <Nav className = "ml-4 mr-4">
           <a href="#">About-Us</a>
        </Nav>
        </Navbar>
        </>
    )
}

export default Footer;
