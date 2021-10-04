import React from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';

const SingleCourse = (props) => {
    const { title, category,  instructor, picture, price, rating, students } = props.course

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
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCourse;