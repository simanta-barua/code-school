import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import cat1 from "./CategoryAssets/cat1.png"
import cat2 from "./CategoryAssets/cat2.png"
import cat3 from "./CategoryAssets/cat3.png"
import cat4 from "./CategoryAssets/cat4.png"
import './Category.css'
const Category = () => {
    return (
        <div className="category-container my-3" >
            <Container>

            <div>
                <div className="text-center">
                    <h2> School Popular Subjects</h2>
                    <p>Online education is a flexible instructional <br />delivery system that encompasses any
                        kind of learning that <br />takes place via the Internet.</p>
                </div>
                <div>
                    <Row xs={1} md={4} sm={2} className="g-1 ">
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src={cat2} />
                                <Card.Body>
                                    <Card.Title>Computer Science</Card.Title>
                                    <Card.Text>Over 740 Courses</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src={cat3} />
                                <Card.Body>
                                    <Card.Title>Data Analysis</Card.Title>
                                    <Card.Text>Over 120 Courses
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src={cat4} />
                                <Card.Body>
                                    <Card.Title>Social Sciences</Card.Title>
                                    <Card.Text>
                                    Over 235 Courses</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src={cat2} />
                                <Card.Body>
                                    <Card.Title> Development</Card.Title>
                                    <Card.Text>
                                    Over 425 Courses</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Category;