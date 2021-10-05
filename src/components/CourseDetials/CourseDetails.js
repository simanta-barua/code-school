import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useParams } from 'react-router';
import { Badge, Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FaRegStar, FaStar, FaUser } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [courses, setCourses] = useContext(userContext);
    const newCourse = courses[courseId];
    const { index, title, category, instructor, picture, price, rating, students, details } = newCourse;


    return (
        <div className=" course-details">
            <div className="mt-5 p-5 text-center">
                <h1 className="mt-5 "> {title}</h1>
            </div>
            <div>
                <Container>
                    <Row className="text-box ">
                        <Col className="text-center">
                            <img src={picture} alt="" />
                        </Col>
                        <Col>
                            <ListGroup variant="flush" >
                                <ListGroup.Item> Category: <Badge pill bg="primary">{category}</Badge></ListGroup.Item>
                                <ListGroup.Item>Price: ${price} </ListGroup.Item>
                                <ListGroup.Item><FaUser /> <span className="text-muted">{instructor}</span></ListGroup.Item>
                                <ListGroup.Item>Students: {students} </ListGroup.Item>
                                <ListGroup.Item>Rating: <Rating className="rating"
                                    readonly
                                    initialRating={rating}
                                    emptySymbol={<FaRegStar />}
                                    fullSymbol={<FaStar />}></Rating>
                                </ListGroup.Item>
                                <ListGroup.Item>Details: {details} </ListGroup.Item>
                                <Link to="/courses" className="text-light p-3 m-3"> <Button variant="danger">View all Course </Button></Link>
                            </ListGroup>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CourseDetails;