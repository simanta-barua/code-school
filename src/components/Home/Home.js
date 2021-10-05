import React, { useContext } from 'react';
import { userContext } from '../../App';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Instructor from '../Instructor/Instructor';
import SingleCourse from '../SingleCourse/SingleCourse';



const Home = () => {
    const [courses, setCourses] = useContext(userContext);
    let slicedCourse = courses.slice(0, 6)
    return (
        <div>
            <Banner></Banner>
            <Container>
                <Category></Category>
                <div className="my-5">
                    <div className="text-center text-box ">
                        <h2> Find the Right </h2>
                        <h1>Online Course for you</h1>
                    </div>
                    <div>
                        <Row xs={1} md={3} sm={2} className="g-3 m-3 px-5">
                            {
                                slicedCourse.map(course => <SingleCourse
                                    key={course.key}
                                    course={course} ></SingleCourse>)
                            }
                        </Row>
                    </div>
                </div>
            </Container>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;