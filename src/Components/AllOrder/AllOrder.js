import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const AllOrder = (props) => {


    const { img, name, price, duration } = props.bookedService;

    return (
        <>
            <Container className="my-2">
                <Col>
                    <Card className="d-flex">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <div className="d-flex justify-content-between">
                                <div className="fw-bold">price: {price}</div>
                                <div className="fw-bold">Duration: {duration}</div>

                            </div>

                            

                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </>
    );
};

export default AllOrder;