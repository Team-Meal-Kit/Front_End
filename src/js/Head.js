import React from 'react';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link} from "react-router-dom";
function Head()
{
  return(
  <Navbar fixed="top" expand="lg" variant="light" bg="light">
  <Container>
    <div>
      <Link to ="/">
      <Navbar.Brand href="#">Team MealKit</Navbar.Brand>
      </Link>
    </div>

    <div>
      <Link to="/join">
      <Button variant="light" >Join</Button>
      </Link>
      <Link to="/login">
      <Button variant="light">Login</Button>
      </Link>
    </div>
  </Container>
 
</Navbar>)}

export default Head;