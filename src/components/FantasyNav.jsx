// This component renders the primary navigation bar for the application,
// providing links to all the main pages.
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from "react-bootstrap";

export default function FantasyNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>Fantasy Football Trends</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/trending-up">
                            <Nav.Link>Trending Up</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/trending-down">
                            <Nav.Link>Trending Down</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/favorites">
                            <Nav.Link>Favorites</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
