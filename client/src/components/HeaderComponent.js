import { Component } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

    render() {
        return (    
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">flexi-focus</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>                   
                        {/* <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>        
                        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>       */}
                    </Nav>
                    <Button className="text-light">
                    <FontAwesomeIcon icon={faSignInAlt} size="lg"/> Login
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }
}

export default Header;