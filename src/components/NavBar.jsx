import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';
import mrlLogo from '../imagenes/loguito.png'
import { Link } from 'react-router-dom';

export default function NavBar() {  

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Link to={`/`}><img height={70} width={70} alt={"imagenMRL"} src={mrlLogo}></img></Link>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav className='nav-link'>
        <Link style={{color:"#939d9e"}} to={`/mercancia`}>Mercancia</Link>
        </Nav>
        <Nav className='nav-link'>
      
        </Nav>
        
        <NavDropdown title="Categorías" id="collasible-nav-dropdown">
          <NavDropdown.Item ></NavDropdown.Item> 
          <Link style={{color:"#939d9e"}} to={`/categoria/volantes`}>Volantes</Link>
          <NavDropdown.Item ></NavDropdown.Item>  
          <Link style={{color:"#939d9e"}} to={`/categoria/dashboards`}>Dashboards</Link>
          <NavDropdown.Item ></NavDropdown.Item>             
          <Link style={{color:"#939d9e"}} to={`/categoria/camaras`}>Camaras</Link>
          <NavDropdown.Divider />
          <NavDropdown.Item></NavDropdown.Item>   
          <Link style={{color:"#939d9e"}} to={`/categoria/accesorios`}>Accesorios</Link>
          
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link >Calendario</Nav.Link>
        <Nav.Link eventKey={2} >
          Dank Memes
        </Nav.Link>
        <CartWidget/>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )}

