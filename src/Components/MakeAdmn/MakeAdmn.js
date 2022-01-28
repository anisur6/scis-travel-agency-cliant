import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MakeAdmn = () => {
    const [email, setEmail] = useState('')


    const handleOnBlur = e => {

        setEmail(e.target.value);
    }



    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://drneshop-online.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            console.log(data);
        })

        e.preventDefault();
    }
    return (
        <div>
            <h2 className="h2">Make<span>Admin</span></h2>

            <Form onClick={handleAdminSubmit}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Enter Email address</Form.Label>
                    <Form.Control type="email"
                        name="email" onBlur={handleOnBlur} placeholder="Enter email" />

                </Form.Group>

                <Button type="submit" className="button-success">Make Admin</Button>
            </Form>
        </div>
    );
};

export default MakeAdmn;