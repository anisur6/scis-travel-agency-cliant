import React from 'react';
import { Button, Table } from 'react-bootstrap';
import './ManageAll.css'


const ManageAll = (props) => {
    const { _id, img, name, price } = props.bookedService;



    return (
        <div>


            <Table className="table-success" striped bordered hover>

                <tbody>
                    <tr>
                        <td className="align-middle w-25">{_id}</td>
                        <td className="align-middle"><img className="w-50 d-flex" src={img} alt="" /></td>
                        <td className="align-middle w-25">{name}</td>
                        <td className="align-middle w-25">$ {price}</td>
                        <td className="align-middle">
                            <div>
                                <Button variant="success">Update</Button>
                            </div></td>

                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default ManageAll;