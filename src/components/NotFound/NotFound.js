import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./NotFound.css";
import img404 from "./../../assets/images/404.png"
import { Link } from 'react-router-dom';
const NotFound = () => {

    return (
        <div className="not-found-bg mt-5 p-5">
            <Container className="text-center text-light mt-5">
                <img src={img404} alt="" className="mt-5 p-5" />
                <div>
                    <h1 >Oooops!</h1>
                    <p>We have something broken.</p>
                    <Link to="/home" className="text-light"><Button variant="danger">Back to Home</Button></Link>
                </div>
            </Container>
        </div>
    ); 
};

export default NotFound;