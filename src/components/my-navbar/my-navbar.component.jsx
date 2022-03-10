import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/lawLogo.jpg";


import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar fixed="top" variant="dark" expand="md" className="animate-navbar nav-theme justify-content-between">
        <div>
          <Navbar.Brand href="#home">
            <div className="row">
              <div className="col">
                <img className="logo" style={{ width: "50px", height: "30px", borderRadius: "5px" }} src={Logo} alt="" />
              </div>
              <div className="col">
                <h3 style={{ marginLeft: "5px"}}>Professional Shield LLP</h3>
              </div>
            </div>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="tel:01146604368">Call at 01146604368</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
