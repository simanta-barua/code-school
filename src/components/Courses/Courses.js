import React, { useContext } from 'react';
import { userContext } from '../../App';
import { Container, Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const [courses, setCourses] = useContext(userContext);

    return (
        <Container>

            <div className="course-container mt-5 p-3">
                <div className="text-center text-box ">
                    <h2> Find the Right </h2>
                    <h1>Online Course for you</h1>
                </div>
                <Row xs={1} md={2} sm={2} lg={4} className="g-1 mt-5">
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