import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./NotFound.css";
import img404 from "./../../assets/images/404.png"
import { Link } from 'react-router-dom';
const NotFound = () => {

    return (
        <div className="not-found-bg">
            <Container className="text-center text-light ">
                <img src={img404} alt="" className="my-5" />
                <div>
                    <h1 >Oooops!</h1>
                    <p>We have something broken.</p>
                    <Button variant="danger"><Link to="/home" className="text-light">Back to Home</Link></Button>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;