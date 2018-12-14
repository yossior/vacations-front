import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <Nav>
                        <NavItem className="link-container">
                            <Link className="link" to="/login" >Login</Link>
                        </NavItem>
                        <NavItem className="link-container">
                            <Link className="link" to="/vacations" >Vacations</Link>
                        </NavItem>
                        <NavItem className="link-container">
                            <Link className="link" to="/login" >Link</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default Header;