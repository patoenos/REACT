import * as React from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../components/NavBar.css'
import CartWidget from '../components/CartWidget';


export default function NavBar(){

return (
    <>
         <Navbar bg="light" expand="lg">
            <Container className='contenedor-navbar'>
                <Navbar.Brand href="#home">Mexican Racing League</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Inscripciones</Nav.Link>
                    <NavDropdown title="Resultados" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Elite</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Clase A</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">F1 Real</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href='#link'><CartWidget cant={10}/> </Nav.Link> */}
                    <CartWidget/> {/* Se manda a llamar a CartWidget */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
</>
)
}
