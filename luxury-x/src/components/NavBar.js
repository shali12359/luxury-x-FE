import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Luxury X</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={`/categories`} style={{ textDecoration: 'none', color: 'inherit' }}>Categories</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;
