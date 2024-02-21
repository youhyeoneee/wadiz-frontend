import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const EXPAND_BREAKPOINT = "md";

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="light"
      variant="light"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <b>{brandTitle}</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse"></Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
