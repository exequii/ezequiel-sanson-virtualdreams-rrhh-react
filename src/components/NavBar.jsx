import React from "react";
import "../components/styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../components/styles/Formulario.css";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg" variant="dark">
      <Container>
        <Navbar.Brand href="/">VirtualDreams</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-conteiner">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/">Servicios</Nav.Link>
            <Nav.Link href="/">Quienes Somos</Nav.Link>
            <Nav.Link href="/">Busquedas</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
