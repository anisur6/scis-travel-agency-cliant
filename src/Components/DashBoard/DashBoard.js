import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './DashBoard.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddRating from '../AddRating/AddRating';
import AddService from '../AddService/AddService';
import ManageAlls from '../ManageAlls/ManageAlls';
import useAuth from '../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Services from '../Services/Services';
import MakeAdmn from '../MakeAdmn/MakeAdmn';

const DashBoard = () => {
    const { logOut, user, admin } = useAuth();

    let { path, url } = useRouteMatch();

    return (
        <div>

            <Container fluid>
                <Row>
                    <Col md={2} className="bg-success text-light text-middle text-start"><h2>Admin Panel</h2>
                        <br /><hr />
                        <Link to={`${url}/`}></Link>

                        <Link to={`${url}/products`}><Button className="button"><span><i class="fas fa-search"></i></span> Explore Products</Button></Link><hr />

                        <Link to={`${url}/myorders`}><Button className="button"><span><i class="fas fa-shopping-cart"></i></span> My Orders</Button></Link><hr />

                        <Link to={`${url}/review`}><Button className="button"><span><i class="far fa-star"></i></span> Add Review</Button></Link><hr />

                        {admin && <div><Link to={`${url}/addProduct`}><Button className="button"><span><i class="fas fa-cart-plus"></i></span> Add Product</Button></Link><hr />

                            <Link to={`${url}/manageAll`}><Button className="button"><span><i class="fas fa-chart-pie"></i></span> Manage All Order</Button></Link><hr />

                            <Link to={`${url}/makeAdmin`}><Button className="button"><span><i class="fas fa-chart-pie"></i></span> Make Admin</Button></Link><hr /></div>}

                        <Link to={`${url}/payment`}><Button className="button"><span><i class="fas fa-money-check-alt"></i></span> PayMent</Button></Link><hr />




                        {/* //this is for log out */}
                        {
                            user.email && <Button className="btn my-2" variant="warning" onClick={logOut}>LogOut</Button>
                        }

                    </Col>





                    <Col md={10}>


                        {/* declare a component for showing data */}



                        <Switch>



                            <Route exact path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>


                            <Route exact path={`${path}/products`}>
                                <Services></Services>
                            </Route>

                            <Route exact path={`${path}/review`}>
                                <AddRating></AddRating>
                            </Route>




                            <Route exact path={`${path}/addProduct`}>
                                <AddService></AddService>
                            </Route>



                            <Route exact path={`${path}/manageAll`}>
                                <ManageAlls></ManageAlls>
                            </Route>

                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmn></MakeAdmn>
                            </Route>


                            <Route exact path={`${path}/payment`}>
                                <div className="payment">
                                    <img className="w-75" src="https://i.ibb.co/m06ZTzG/payment.png" alt="" />
                                    <h2>PAYMENT OPTIONS COMMING SOON.</h2>
                                </div>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;