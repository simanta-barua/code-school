import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from "./../../assets/images/about.png"

const About = () => {
    return (
        <div>
            <Container>
                <Row className="my-5 ">
                    <Col>
                        <img src={about} alt="" className="w-75" />
                    </Col>
                    <Col className="my-auto">
                        <h1>What will you <br />Discover?</h1>
                        <p>Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you. </p>
                        <Button variant="outline-primary" ><Link to="/courses">Browse Classes</Link></Button>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;