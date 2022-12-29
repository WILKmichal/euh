import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import routes from "../../../routes";

import { ReactComponent as FishLogo } from "../../../assets/img/fishsvg.svg";

import "./index.css";

const Header: React.FC = () => {
  return (
    <>
      {localStorage.getItem("access_token") !== null ? (
        <Navbar style={{ background: "#fff" }} collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <FishLogo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="me-auto">
                {routes.map((route: any, index: number) =>
                  route.connect === true ? (
                    <Nav.Link  key={"route-key-" + index} href={`${route.path}`}>{route.title}</Nav.Link>
                  ) : (
                    ""
                  )
                )}
              </Nav>

              <Nav.Link>déconnexion</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar style={{ background: "#fff" }}>
          <Container>
            <Navbar.Brand href="/">
              <FishLogo />
            </Navbar.Brand>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Header;
