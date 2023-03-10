import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../aniosindustries.png';

function Header() {
  return (
      <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <LinkContainer to="/" style={{color:"#1abc9c"}}>
            <Nav.Link>HOME</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/upward" style={{color:"#1abc9c"}}>
            <Nav.Link>PROJECT UPWARD</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact" style={{color:"#1abc9c"}}>
            <Nav.Link>CONTACT US</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;


