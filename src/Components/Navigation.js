import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link as={Link} to='page1'>Page 1</Nav.Link>
                        <Nav.Link as={Link} to='page2'>Page 2</Nav.Link>
                        <Nav.Link as={Link} to='page3'>Page 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Navigation
// https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6