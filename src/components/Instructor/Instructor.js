import React, { useContext } from 'react';
import { Row, Card, Container } from 'react-bootstrap';
import { userContext } from '../../App';
import SingleInstructor from '../SingleInstructor/SingleInstructor';

const Instructor = () => {
    const [courses, setCourses] = useContext(userContext);

    let slicedCourse = courses.slice(0, 6)

    return (
        <div>
            <Container>
                <div className="text-center text-box">
                    <h1>
                        Classes Taught by Real Creators
                    </h1>
                    <p>Online education is a flexible instructional delivery system that encompasses any
                        kind of learning that takes place via the Internet.</p>
                </div>
                <div>
                    <Row xs={1} md={3} sm={2} className="g-3 m-3 px-5">
                        {
                            slicedCourse.map(course => <SingleInstructor
                                key={course.key}
                                course={course} ></SingleInstructor>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Instructor;