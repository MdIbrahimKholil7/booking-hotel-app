import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { AiTwotoneHome } from 'react-icons/ai';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { GiSpray } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import room1 from '../../assets/images/room1.jpg'
import room2 from '../../assets/images/room2.jpg'
import room3 from '../../assets/images/room3.jpg'
import room4 from '../../assets/images/room4.jpg'
import room5 from '../../assets/images/room5.jpg'
import Loading from '../Shared/Loading';
const RoomDetails = () => {
    const { id } = useParams()
    const [singleData, setSingleData] = useState({})
    const [imgIndex, setImgIndex] = useState(0)
    const { city, desc, img, roomType } = singleData || {}
    const [load,setLoad]=useState(true)
    const navigate=useNavigate()
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://mighty-beyond-31065.herokuapp.com/getRoom/room/${id}`)
            setSingleData(data)
            setLoad(false)
        })()
    }, [id])

    // slider image array 
    const room = [img, room1, room2, room3, room4, room5]
    if(load) return <Loading/>
    // handle image slider 
    const handleIncreaseImg = (name) => {
        if (name === 'increase') {
            if (imgIndex >= room.length - 1) {
                setImgIndex(0)
                console.log('click')
            }
            else {
                setImgIndex(imgIndex + 1)
            }
        } else {
            if (imgIndex <= 0) {
                setImgIndex(room.length - 1)
            } else {
                setImgIndex(imgIndex - 1)
            }
        }
    }
    // payment route 
    const handlePayment=()=>{
        navigate('/payment')
        localStorage.setItem('roomId',JSON.stringify(id))
    }

    return (
        <div className='mt-9'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content justify-between w-full gap-5 grid lg:grid-cols-2">
                    <div class="text-center lg:text-left px-5">
                        <div>
                            <h1 class="text-xl mb-5 font-bold gap-1 flex text-indigo-700">
                                <span
                                    className=''
                                >
                                    <ImLocation2
                                        className='w-5 '
                                    />
                                </span> <span className=''>{city},Bangladesh</span></h1>
                            <h1 className='lg:text-2xl xl:text-3xl font-bold'>{desc}</h1>
                            <h3 className='font-bold mt-2 lg:text-[18] xl:text-xl mb-4'>Room Type : {roomType}</h3>
                            <button onClick={handlePayment} class="btn bg-indigo-700 text-white rounded-full hover:bg-indigo-800">Book Now</button>
                        </div>

                        <div class="divider my-7"></div>
                        <div>
                            <article className='leading-7 md:text-[18px] text-[15px]'>
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
                                <div className='flex gap-4  mb-9'>
                                    <AiTwotoneHome
                                        className='text-black'
                                    />
                                    <div>
                                        <h3 className='md:text-[18px]  font-bold text-left'>Entire Home</h3>
                                        <p className='text-left '>You'll have the condominium to your self</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mb-9'>
                                    <BsFillCheckSquareFill
                                        className='text-black'
                                    />
                                    <div>
                                        <h3 className='text-[18px] font-bold text-left'>Self Check-In</h3>
                                        <p className='text-left '>You can check in with the doorman</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mb-9'>
                                    <GiSpray
                                        className='text-black'
                                    />
                                    <div>
                                        <h3 className='text-[18px] font-bold text-left'>Sparkling Clean</h3>
                                        <p className='text-left '>10 recent guest said this place is sparkling clean</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mb-9'>
                                    <FaUserCircle
                                        className='text-black'
                                    />
                                    <div>
                                        <h3 className='text-[18px] font-bold text-left'>Rowdra is a superhost</h3>
                                        <p className='text-left '>Superhost are experienced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="justify-end w-full  bg-base-100 relative">
                        <div className='absolute top-[48%] left-[5%] text-5xl  w-[90%] mx-auto flex justify-between'>
                            <span className='cursor-pointer'>
                                <BiChevronLeft
                                    onClick={() => handleIncreaseImg("decrease")}
                                    className='bg-white rounded-full p-1'
                                />
                            </span>
                            <span className='cursor-pointer'>
                                <BiChevronRight
                                    onClick={() => handleIncreaseImg("increase")}
                                    className='bg-white rounded-full p-1'
                                />
                            </span>
                        </div>
                        <div>
                            <img className='w-full h-[90vh] object-cover'
                                src={room[imgIndex]} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RoomDetails;