import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import layer from './BannerAssets/layer.png'
import './Banner.css'
const Banner = () => {
    return (
 
            <div className="banner-container">
                <Container>
                    <Row xs={1} md={2} sm={2}>
                        <Col>
                            <img src={layer} alt="" className="img-fluid w-50 mt-5 mx-5" />
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