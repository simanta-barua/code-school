import React from 'react';
import { Badge, Button, Card, Col, ListGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import './SingleCourse.css'
import { FaRegStar, FaStar, FaUser } from 'react-icons/fa';
const SingleCourse = (props) => {
    const { title, category, instructor, picture, price, rating, students } = props.course

    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }} className="custom-cart">
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <ListGroup variant="flush" >
                            <ListGroup.Item> Category: <Badge pill bg="primary">{category}</Badge></ListGroup.Item>
                            <ListGroup.Item>Price: ${price} </ListGroup.Item>
                            <ListGroup.Item><FaUser/> <span className="text-muted">{instructor}</span></ListGroup.Item>
                            <ListGroup.Item>Rating: <Rating  className="rating"
                            readonly
                            initialRating={rating}
                             emptySymbol={ <FaRegStar />}
                             fullSymbol={ <FaStar />}></Rating>
                             </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer className="text-center card-footer">
                        <Button variant="primary">Details</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCourse;