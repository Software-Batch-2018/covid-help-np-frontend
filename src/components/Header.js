import React from 'react'
import { Navbar , Nav , NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg="light" variant="light" className="justify-content-between ">
        <Link to="/" className="ml-4">Covid Army Nepal</Link>
        <Nav className = "ml-4 mr-4">
        <NavLink >About</NavLink>
        </Nav>
        </Navbar>
        </>
    )
}

export default Header;
