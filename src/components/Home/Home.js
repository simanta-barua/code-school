import React from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Courses from '../Courses/Courses';
import SingleCourse from '../SingleCourse/SingleCourse';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <div className='my-5 text-center'>
                <h1 className="mt-3">Find the Right Online Course for you</h1>
               <Courses></Courses>
               {console.log(Courses)
               }
            </div>

        </div>
    );
};

export default Home;