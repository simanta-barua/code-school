
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import news from './../../assets/images/news.png'
const Blog = () => {
    return (
        <div>
            <Container className="mt-5 p-5">
            <div className="text-center text-box ">
                        <h2> Least News  </h2>
                    </div>
                <Row xs={1} md={3} className="g-4 my-3">
                    {Array.from({ length: 9 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="bottom" src={news} />
                                <Card.Body>
                                    <Card.Title>Least News</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam dignissimos iusto molestias, consequuntur explicabo minima, eum pariatur dolorum doloremque quo et nemo. Rem, facere. Provident excepturi odio eaque id?
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