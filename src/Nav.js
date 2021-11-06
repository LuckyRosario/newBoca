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
							<NavLink className="NavLink text" href="./Home.js" onClick={toggle}>
								Home
							</NavLink>
						</NavItem>
						<NavItem className=" navbar-nav me-auto">
							<NavLink className="NavLink text" href="#About" onClick={toggle}>
								About Us
							</NavLink>
						</NavItem>
						<NavItem className=" navbar-nav me-auto">
							<NavLink className="NavLink text" href="#Services" onClick={toggle}>
								Services
							</NavLink>
						</NavItem>
						<NavItem className=" navbar-nav me-auto">
							<NavLink className="NavLink text" href="#Contact" onClick={toggle}>
								Contact
							</NavLink>
						</NavItem>
						<NavItem className=" navbar-nav me-auto">
							<NavLink className="NavLink text" href="#Contact" onClick={toggle}>
								Covid-19
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		
    );
  };

  export default Navigation;