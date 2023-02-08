import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import '../App.css'

import styled from 'styled-components';
const NavBar = () => {

    let size = ['lg'];
  return (
   <nav>
    <div className='container-fluid'>
    {size.map((expand) => (
      <Navbar expand={expand} className="m-1">
        <Container>
          <Navbar.Brand href="#"> <span className='logo-title'>NAmorganda</span></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
               <span className='logo-title'>NAmorganda</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1"  className='mx-3 hover-line'>Home</Nav.Link>
                    <Nav.Link href="#projects"  className='mx-3 hover-line'>Projects</Nav.Link>
                    <Nav.Link href="#AboutMe" className='mx-3 hover-line'>About Me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    </div>
    </nav>

  )
}

export default NavBar
