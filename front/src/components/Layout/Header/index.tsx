import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./index.css";

const Header: React.FC = () => {
  return (
    <>
      {localStorage.getItem("access_token") !== null ? (
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/home">Euh</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link >déconnexion</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar style={{background:'#fff'}}>
          <Container>
            <Navbar.Brand href="/">Euh</Navbar.Brand>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Header;
