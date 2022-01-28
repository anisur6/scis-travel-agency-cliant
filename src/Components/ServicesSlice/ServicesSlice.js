import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const ServicesSlice = () => {
    const [course, setcourse] = useState([]);

    useEffect(() => {
        fetch('https://drneshop-online.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])

    return (
        <div>
            <Container className="my-5">
                <Row xs={1} md={3} className="g-2">
                    {
                        course.slice(0, 6).map(single => <Service service={single}></Service>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default ServicesSlice;