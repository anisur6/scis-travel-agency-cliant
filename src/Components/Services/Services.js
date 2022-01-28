import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services'

const Services = () => {
    const [course, setcourse] = useState([]);

    useEffect(() => {
        fetch('https://drneshop-online.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])

    return (
        <div className="courseclass">
            <Container className="my-5">
                <Row xs={1} md={3} className="g-2">
                    {
                        course.map(single => <Service service={single}></Service>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;