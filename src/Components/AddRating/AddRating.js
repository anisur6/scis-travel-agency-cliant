import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddRating.css'
import sideImg from './../../images/rating.png'








const AddRating = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://drneshop-online.herokuapp.com/ratings', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    window.alert('Are you Sure to Add Review ?');
                    reset();
                }
            })
    };


    return (
        <>
            <div className="add-rating">
                <Container>
                    <h2 className="h2 my-5">ADD  <span>Review</span></h2><hr />

                    <Row>
                        <Col md={6}>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="p-2" {...register("name", { required: true, maxLength: 20 })} placeholder="name" />

                                <textarea className="p-2" {...register("description")} placeholder="Add description" />

                                <input className="p-2" type="number" {...register("number")} placeholder="Rate us 1 to 5" />

                                <input className="p-2 text-light bg-success fw-bold" type="submit" />
                            </form>
                        </Col>

                        <Col>
                            <div className="sideImg">
                                <img src={sideImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Link to="/">
                        <button className="btn btn-success text-light fw-bold fs-5 my-3">Back to Home</button>
                    </Link>
                </Container>
            </div>
        </>
    );
};

export default AddRating;