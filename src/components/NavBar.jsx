import React from "react";
import "../components/styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../components/styles/Formulario.css";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">VirtualDreams</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-conteiner">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Servicios</Nav.Link>
            <Nav.Link href="#deets">Quienes Somos</Nav.Link>
            <Nav.Link href="#deets">Busquedas</Nav.Link>
            <Nav.Link href="#deets">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
