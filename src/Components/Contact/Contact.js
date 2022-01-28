import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'
import sideImg from './../../images/contact.png'


const Contact = () => {
  return (
    <div>
      <Container className="contactBase">
        <div className="my-5">
          <h1 className="header h2">Get in Touch with in  <span>one click... !!</span> </h1>
          <hr />
          <br />

          <Row md={2} sm={1} xs={1}>


            <Col className="sideImg">

              <img className="about-img" src={sideImg} alt="" />

            </Col>


            <Col className="contact">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control className="border-3 border-success" type="email" placeholder="Your Email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Massage</Form.Label>
                  <Form.Control className="border-3 border-success " as="textarea" rows={2} placeholder="Enter Your massage..." />
                </Form.Group>

                <Button className="m-1" variant="success" type="submit">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>


        </div>
      </Container>




    </div>
  );
};

export default Contact;