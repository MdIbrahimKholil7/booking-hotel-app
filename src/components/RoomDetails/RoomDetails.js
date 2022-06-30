import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { AiTwotoneHome } from 'react-icons/ai';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { GiSpray } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
const RoomDetails = () => {
    const { id } = useParams()
    const [singleData, setSingleData] = useState({})
    console.log(singleData)
    const { city, desc, img, ratings, price, roomType } = singleData || {}
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/getRoom/room/${id}`)
            setSingleData(data)
        })()
    }, [id])
    return (
        <div className='mt-9'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content justify-between w-full gap-5 grid lg:grid-cols-2">
                    <div class="text-center lg:text-left px-5">
                        <h1 class="text-xl mb-5 font-bold gap-1 flex text-indigo-700">
                            <span 
                            className=''
                            >
                                <ImLocation2
                                    className='w-5 '
                                />
                            </span> <span className=''>{city}</span></h1>
                        <h1 className='text-3xl font-bold'>{desc}</h1>
                        <div class="divider my-7"></div>
                        <div>
                            <article className='leading-7 text-[18px]'>
                                <p className='mb-7 mt-9'>
                                    Enjoy our elegant 40 m² guest rooms, designed in warm beige tones and tailored to the needs of private and business travelers alike.

                                    All rooms have a large marble bathroom, a double bed, air conditioning, an additional work area with free internet access and a walk-in closet.
                                </p>

                                <p>
                                    Our superior rooms impress with a wonderful view of the city and the adjacent park.
                                    Additional services:
                                    24 hour room service
                                    Bathrobe, slippers
                                    Daily newspaper on request
                                    Welcome gifts:
                                    Fruit basket
                                    1 bottle of mineral water
                                    Coffee and tea
                                </p>
                            </article>
                            <div class="divider"></div>

                            <div>
                                <div className='flex gap-4 mb-9'>
                                    <AiTwotoneHome
                                        className='text-black'
                                    />
                                    <div>
                                        <h3 className='text-[18px] font-bold'>Entire Home</h3>
                                        <p>You'll have the condominium to your self</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mb-9'>
                                    <BsFillCheckSquareFill
                                        className='text-black'
                                    />
                                    <div>
                                        <h3 className='text-[18px] font-bold'>Self Check-In</h3>
                                        <p>You can check in with the doorman</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mb-9'>
                                    <GiSpray
                                        className='text-black'
                                    />
                                    <div>
                                        <h3 className='text-[18px] font-bold'>Sparkling Clean</h3>
                                        <p>10 recent guest said this place is sparkling clean</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mb-9'>
                                    <FaUserCircle
                                        className='text-black'
                                    />
                                    <div>
                                        <h3 className='text-[18px] font-bold'>Rowdra is a superhost</h3>
                                        <p>Superhost are experienced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card justify-end  w-full shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                {/* <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RoomDetails;