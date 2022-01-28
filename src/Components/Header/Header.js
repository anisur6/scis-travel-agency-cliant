import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const { logOut, user } = useAuth();

    return (

        <>
            <Navbar bg="dark" text="light" expand="lg">
                <Container fluid>

                    <Navbar.Brand href="#home">
                        <h1 className='logo-font text-light'>TRAVEL-VALLY</h1>
                    </Navbar.Brand>

                    <Navbar.Toggle className="bg-light" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="mx-auto my-2  me-3 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>


                            <Link className="linkStyle" to="/home">Home</Link>
                            <Link className="linkStyle" to="/products">All Plans</Link>
                            <Link className='linkStyle' to="/contact">Contact</Link>

                            {user.email && <Link className="linkStyle" to="/dashboard">DashBoard</Link>}






                        </Nav>
                        <div className="d-flex">
                            {
                                user?.email && <div><img className="rounded-circle me-3" width="40px" src={user.photoURL} alt="" /><span className="me-2 text-danger">{user.displayName}</span></div>
                            }


                            {
                                user?.email ? <Button className="btn" variant="warning" onClick={logOut}>LogOut</Button>
                                    :
                                    <Link to="/login">
                                        <Button className="btn" variant="danger">Login/Register</Button>
                                    </Link>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;