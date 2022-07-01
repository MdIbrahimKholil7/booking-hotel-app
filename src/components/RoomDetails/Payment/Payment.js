import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import { RoomInformation } from '../../../App';
import useTimeZone from '../../hooks/useTimeZone';
const Payment = () => {
    const room=React.useContext(RoomInformation)
    // const location=useLocation()
    // console.log(location)
    const result=JSON.parse(localStorage.getItem('time-zone'))
    console.log(result)
    console.log(useTimeZone())
    return (
        <div>
            <div className='grid md:grid-cols-2 mt-9 px-5 mb-14'>
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
                <div>

                </div>
            </div>
        </div>
    );
};

export default Payment;