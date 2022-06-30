import React from 'react';
import { useLocation } from 'react-router-dom';

const ReviewHouse = () => {
    const location=useLocation()
    console.log(location)
    return (
        <div>
            <h1>This is review house</h1>
        </div>
    );
};

export default ReviewHouse;