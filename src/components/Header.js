import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="success" expand="lg">
          <Container>
            <Navbar.Brand href="/">Watches World</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/list">My Watch List</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
