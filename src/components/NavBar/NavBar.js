import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo_1.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{
        padding: "5px",
        backgroundColor: "rgb(0,1,3) !important",
      }}
    >
      <Container
        fluid
        style={{
          //backgroundColor: "yellow",
          margin: "0px",
          padding: "0px 10px",
        }}
      >
        <Navbar.Brand
          href="/"
          style={{
            //backgroundColor: "pink",
            padding: "0px",
            margin: "0px",
          }}
        >
          <img src={logo} alt="" width="40px" />
          {/* <span
            style={{
              //backgroundColor: "Red",
              textAlign: "center",
              padding: "0px 10px",
              fontWeight: "600",
            }}
            className="navbarheader"
          >
            INTER IIT TECH MEET 10.0
          </span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-end navrouterlinks"
            style={{ width: "100%" }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutUs">About</Nav.Link>
            <Nav.Link href="/Events">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
