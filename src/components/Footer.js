import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar , Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import GLogo from "../assets/images/gitlogo.png";


const Footer = () => {
    return (
        <>
        <Navbar className="footer justify-content-between ">
        <a href="https://github.com/Software-Batch-2018/covid-help-np-frontend" className="ml-4"><img src={GLogo} alt="some text"></img></a>
        <Nav className = "ml-4 mr-4">
           <Link to="/about">About-Us</Link>
        </Nav>
        </Navbar>
        </>
    )
}

export default Footer;
