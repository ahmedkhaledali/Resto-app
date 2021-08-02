import React, { Component } from "react";
import "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../App.css";
import Button from "react-bootstrap/Button";

function Navbare() {
    return (
      <div>
<Navbar class="navbar " fixed="top" >
  <Navbar.Collapse id="navbarScroll">  
    <Nav className="mx-auto">
      <Nav.Link href="#action1">Acceuil</Nav.Link>
      <Nav.Link href="#action2">  Commandes </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>
    )
}
export default  Navbare;