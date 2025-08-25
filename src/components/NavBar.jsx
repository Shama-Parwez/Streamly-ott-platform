import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <span className="text-danger fw-bold">S</span>tream
          <span className="text-danger fw-bold">L</span>y
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end></Nav.Link>
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/webseries">WebSeries</Nav.Link>
            <Nav.Link as={NavLink} to="/mylist">My List</Nav.Link>
            <Nav.Link as={NavLink} to="/subscription">Subscription</Nav.Link>
            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
