import React from 'react';
import {Button, Card, Col, ListGroup } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import './SingleInstructor.css'
const SingleInstructor = (props) => {
    const {  instructor,  rating, instructor_image } = props.course

    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }} className="custom-cart-3 text-center">
                    <Card.Img variant="top" src={instructor_image} />
                    <Card.Body>
                        <Card.Title>{instructor}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>Rating: <Rating  className="rating"
                            readonly
                            initialRating={rating}
                             emptySymbol={ <FaRegStar />}
                             fullSymbol={ <FaStar />}></Rating>
                             </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer className="text-center card-footer">
                        <Button variant="primary">More About</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default SingleInstructor;