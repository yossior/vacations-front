import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import history from '../../history';

class Header extends Component {

    log(e){
        e.preventDefault();
        if (document.cookie.indexOf('token') === -1) {
            history.push('login');
        } else {
            document.cookie = 'token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            history.push('login');
        }
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <Nav>
                        <NavItem className="link-container">
                            <Link className="" to="/login" onClick={this.log}>{document.cookie.indexOf('token') === -1 ? "Login" : "Logout"}</Link>
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