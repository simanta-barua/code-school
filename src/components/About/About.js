import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from "./../../assets/images/about.png"

const About = () => {
    return (
        <div>
            <Container>
                <Row className="my-5 p-5">
                    <Col>
                        <img src={about} alt="" className="w-75" />
                    </Col>
                    <Col className="mt-5 p-5">
                        <h1>What will you <br />Discover?</h1>
                        <p>Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you. </p>
                        <Link to="/courses"><Button variant="outline-primary" >Browse Classes</Button></Link>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;