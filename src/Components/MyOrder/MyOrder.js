import React from 'react';
import { Button, Table } from 'react-bootstrap';

const MyOrder = (props) => {

    
    
    const { _id, img, name, price } = props.order;

    
   
    return (

        <div>
             <Table className="table-success" striped bordered hover>

<tbody>
    <tr>
        <td className="align-middle">{_id}</td>
        <td className="align-middle"><img className="w-25 d-flex" src={img} alt="" /></td>
        <td className="align-middle w-25">{name}</td>
        <td className="align-middle w-25">$ {price}</td>
        <td className="align-middle">
            <div><Button variant="dark">Delete</Button>
            </div></td>

    </tr>

</tbody>
</Table>
        </div>
    );
};

export default MyOrder;