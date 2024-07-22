import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/projects">
              My Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
