import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllOrder from '../AllOrder/AllOrder';

const AllOrders = () => {



    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://drneshop-online.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])

    return (
        <>
            <div className="g-4 my-5">
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        {
                            order.map(single => <AllOrder bookedService={single.bookedService}></AllOrder>)
                        }


                    </Row>

                </Container>
            </div>
        </>
    );
};

export default AllOrders;