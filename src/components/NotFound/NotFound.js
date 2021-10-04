import React from 'react';
import { Container } from 'react-bootstrap';
import "./NotFound.css";
import img404 from "./404.png"
const NotFound = () => {

    return (
        <div className="not-found-bg">
            <Container className="text-center text-light ">
                <img src={img404} alt="" className="my-5" />
                <div>
                    <h1 >Oooops!</h1>
                    <p>We have something broken.</p>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;