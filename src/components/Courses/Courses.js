import React, { useContext } from 'react';
import { userContext } from '../../App';
import { Container, Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const [courses, setCourses] = useContext(userContext);

    return (
        <Container>

            <div className="course-container">
                <div className="mt-3 mx-auto">
                    <h1 >Find the Right Online Course for you</h1>
                </div>
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