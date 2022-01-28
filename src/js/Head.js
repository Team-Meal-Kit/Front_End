import React from 'react';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown,Form,FormControl } from 'react-bootstrap';import { Link} from "react-router-dom";
function Head()
{
  return(
    <>
  <Navbar expand="lg" variant="light" bg="light">
    <div>
      <Navbar.Brand href="/">Team MealKit</Navbar.Brand>
      <Link to="/join">
      <Button variant="light" >Join</Button>
      </Link>
      <Link to="/login">
      <Button variant="light">Login</Button>
      </Link>
    </div>
  </Navbar>
  <Navbar  bg="light" expand="lg">
  <Nav
    className="me-auto my-2 my-lg-0"
    style={{ maxHeight: '100px' }}
    navbarScroll
  >
    <Nav.Link href="#action1">Home</Nav.Link>
    <Nav.Link href="#action2">Link</Nav.Link>
    <NavDropdown title="Link" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
      {/* <NavDropdown.Divider /> */}
      <NavDropdown.Item href="#action5">
        Something else here
      </NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#" disabled>
      Link
    </Nav.Link>
  </Nav>
  <Form className="d-flex">
    <FormControl
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>
  </Form>
</Navbar>
</>
  )}

export default Head;