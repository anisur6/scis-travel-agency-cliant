import React from 'react';
import './Nopage.css'
import error from './../../images/error.jpg'
import { Link } from 'react-router-dom';

const Nopage = () => {
    return (
        <div className="content">
            <img src={error} alt="" />

            <Link to="/home">
                <button className="btn btn-dark text-info fw-bold fs-3 my-3">Back to Home</button>
            </Link>
        </div>
    );
};

export default Nopage;