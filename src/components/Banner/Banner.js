import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import layer from './BannerAssets/layer.png'
import './Banner.css'
const Banner = () => {
    return (

        <div>
            <Container className="banner-container">
                <Row xs={1} md={2} sm={2} className="g-4 mx-3">
                    <Col>
                        <img src={layer} alt="" className="img-fluid " />
                    </Col>
                    <Col className="my-auto text-dark">
                        <div >Code School</div>
                        <h2>Learn on your Class schedule.</h2>
                        <p>
                        </p>
                        <Button variant="danger">Ready to Get Started?</Button>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Banner;