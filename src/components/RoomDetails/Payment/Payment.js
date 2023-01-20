import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { format, parseISO } from 'date-fns';
import { ImCross } from 'react-icons/im';
import useData from '../../hooks/useData';
const Payment = () => {

    const result = JSON.parse(localStorage.getItem('time-zone'))
    const id = JSON.parse(localStorage.getItem('roomId'))
    const [data]=useData(id)
    const { desc, ratings, price, img } = data || {}
    const startDate = format(parseISO(result?.date[0].startDate), 'dd/MM/yy')
    const endDate = format(parseISO(result?.date[0].endDate), 'dd/MM/yy')
    const night = Number(endDate.split('/')[0]) - Number(startDate.split('/')[0])+1
    console.log(console.log(night+1))
    const serviceFee=21
    const cleaningFee=10
    /* useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://hotel-server-2.vercel.app/getRoom/room/${id}`)
            setData(data)
        })()
    }, [id]) */
    console.log(data)
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-8 mt-9 px-5 mb-14'>
                <div className=''>
                    <div>
                        <div className='grid lg:grid-cols-3 gap-0 font-bold  xl:text-[15px] text-[12px] text-gray-400
                        '>
                            <NavLink  to='/payment' className={({ isActive }) => isActive ? 'flex items-center text-black' : 'flex items-center'}  >
                                1.Reviews House Rules <BiChevronRight
                                    className='md:text-[20px] text-[16px]'
                                /></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'flex items-center text-black' : 'flex items-center'}  to='whosComing' >2.Who's Coming ? <BiChevronRight
                                className='text-[24px]'
                            /></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'flex items-center text-black' : 'flex items-center'}  to='confirmPayment'>1.Confirm And Pay <BiChevronRight
                                className='text-[24px]'
                            /></NavLink>
                        </div>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className='flex md:justify-end justify-center mt-9 md:mt-0'>
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
                            <div className='mt-7'>
                                <div>
                                    <p className='mb-2 font-bold'>Dates</p>
                                    <div className='border-solid border-[1px] p-2 f border-[#9e9a9a]'>
                                        <div className='flex items-center justify-evenly font-[600]'>
                                            {startDate}
                                            <BiRightArrowAlt />
                                            {endDate}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-9'>
                                    <div className='my-5'>
                                        <p className='flex justify-between items-center'><span className='flex justify-between items-center'>${price}  * {night}  nights </span><span
                                         className='pr-5'
                                        >${night*price}</span></p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className='my-5'>
                                        <p className='flex justify-between items-center'><span className='flex justify-between items-center'>Cleaning fee </span><span
                                         className='pr-5'
                                        >${cleaningFee}</span></p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className='my-5'>
                                        <p className='flex justify-between items-center'><span className='flex justify-between items-center'>Service fee </span><span
                                         className='pr-5'
                                        >${serviceFee}</span></p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className='my-5 font-bold'>
                                        <p className='flex justify-between items-center'><span className='flex justify-between items-center'>Total </span><span
                                         className='pr-5'
                                        >${night*price + serviceFee + cleaningFee}</span></p>
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