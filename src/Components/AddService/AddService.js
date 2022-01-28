import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddService.css'
import sideImg from './../../images/addService.png'



const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://drneshop-online.herokuapp.com/services', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    window.alert('Are you Sure to Add ?');
                    reset();
                }
            })
    };


    return (
        <div className="add-service">
            <Container>
                <h2 className="h2 my-5">ADD  <span>SERVICES</span></h2><hr />

                <Row>
                    <Col md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input className="p-2" {...register("name", { required: true, maxLength: 20 })} placeholder="name" />

                            <textarea className="p-2" {...register("description")} placeholder="Add description" />

                            <input className="p-2" type="number" {...register("price")} placeholder="price" />

                            <input className="p-2" type="number" {...register("duration")} placeholder="Number of Quantity" />

                            <input className="p-2" {...register("img")} placeholder="image Url" />
                            <input className="p-2 text-light bg-success fw-bold" type="submit" />
                        </form>
                    </Col>

                    <Col md={6}>
                        <div className="sideImg">
                            <img src={sideImg} alt="" />
                        </div>
                    </Col>
                </Row>
                <hr />
                <Link to="/">
                    <button className="btn btn-success text-light fw-bold fs-3 my-3">Back to Home</button>
                </Link>
            </Container>
        </div>
    );
};

export default AddService;