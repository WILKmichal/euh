import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import routes from "../../../routes";

import {ReactComponent as FishLogo}  from '../../../assets/img/fishsvg.svg';


import "./index.css";

const Header: React.FC = () => {
  return (
    <>
      {localStorage.getItem("access_token") !== null ? (
        <Navbar style={{ background: "#fff" }} collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/home"><FishLogo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              {routes.map((route: any, index: number) =>
                route.connect === true ? (
                  <Nav key={"route-key-" + index} className="me-auto">
                    <Nav.Link href={`${route.path}`}>{route.title}</Nav.Link>
                  </Nav>
                ) : (
                  ""
                )
              )}

              <Nav.Link>déconnexion</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar style={{ background: "#fff" }}>
          <Container>
            <Navbar.Brand href="/">Euh</Navbar.Brand>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Header;
