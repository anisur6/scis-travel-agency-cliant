import React from 'react';
import { Col, Container, Row, Button, ProgressBar } from 'react-bootstrap';
import './Home.css'
import Contact from '../Contact/Contact';
import Ratings from '../Ratings/Ratings';
import ServicesSlice from '../ServicesSlice/ServicesSlice';

const Home = () => {
    return (
        <div>
            <Container fluid className="home">
                <Row>
                    <Col>
                        <div>
                            <h1 className="h2">BUY DJI DRONES & ACCESSORIES
                                <span> IN BANGLADESH</span></h1>
                            <h4 className="text-dark h4">COUNTRYS LARGEST HOBBY SHOP</h4>

                            <p className="p"><span>Pro level Flagship Cammera Drone.</span> A drone, in technological terms, is an unmanned aircraft. Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems (UASes). Essentially, in their embedded systems, working in conjunction with onboard sensors and GPS.</p>
                            <Button size="lg" className="btn" variant="success">Explore</Button>

                        </div>
                    </Col>
                    <Col>
                    </Col>



                </Row>


            </Container>





            <Container className="banner-home my-5">

                <Col>

                    <h2 className="h2"><span>WHAT</span> WE DO</h2>

                    <hr />
                </Col>

                <Row className="my-4">

                    <Col md={6} className="mt-5">
                        <Row className="text-start">

                            <div className="d-flex mt-3">
                                <Col md={3}>

                                    <div className="icon">
                                        <i class="fas fa-shipping-fast"></i>
                                    </div>

                                </Col>
                                <Col md={9}>
                                    <h6>Fast Delivary in Citites</h6>
                                    <p>We provide first delivary to our honurable customers i citites area. for this service you have to pay extra money.</p>
                                </Col>
                            </div>



                            <div className="d-flex mt-3">
                                <Col md={3}>

                                    <div className="icon">
                                        <i class="far fa-handshake"></i>
                                    </div>

                                </Col>
                                <Col md={9}>
                                    <h6>Carrer With Us</h6>
                                    <p>we would like to welcome new user to make our brand promote to other. for this any one can get the oportunity to affilite.</p>
                                </Col>
                            </div>




                            <div className="d-flex mt-3">
                                <Col md={3}>

                                    <div className="icon">
                                        <i class="fas fa-gifts"></i>
                                    </div>

                                </Col>
                                <Col md={9}>
                                    <h6>Gifts for our lucky Customers</h6>
                                    <p>In different occan we provide gifts on many drones combo offer. In offer customers gets gift and havey discount.</p>
                                </Col>
                            </div>

                        </Row>
                    </Col>

                    <Col md={6}>


                        <div className="my-5">
                            <h5 className="h5">Sales Service</h5>
                            <ProgressBar animated striped variant="success" now={80} />
                        </div>

                        <div className="my-5">
                            <h5 className="h5">Marcketing</h5>
                            <ProgressBar animated striped variant="info" now={85} />
                        </div>

                        <div className="my-5">
                            <h5 className="h5">Parts Available</h5>
                            <ProgressBar animated striped variant="primary" now={95} />
                        </div>

                        <div className="my-5">
                            <h5 className="h5">Customer Care</h5>
                            <ProgressBar animated striped variant="warning" now={82} />
                        </div>
                    </Col>


                </Row>


            </Container>






            {/* services section start */}

            <Container className="homecourse">
                <h2 className="h2 my-3">Feature <span>Products</span></h2>
                <p>Below you will find latest products from our most popular drone manufacturers and categories.</p>
                <hr />
                <ServicesSlice></ServicesSlice>
            </Container>



            {/* hare comes rating componet  */}


            <Container className="homecourse">
                <h2 className="h2 my-3">CLIANT <span> REVIEWS</span></h2>

                <hr />
                <Ratings></Ratings>
            </Container>

            {/* rating component end  */}



            {/* contact component  */}
            <div>
                <Container className="my-5">
                    <Contact></Contact>
                </Container>
            </div>




        </div>
    );
};

export default Home;