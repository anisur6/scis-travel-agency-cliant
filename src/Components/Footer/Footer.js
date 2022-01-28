import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import logo from './../../images/logo.png'


const Footer = () => {
    return (
        <div>
            <Container fluid className='bg-dark'>
                <Row className="footer">

                    <Col sm={3}>
                        <div>
                            <h1 className='logo-font text-light'>TRAVEL-VALLY</h1>
                            <br /><br />


                            <div>
                                <h4 className="brand">Follow Us on</h4>

                                <div className="footer-icon">
                                    <i class="fab fa-facebook mx-2"></i>
                                    <i class="fab fa-linkedin mx-2"></i>
                                    <i class="fab fa-twitter-square mx-2"></i>
                                    <i class="fab fa-instagram-square mx-2"></i>
                                    <i class="fab fa-youtube-square mx-2"></i>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col sm={3}>
                        <div>
                            <h4 className="brand">Help & Support</h4>



                            <li>Payment Methods</li>
                            <li>Order Information</li>
                            <li>Shipping & Delivery</li>
                            <li>After-Sales Service Policies</li>
                            <li>FAQs</li>
                            <li>Repair Services</li>


                        </div>

                    </Col>

                    <Col sm={3}>
                        <div>
                            <h4 className="brand">Help & Support</h4>



                            <li>Payment Methods</li>
                            <li>Order Information</li>
                            <li>Shipping & Delivery</li>
                            <li>After-Sales Service Policies</li>
                            <li>FAQs</li>
                            <li>Repair Services</li>


                        </div>

                    </Col>


                    <Col sm={3}>
                        <div>
                            <h4 className="brand">Our Newsletter</h4>
                            <p>Subscribe to our newsletter and get exlusive first minute offers straight into your inbox.</p>
                            <hr />
                            <div>
                                <input className="w-100 m-2 p-2" type="text" name="" placeholder="Enter Your Email" id="" /><br />

                                <Button className="m-2 p-2 btn btn-danger  w-100 text-light  fw-bold border-0">SUBSCRIBE</Button>
                            </div>
                        </div>
                    </Col>
                    <hr />

                    <h5 className="footer-end">Copyright © from 2021-2022 all right reservs</h5>
                </Row>


            </Container>
        </div>
    );
};

export default Footer;