import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { IoMdKey } from 'react-icons/io';
import Chart from './Chart';
import PopularRooms from './PopularRooms';
const AllStatus = () => {
    return (
        <div className='px-5'>
            <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 flex flex-col md:flex-row gap-9 mt-7 justify-between items-center'>
                <div className='md:w-[317px] w-[278px] flex justify-center items-center'>
                    <div className='bg-[#F8857D] md:w-[317px] w-[278px] rounded-md p-[26px] text-white flex justify-between '>
                        <div className='font-bold'>
                            <p className='text-2xl'>845</p>
                            <h5>New Guest</h5>
                        </div>
                        <span className='bg-black justify-center items-center text-white rounded-md p-4 text-xl'>
                            <FaUserFriends />
                        </span>
                    </div>
                </div>
                <div className='md:w-[317px] w-[278px] justify-center items-center'>
                    <div className='bg-[#e9dbc2] md:w-[317px] w-[278px] rounded-md  p-[26px] text-white flex justify-between '>
                        <div className='font-bold text-black'>
                            <p className='text-2xl'>195</p>
                            <h5>Rooms</h5>
                        </div>
                        <div className='bg-[#efcac7] flex justify-center items-center text-[#F8857D] rounded-md p-3 text-3xl '>
                            <IoMdKey />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <PopularRooms />
            </div>
            <div>
                <Chart/>
            </div>
        </div>
    );
};

export default AllStatus;