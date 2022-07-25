import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import fetcher from '../../api/fetcher';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await fetcher.get('/accepted-review')
            console.log(data)
            setReview(data)
        })()
    }, [])
    return (
        <div className='mt-20'>
            <div>
                <div className='text-center'> 
                <h1 className='text-4xl font-oleo text-center '><span className='relative room-title1 ' >What Our Customer Say's</span></h1>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;