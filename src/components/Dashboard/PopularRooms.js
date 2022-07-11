import React, { useState } from 'react';
import { useEffect } from 'react';
import fetcher from '../../api/fetcher';
import Slider from "react-slick";
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import PopularRoomCard from './PopularRoomCard';
const PopularRooms = () => {
    const [rooms, setRooms] = useState([])
    const [indexs, setIndex] = useState(0)
    useEffect(() => {
        (async () => {
            const { data } = await fetcher.get('/getRoom/all-rooms')
            setRooms(data)
            console.log(data)
        })()
    }, [])

    const settings = {
        infinite: true,
        lazyLoad:true,
        slidesToShow: 3,
        centerMode:true,
        speed: 1000,
        // slidesToScroll: 1,
        centerPadding:0,
        beforeChange: (current, next) => setIndex(next),
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
    console.log(rooms)
    return (
        <div className='mb-20'>
            <div className='mt-20'>
                <h1 className='text-2xl font-bold'>Popular Rooms</h1>
                <div className='mt-20 justify-content-center '>
                    <Slider {...settings}>
                        
                        {
                            rooms.slice(0,4).map((room, index) => <PopularRoomCard
                                index={index}
                                indexs={indexs}
                                key={room._id}
                                room={room}
                            />)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PopularRooms;