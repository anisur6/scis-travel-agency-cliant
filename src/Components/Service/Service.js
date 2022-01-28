import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";


const Service = (props) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(
            () => {
                setLoading(false)
            }, 2000)
    }, [])
    const { _id, img, name, price, duration, description } = props.service;
    return (
        <div>

            {
                loading ?

                    <ClipLoader
                        size={30}
                        color={'#F37A24'}
                        loading={loading}
                    />

                    :

                    <Container className="my-2">
                        <Col>
                            <Card className="border-0 shadow">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title className="fw-bold text-success ">{name}</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <div className="fw-bold">Rating: <span>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <i class="far fa-star"></i>
                                        </span>
                                        </div>
                                        <div className="fw-bold">Review: <span class="badge bg-secondary">14</span></div>
                                    </div>

                                    <div><p className="text-start my-1">{ description}</p></div>
                                    <div className="d-flex justify-content-between my-2">
                                        <div className="fw-bold">Price: ${price}</div>
                                        <div className="fw-bold">Quantity: {duration}</div>
                                    </div>

                                    <Link to={`/booking/${_id}`}>
                                        <Button variant="success">Buy Now</Button>
                                        <Button variant="dark">Add to Cart</Button>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Container>

            }




        </div>
    );
};

export default Service;