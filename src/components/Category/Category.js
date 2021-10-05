import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


import cat1 from "./../../assets/CategoryAssets/cat1.png"
import cat2 from "./../../assets/CategoryAssets/cat2.png"
import cat3 from "./../../assets/CategoryAssets/cat3.png"
import cat4 from "./../../assets/CategoryAssets/cat4.png"
import './Category.css'
const Category = () => {
    return (
        <div className="category-container" >
            <Container>
                <div className="text-center text-box">
                    <h2> School Popular Subjects</h2>
                    <p className="text-muted">Online education is a flexible instructional <br />delivery system that encompasses any
                        kind of learning that <br />takes place via the Internet.</p>
                </div>
                <div><Row xs={1} md={4} sm={2} className="g-1 mt-2 text-center">
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                                <Card.Title>Computer </Card.Title>
                                <Card.Text className="text-muted">Over 740 Courses</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={cat3} />
                            <Card.Body>
                                <Card.Title>Data Analysis</Card.Title>
                                <Card.Text className="text-muted">Over 120 Courses
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={cat4} />
                            <Card.Body>
                                <Card.Title>Social Sciences</Card.Title>
                                <Card.Text className="text-muted">
                                    Over 235 Courses</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={cat2} />
                            <Card.Body>
                                <Card.Title> Development</Card.Title>
                                <Card.Text className="text-muted">
                                    Over 425 Courses</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default Category;