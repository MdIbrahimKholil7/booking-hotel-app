import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { format, parseISO } from 'date-fns';
const Payment = () => {

    const result = JSON.parse(localStorage.getItem('time-zone'))
    const [data, setData] = useState({})
    const { desc, ratings, price, img } = data || {}
    const id = JSON.parse(localStorage.getItem('roomId'))
    const startDate = format(parseISO(result?.date[0].startDate), 'dd/MM/yy')
    const endDate = format(parseISO(result?.date[0].endDate), 'dd/MM/yy')
    console.log(id)
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/getRoom/room/${id}`)
            setData(data)
        })()
    }, [id])
    console.log(data)
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-8 mt-9 px-5 mb-14'>
                <div className=''>
                    <div>
                        <div className='grid lg:grid-cols-3 gap-0 font-bold text-gray-400 xl:text-[15px] text-[12px]
                        '>
                            <Link to='/payment' className='flex items-center '>
                                1.Reviews House Rules <BiChevronRight
                                    className='text-[24px]'
                                /></Link>
                            <Link to='whosComing' className='flex items-center'>2.Who's Coming ? <BiChevronRight
                                className='text-[24px]'
                            /></Link>
                            <Link to='confirmPayment' className='flex items-center'>1.Confirm And Pay <BiChevronRight
                                className='text-[24px]'
                            /></Link>
                        </div>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='font-bold mb-3 text-[18px]'>{desc}</h1>
                                    <p className='flex items-center '><AiFillStar
                                        className='w-5 text-yellow-600 mr-2'
                                    /><span className='font-bold'> {ratings}</span>(20 reviews)</p>
                                </div>
                                <img className='w-24 rounded-xl' src={img} alt="" />
                            </div>
                            <div>
                                <div>
                                    <p className='mb-2 font-bold'>Dates</p>
                                    <div className='border-solid border-[1px] p-2 f border-[#9e9a9a]'>
                                        <div className='flex items-center justify-evenly font-[600]'>
                                            {startDate}
                                            <BiRightArrowAlt/>
                                            {endDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;