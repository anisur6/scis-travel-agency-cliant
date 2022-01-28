import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Rating from '../Rating/Rating';





const Ratings = () => {
   

    const [course, setcourse] = useState([]);

    useEffect(() => {
        fetch('https://drneshop-online.herokuapp.com/ratings')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])

    return (
        <div>
            <Row xs={1} md={3} className="g-3">
                {
                    course.map(single => <Rating service={single}></Rating>)
                }
            </Row>
        </div>
    );
};

export default Ratings;