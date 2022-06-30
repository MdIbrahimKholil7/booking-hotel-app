import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
const Payment = () => {
    const location=useLocation()
    console.log(location)
    return (
        <div>
            <div className='grid grid-cols-2 mt-9 px-5 mb-14'>
                <div>
                    <div>
                        <div className='flex justify-between font-bold text-gray-400 xl:text-[17px] text-[14px]
                        '>
                            <Link to='/payment' className='flex items-center '>1.Reviews House Rules <BiChevronRight
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