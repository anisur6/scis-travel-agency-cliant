import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Booking = () => {
    const { user } = useAuth();
    // console.log(user.displayName);
    const { register, handleSubmit, reset } = useForm();
    const { userId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://drneshop-online.herokuapp.com/services/${userId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])




    const onSubmit = data => {
        data.bookedService = service;
        fetch('https://drneshop-online.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    window.alert('Are you sure to book this ?')
                    reset();
                }
            })

    };



    return (
        <div>
            <Container>
                <Row md={2} xs={1} className="gx-4">
                    <Col className="mt-5">
                        <Card className="bg-dark text-white border-0 my-5">
                            <Card.Img src={service.img} alt="Card image" />
                            <Card className="border-0">
                                <Card.Title className="text-dark fw-bold fs-1">{service.name}</Card.Title>
                                <Card.Text className="text-dark fw-bold fs-4 text-start">
                                    {service.description}
                                    <hr />
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
                                    </div><hr />
                                    <div>
                                        <h5 className="fw-bold">Price :  $ {service.price}</h5>
                                        <hr />
                                        <h5 className="fw-bold">Quantity :   {service.duration} </h5>
                                    </div>
                                </Card.Text>


                                <hr />

                            </Card>
                        </Card>
                    </Col>

                    <Col className="mt-5">
                        <h2 className="text-center">Proceed To Booking</h2>

                        {
                            user.email ? <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control mt-3" {...register("name")} value={user.displayName} />

                                <input className="form-control mt-3" {...register("email")} value={user.email} />
                                <input className="form-control mt-3" placeholder="your address" {...register("address")} required />
                                <input className="form-control mt-3" placeholder="your number" type="number" {...register("phone")} required />
                                <input className="form-control mt-3 btn btn-md btn-warning fw-bold" type="submit" />
                                <Link to="/home">
                                    <button className="form-control mt-3 btn btn-success fw-bold">Back to Home</button>
                                </Link>
                            </form> : ''
                        }
                    </Col>


                </Row>


            </Container>

        </div>
    );
};

export default Booking;