
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import news from './../../assets/images/news.png'
const Blog = () => {
    return (
        <div>
            <Container>
                <Row xs={1} md={3} className="g-4 my-3">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="bottom" src={news} />
                                <Card.Body>
                                    <Card.Title>Least News</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Blog;