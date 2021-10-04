import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const[searchText, setSearchText]=useState("")
    useEffect(() => {
        fetch('./courseDB.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const handleOnChange=(text)=>{
        setSearchText(text.target.value)
        console.log(text.target.value);
        
    }
    return (
        <Container>
            <div className='w-50 mx-auto mt-5'>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search Your Course"
                        className="mx-auto"
                        aria-label="Search"
                        onChange={handleOnChange}
                    />
                    <Button variant="outline-success" >Search</Button>
                </Form>
            </div>
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