import React from 'react'
import { Navbar , Nav, NavbarBrand , NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
    return (
        <>
        <Navbar bg="light" variant="light" className="justify-content-between ">
        <NavbarBrand className="ml-4">Covid Army Nepal</NavbarBrand>
        <Nav className = "ml-4 mr-4">
        <NavLink >About</NavLink>
        </Nav>
        </Navbar>
        </>
    )
}

export default Header;
