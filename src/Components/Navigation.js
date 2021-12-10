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
                        <Nav.Link as={Link} to='gyldnespiral'>Gyldne spiral</Nav.Link>
                        <Nav.Link as={Link} to='gyldnesnit'>Gyldne snit</Nav.Link>
                        <Nav.Link as={Link} to='intetdesign'>Intet design</Nav.Link>
                        <Nav.Link as={Link} to='fibonacci'>Fibonacci</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Navigation
// https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6