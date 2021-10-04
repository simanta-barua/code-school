import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';

const SingleCourse = (props) => {
    const { title, category, details, instructor, picture, price, rating, students } = props.course

    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{category}</ListGroup.Item>
                            <ListGroup.Item>Price: ${price} </ListGroup.Item>
                            <ListGroup.Item>{instructor}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCourse;