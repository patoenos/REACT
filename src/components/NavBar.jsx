import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';
import mrlLogo from '../imagenes/loguito.png'

export default function NavBar() {  

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
    <img height={70} width={70} alt={"imagenMRL"} src={mrlLogo}></img>
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Divisiones</Nav.Link>
        <Nav.Link href="#pricing">Inscripciones</Nav.Link>
        <NavDropdown title="Ver Más" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Resultados</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Reglamento</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Mercancía</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Inscripciones</NavDropdown.Item>       
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Calendario</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank Memes
        </Nav.Link>
        <CartWidget/>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )}

