import { Component, ReactNode } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Route, Router } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import logo from '../../resources/dsexpress.png';
import "./Header.css"


export default class Header extends Component {
  render(): ReactNode {
    return (
      <Navbar className="Header" fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} height="30"  alt="DSExpress"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link}  to="/controls">Управление</Nav.Link>
              <Nav.Link as={Link}  to="/about">О приложении</Nav.Link>
              <Nav.Link as={Link}  to="/controls">Кнопка</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
