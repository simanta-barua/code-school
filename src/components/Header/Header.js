import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>

                <Navbar bg="dark" variant={"dark"} expand="lg" >
                    <Container>
                        <Navbar.Brand>CodeSchool</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" >
                            <Nav
                                className="mx-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;