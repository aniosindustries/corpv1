import React, {useContext} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "../context/UserContext";
import axios from 'axios';
import domain from "../util/domain";

function Header() {
  const {user, getUser} = useContext(UserContext);
  async function logOut() {
    await axios.get(`${domain}/auth/logOut`);
    await getUser();
}
  return (
    <Navbar collapseOnSelect expand="lg">     
        <Navbar.Brand style={{color: "whitesmoke", paddingLeft: 15}}>INSPIRED BY THE PRESENT, INNOVATING THE FUTURE</Navbar.Brand>      
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <LinkContainer to="/" style={{color:"#1abc9c"}}>
            <Nav.Link>HOME</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projectupward" style={{color:"#1abc9c"}}>
            <Nav.Link>PROJECT UPWARD</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to="/Future" style={{color:"#1abc9c"}}>
            <Nav.Link>FUTURE PROJECTS</Nav.Link>
          </LinkContainer> */}
          <LinkContainer to="/contact" style={{color:"#1abc9c"}}>
            <Nav.Link>CONTACT US</Nav.Link>
          </LinkContainer>
          {user ? (<button className='btn btn-success btn-sm' onClick={logOut}>Logout</button>) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;


