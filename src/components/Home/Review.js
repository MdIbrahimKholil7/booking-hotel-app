import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Slider from "react-slick";
import fetcher from '../../api/fetcher';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    const [num, setNum] = useState(0)
    useEffect(() => {
        (async () => {
            const { data } = await fetcher.get('/review/accepted-review')
            console.log(data)
            setReviews(data)
        })()
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode:true,
        // slidesToScroll: 1,
        beforeChange: (current, next) => setNum(next),
        responsive: [
            
            {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll: 1,
            }
        },
            {
            breakpoint:968,
            settings:{
                slidesToShow:2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings:{
                slidesToShow:1,
                slidesToScroll: 1,
            }
        },
    ]
    };

    return (
        <div className='mt-20 mb-[120px] py-[60px] overflow-x-hidden'>
            <div>
                <div className='text-center'>
                    <h1 className='text-4xl font-oleo text-center '><span className='relative room-title1 ' >What Our Customer's Say</span></h1>
                </div>
                <div className='mt-[160px]'>
                    <div>
                        <Slider {...settings}>
                            {
                                reviews.map((review,index)=><ReviewCard
                                key={review._id}
                                index={index}
                                num={num}
                                review={review}
                                />)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;