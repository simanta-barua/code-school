import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courseDB.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
 
    return (
        <Container>
         
            <div className="course-container">

                <Row xs={1} md={3} sm={2} className="g-4 m-3">
                    {
                        courses.map(course => <SingleCourse
                            key={course.key}
                            course={course} ></SingleCourse>)
                    }
                </Row>

            </div>
        </Container>
    );
};

export default Courses;