import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import history from '../../history';
import getCookie from '../../getCookie';

class Header extends Component {

    log(e) {
        e.preventDefault();
        if (document.cookie.indexOf('token') === -1) {
            history.push('login');
        } else {
            document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = 'isAdmin=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            history.push('login');
        }
    }

    goToVacations(e) {
        console.log(getCookie('isAdmin'));
        
        e.preventDefault();
        history.push(getCookie('isAdmin') ? 'dashboard' : 'vacations')
    }

    render() {
        console.log(getCookie('isAdmin'));

        return (
            <div>
                <Navbar color="light" light expand="md">
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <Nav>
                        <NavItem className="link-container">
                            <Link className="" to="/login" onClick={this.log}>{document.cookie.indexOf('token') === -1 ? "Login" : "Logout"}</Link>
                        </NavItem>
                        {
                            document.cookie.indexOf('token') !== -1 ? <NavItem className="link-container">
                                <Link className="link" to="/vacations" onClick={this.goToVacations}>Vacations</Link>
                            </NavItem> : null
                        }

                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default Header;