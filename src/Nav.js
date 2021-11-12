import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import logo from "./logo.png";
import './Nav.css';
 
const Navigation = props => {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!isOpen);

	return (
      <Navbar className="fixed-top" expand="md">
				<NavbarBrand>
					<NavLink to="/">
						{" "}
						<img className="rounded-circle" src={ logo } alt="logo"/>
					</NavLink>
				</NavbarBrand>
				<NavbarToggler onClick={toggle}>
					{/* Close mark */}
					<div id="close-icon" className={isOpen ? "open" : ""}>
						<span />
						<span />
						<span />
					</div>
					{/* close mark ends */}
				</NavbarToggler>
				<Collapse isOpen={isOpen} navbar>
					<Nav className="container-fluid link" navbar>
						<NavItem className=" navbar-nav me-auto">
							<a className="NavLink text" href="#Home" >
								Home
							</a>
						</NavItem>
						<NavItem className=" navbar-nav me-auto">
							<a className="NavLink text" href="#About">
								About Us
							</a>
						</NavItem>
						<NavItem className=" navbar-nav me-auto">
							<NavLink className="NavLink text" href="#Services">
								Services
							</NavLink>
						</NavItem>
						<NavItem className=" navbar-nav me-auto">
							<NavLink className="NavLink text" href="#Contact">
								Contact
							</NavLink>
						</NavItem>
						
					</Nav>
				</Collapse>
			</Navbar>
		
    );
  };

  export default Navigation;