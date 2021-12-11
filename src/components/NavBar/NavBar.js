import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo_1.png";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container
        fluid
        style={
          {
            //backgroundColor: "yellow",
          }
        }
      >
        <Navbar.Brand
          href="/"
          style={{
            //backgroundColor: "pink",
            padding: "0px",
          }}
        >
          <img src={logo} alt="" width="50px" />
          <span
            style={{
              //backgroundColor: "Red",
              textAlign: "center",
              padding: "0px 10px",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
          >
            INTER IIT TECH MEET 10.0
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
            <Nav.Link href="/Events">Events</Nav.Link>
            <Nav.Link href="/Team">Team</Nav.Link>
            <Nav.Link href="/Timeline">Timline</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
