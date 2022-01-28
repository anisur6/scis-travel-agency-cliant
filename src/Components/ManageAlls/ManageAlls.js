import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ManageAll from '../ManageAll/ManageAll';

const ManageAlls = () => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://drneshop-online.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [])

  
    
    return (
        <div>
            <Container>
                <Table  className="table-info"><thead>
                    <tr className="align-middle">
                        <th>Producr ID</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Status</th>
                    </tr>
                </thead></Table>


                {
                    // course.map(single => <Service service={single}></Service>)
                    booking.map(single => <ManageAll key={single._id} bookedService={single.bookedService}></ManageAll>)
                }

            </Container>
        </div>
    );
};

export default ManageAlls;