import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container className="bg-dark text-light text-center" fluid >
                <Row>
                    <Col sm={4}>

                        <h3 >Explore</h3>
                        <ListGroup>
                            <ListGroup.Item>About Us</ListGroup.Item>
                            <ListGroup.Item>Success Story</ListGroup.Item>
                            <ListGroup.Item>Careers</ListGroup.Item>
                            <ListGroup.Item>Resource Center</ListGroup.Item>
                            <ListGroup.Item>Courses</ListGroup.Item>
                            <ListGroup.Item>Contact Us</ListGroup.Item>
                        </ListGroup>

                    </Col>
                    <Col sm={4}><h3 >Categories</h3>
                        <ListGroup>
                            <ListGroup.Item>All Courses</ListGroup.Item>
                            <ListGroup.Item>Storytelling & Voice Over</ListGroup.Item>
                            <ListGroup.Item>Digital Marketing</ListGroup.Item>
                            <ListGroup.Item>Design & Branding</ListGroup.Item>
                            <ListGroup.Item>Nanodegree Plus</ListGroup.Item>
                            <ListGroup.Item>Veterans</ListGroup.Item>
                        </ListGroup></Col>
                    <Col sm={4}><h3>Support</h3>
                        <ListGroup>
                            <ListGroup.Item>Help Center</ListGroup.Item>
                            <ListGroup.Item>System Requirements</ListGroup.Item>
                            <ListGroup.Item>Register Activation Key</ListGroup.Item>
                            <ListGroup.Item>Site Feedback</ListGroup.Item>
                            <ListGroup.Item>Documentation</ListGroup.Item>
                            <ListGroup.Item>Forums</ListGroup.Item>
                        </ListGroup></Col>

                </Row>
                <div class="row">
                    
                        <div class="copyright">
                            <p>© 2021 Copyright all Right Reserved Design by Simatna</p>
                        </div>
                  
                </div>
            </Container>
        </div>
    );
};

export default Footer;
