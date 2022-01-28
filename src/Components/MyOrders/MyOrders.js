import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';


const MyOrders = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://drneshop-online.herokuapp.com/bookings?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    // const handleDelete = id => {
    //     const confirmDelete = window.confirm('are you sure to delete this order ?')
    //     if (confirmDelete) {
    //         const url = `http://localhost:5000/bookings/${id}`
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
                
    //         } )
    //     }
    // }

    return (
        <div>
            <Container>
                <Table className="table-info"><thead>
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
                    orders.map(order => <MyOrder id={order._id} order={order.bookedService} ></MyOrder>)
                }


            </Container>
        </div>
    );
};

export default MyOrders;