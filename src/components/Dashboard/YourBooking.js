import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading';
import img from '../../assets/images/single-01.png'
import { BiBed } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { format, parseISO } from 'date-fns';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import room from '../../assets/images/room1.jpg'
import room1 from '../../assets/images/room1.jpg'
import room2 from '../../assets/images/room2.jpg'
import room3 from '../../assets/images/room3.jpg'
import room4 from '../../assets/images/room4.jpg'
import room5 from '../../assets/images/room5.jpg'
const YourBooking = () => {
    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    const { userImg, _id } = userData || {}
    const { loading, data } = useQuery(['book-room', user], () => fetcher(`getRoom/book-room?email=${user?.email}`))
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const custom = '../../assets/'

    useEffect(() => {
        (async () => {
            const { data } = await fetcher(`user/user-data?email=${user?.email}`)
            setUserData(data)
        })()
    }, [user])
    const { roomType, price, ratings, city, booked, img } = data?.data[0] || {}
    // console.log(data.data)

    const date = JSON.parse(localStorage.getItem('time-zone'))
    const bookingDate = format(parseISO(date?.date[0]?.startDate), `EEEE,MMMM dd yyy 'at' p`)
    const rooms = [img, room1, room2, room3, room4, room5]
    const settings = {
        customPaging: function (i) {
            console.log(i)
            return (
                <div className='w-[100px] mr-4'>
                    <img className=' mr-20 h-[20px] object-cover' src={rooms[i]} alt='' />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots custom-indicator",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if (loading) {
        return <Loading />
    }
    return (
        <div className='px-5 py-9'>
            {
                data?.data.length === 0 ? <div>
                    <h1 className='text-center text-3xl text-red-500 mt-20'>You don't have any booking</h1>
                </div> :
                    <div>
                        <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 flex gap-9'>
                            <div class="avatar ">
                                <div class="w-24 rounded-full p-2 ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={`${userImg ? userImg : img}`} alt='userImage' />
                                </div>

                            </div>
                            <div >
                                <h1 className='mb-1'>{user?.displayName}</h1>
                                <p className='text-gray-500'>#Id-{_id}</p>
                            </div>
                        </div>

                        <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 flex gap-9 mt-7 ' >
                            <div className='w-full'>
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h1 className='text-2xl font-[600] mb-2'>{city}</h1>
                                            <p>#R-245T345</p>
                                        </div>
                                        <div>
                                            <button className='btn bg-[#F8857D] text-white'>{booked && 'Booked'}</button>
                                        </div>
                                    </div>
                                    <div className='flex gap-20 mt-5 mb-3'>
                                        <div >
                                            <p>Type</p>
                                            <div className='flex items-center gap-4 mt-2'>
                                                <span className='text-[#F8857D] text-xl'><BiBed /></span>
                                                <h1>{roomType}</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Room Capacity</p>
                                            <div className='flex items-center gap-4 mt-2'>
                                                <span className='text-[#F8857D] text-xl'><AiOutlineUser /></span>
                                                <h1>3-5 Person</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1>Booking Date</h1>
                                    <p className='mt-3 flex items-center gap-4'>
                                        <span className='text-[#F8857D] text-xl'><AiOutlineCalendar /></span>
                                        {bookingDate}
                                    </p>
                                </div>
                                <div className='mt-5'>
                                    <h1>Facilities</h1>
                                    <div className='flex gap-2 items-center mt-3 mb-3'>
                                        <span ><AiFillCheckCircle
                                            className='text-green-500 text-2xl '
                                        /></span>
                                        <p>Room Full AC</p>
                                    </div>
                                    <div className='flex gap-2 items-center mt-3 mb-3'>
                                        <span ><AiFillCheckCircle
                                            className='text-green-500 text-2xl '
                                        /></span>
                                        <p>Shower</p>
                                    </div>
                                    <div className='flex gap-2 items-center mt-3 mb-3'>
                                        <span ><AiFillCheckCircle
                                            className='text-green-500 text-2xl '
                                        /></span>
                                        <p>Bathup</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='px-12'>
                            <Slider {...settings}>
                                {
                                    rooms.map(room => <div
                                        className='mt-7'
                                    >
                                        <img className='w-full object-cover h-[75vh]' src={room} alt="" />
                                    </div>)
                                }
                            </Slider>


                        </div>
                        <div className='mt-16 flex justify-between items-center'>
                            <div>
                                <h1>You have booked {data?.data?.length} items</h1>
                            </div>
                            <div>
                                <button className='btn bg-[#F8857D] text-white mr-4'>Previous</button>
                                <button className='btn bg-[#F8857D] text-white mr-4'>Next</button>
                            </div>
                        </div>
                    </div>

            }
        </div>
    );
};

export default YourBooking;