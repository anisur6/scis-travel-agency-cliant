import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import useAuth from '../../hooks/useAuth';
// import mainImg from './../../slider.jpg'
import Ratinge from 'react-rating'




const Rating = (props) => {
    
    const { user } = useAuth();

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(
            () => {
                setLoading(false)
            }, 2000)
    }, [])
    const { name, number, description } = props.service;

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
                            <Card className="card">
                                <Card.Img className="rounded-circle w-50 mx-auto my-1" variant="top" src={user.photoURL} />
                                <Card.Body>
                                    <Card.Title className="text-center fw-bold">{name}</Card.Title>

                                    <div className="fw-normal my-1">"{description}"</div>
                                  
                                    <Ratinge
                                        initialRating={number}
                                        fullSymbol="fas fa-star"
                                        emptySymbol="far fa-star"
                                         readonly></Ratinge>
                                   




                                </Card.Body>
                            </Card>
                        </Col>
                    </Container>

            }
        </div>
    );
};

export default Rating;