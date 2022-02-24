import React from 'react';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form,FormControl } from 'react-bootstrap';import { Link} from "react-router-dom";
function Head()
{
  return(
    <>
    <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Nav className="m-auto">
    <a href="/">
    <img
        src="img/logo.png"
        width="45"
        height="45"
        className="d-inline-block align-top"
        alt="Brand Rogo"
      />
    </a>
    
    <Navbar.Brand href="/">Team MealKit</Navbar.Brand>
    </Nav>
    <Nav>
      <Link to="/join">
        <Button variant="light" >Join</Button>
      </Link>
      <Link to="/login">
        <Button variant="light">Login</Button>
      </Link>
    </Nav>
  </Navbar>
  </Container>
  <Container>

  <Navbar  bg="light" expand="lg">
  <Nav
    className="me-auto my-2 my-lg-0"
    style={{ maxHeight: '100px' }}
  >
    
    <Row>
        <Col xs={3}>
            <Nav.Link href="#action1">회사소개</Nav.Link>
          </Col>
          <Col xs={3}>
            <Nav.Link href="#action2">신상품</Nav.Link>
          </Col>
          <Col xs={3}>
            <Nav.Link href="#action2">인기상품</Nav.Link>
          </Col>
          <Col xs={3}>
            <Nav.Link href="#action2">이벤트</Nav.Link>
          </Col>
          <Col xs={3}>
            <Nav.Link href="#action2">프토평</Nav.Link>
          </Col>
          <Col xs={3}>
            <Nav.Link href="#action2">전체상품</Nav.Link>
          </Col>
          <Col xs={3}>
            <Nav.Link href="#action2">고객센터</Nav.Link>
          </Col>
        </Row>
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
</Container>

</>
  )}

export default Head;