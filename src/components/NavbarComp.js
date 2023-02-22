import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contact from './Contact';

export default class NavbarComp extends Component{
    render(){
        return(
    <div>
      <Navbar bg="dark" variant={'dark'} expand="xl">
  <Navbar.Brand href="#home">Time{new Date().toLocaleTimeString()}
       </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="./" className="space1">Home</Nav.Link>
      <Nav.Link href="about" className="space1">About</Nav.Link>
      <Nav.Link href="Contact">Contact</Nav.Link>
      <Nav.Link href="Contact">Date {new Date().toLocaleDateString()}</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>

  )
 };
}
