// This component renders the primary navigation bar for the application,
// providing links to all the main pages.
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";

export default function FantasyNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">Fantasy Football Trends</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/trending-up">Trending Up</Nav.Link>
                        <Nav.Link as={NavLink} to="/trending-down">Trending Down</Nav.Link>
                        <Nav.Link as={NavLink} to="/favorites">Favorites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
