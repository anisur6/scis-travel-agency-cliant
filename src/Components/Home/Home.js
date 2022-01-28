import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import './Home.css'
import Ratings from '../Ratings/Ratings';
import ServicesSlice from '../ServicesSlice/ServicesSlice';

const Home = () => {
    return (
        <div>
            <Container fluid className="home">
                <Row>
                    <Col className='mt-5'>
                        <div className='text-center w-75 mx-auto'>
                            <h1 className="h2 ">Most Popular Tour Agency
                                <span className=' logo-font span'> IN BANGLADESH</span></h1>
                            <h4 className="text-dark h4">COUNTRYS LARGEST Touring Agency</h4>

                            <p className="p text-light fs-4 my-2">We provide the best service in bangladesh to our honurable cliants for chosing  the best deal for there own.</p>
                            <Button size="lg" className="btn" variant="light">See Plans</Button>
                            <Button size="lg" className="btn" variant="dark">More Topic</Button>

                        </div>
                    </Col>


                </Row>
            </Container>





            <Container className="banner-home my-5">

                <Col>

                    <h2 className="h2 logo-font"><span className='span'>WHAT</span> WE DO</h2>

                    <hr />
                </Col>

                <Row className="my-4 ">



                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className=' shadow border-0 my-3'>
                            <Card.Body>
                                <span className='fs-1 text-info'><i class="fas fa-ticket-alt"></i></span>
                                <Card.Title className='text-center fw-bold'>Online Ticket Booking</Card.Title>
                                <Card.Text>
                                    For booking online tickets you can just try our app and book your ticket.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className=' shadow border-0 my-3'>
                            <Card.Body>
                                <span className='fs-1 text-danger'><i class="fas fa-check-circle"></i></span>
                                <Card.Title className='text-center fw-bold'>Correct Info</Card.Title>
                                <Card.Text>
                                    For booking online tickets you can just try our app and book your ticket.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className=' shadow border-0 my-3'>
                            <Card.Body>
                                <span className='fs-1 text-success'><i class="fas fa-user-tag"></i></span>
                                <Card.Title className='text-center fw-bold'>Referal Discount</Card.Title>
                                <Card.Text>
                                    For booking online tickets you can just try our app and book your ticket.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className=' shadow border-0 my-3'>
                            <Card.Body>
                                <span className='fs-1 text-secondary'><i class="fas fa-bus-alt"></i></span>
                                <Card.Title className='text-center fw-bold'>Bus tickets</Card.Title>
                                <Card.Text>
                                    For booking online tickets you can just try our app and book your ticket.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className=' shadow border-0 my-3'>
                            <Card.Body>
                                <span className='fs-1 text-warning'><i class="fas fa-plane-departure"></i></span>
                                <Card.Title className='text-center fw-bold'>Air Tickets</Card.Title>
                                <Card.Text>
                                    For booking online tickets you can just try our app and book your ticket.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className=' shadow border-0 my-3'>
                            <Card.Body>
                                <span className='fs-1 text-info'><i class="fas fa-vihara"></i></span>
                                <Card.Title className='text-center fw-bold'>Tour Visa</Card.Title>
                                <Card.Text>
                                    For booking online tickets you can just try our app and book your ticket.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>



                </Row>


            </Container>






            {/* services section start */}

            <Container fluid className="homecourse  my-3">
                <Row className='p-2'>
                    <Col md={9} className=''>
                        <h2 className='text-start fw-bold ms-4'>Recent <span> Blogs</span></h2>
                        <hr  className='ms-4 w-75'/>
                        <ServicesSlice></ServicesSlice>
                    </Col>
                    <Col md={3}>
                        <h2 className='text-start fw-bold'>Top Ratted Spots</h2>
                        <hr />
                        <br />

                        <Card style={{ width: '18rem' }} className='border-0 shadow my-4'>
                            <Card.Img variant="top" src="https://www.baldhiker.com/wp-content/uploads/2022/01/ilkley-moor-dog.jpg" />
                            <Card.Body className='text-start'>
                                <Card.Title>Walks On Ilkley Moor, Baht ‘At</Card.Title>
                                <Card.Text className='text-secondary '>
                                    Walks on Ilkley Moor, Yorkshire, I find, are some of the most refreshing.....
                                </Card.Text>
                                <Button variant="warning">See More</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }} className='border-0 shadow my-4'>
                            <Card.Img variant="top" src="https://www.baldhiker.com/wp-content/uploads/2022/01/The-War-Memorial-Victoria-Embankment.jpg" />
                            <Card.Body className='text-start'>
                                <Card.Title>The Victoria Embankment</Card.Title>
                                <Card.Text className='text-secondary '>
                                    The Victoria Embankment in Nottingham was constructed between 1898 and 1901 with
                                </Card.Text>
                                <Button variant="warning">See More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='border-0 shadow my-4'>
                            <Card.Img variant="top" src="https://www.baldhiker.com/wp-content/uploads/2022/01/leftoverlook2-768x462.jpg" />
                            <Card.Body className='text-start'>
                                <Card.Title>Raven Rocks Hike, Bluemont, Virginia</Card.Title>
                                <Card.Text className='text-secondary '>
                                    Walks on Ilkley Moor, Yorkshire, I find, are some of the most refreshing.....
                                </Card.Text>
                                <Button variant="warning">See More</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }} className='border-0 shadow my-4'>
                            <Card.Img variant="top" src="https://www.baldhiker.com/wp-content/uploads/2022/01/Pontcysyllte-Aqueduct-from-above-768x511.jpg" />
                            <Card.Body className='text-start'>
                                <Card.Title>A Narrowboat Trip On</Card.Title>
                                <Card.Text className='text-secondary '>
                                    Walks on Ilkley Moor, Yorkshire, I find, are some of the most refreshing.....
                                </Card.Text>
                                <Button variant="warning">See More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='border-0 shadow my-4'>
                            <Card.Img variant="top" src="https://www.baldhiker.com/wp-content/uploads/2022/01/Reykjavik-768x468.jpg" />
                            <Card.Body className='text-start'>
                                <Card.Title>A Reykjavik Food Tour</Card.Title>
                                <Card.Text className='text-secondary '>
                                    Walks on Ilkley Moor, Yorkshire, I find, are some of the most refreshing.....
                                </Card.Text>
                                <Button variant="warning">See More</Button>
                            </Card.Body>
                        </Card>



                    </Col>
                </Row>
            </Container>



            {/* hare comes rating componet  */}


            <Container className="homecourse">
                <h2 className="h2 my-3">CLIANT <span> REVIEWS</span></h2>

                <hr />
                <Ratings></Ratings>
            </Container>

            {/* rating component end  */}








        </div>
    );
};

export default Home;