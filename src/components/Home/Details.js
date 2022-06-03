import React from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

const Details = () => {
    return (
        <div className='w-[90%] mx-auto text-white bg-[#1b2857fb] border-solid border-2 border-indigo-600 py-5 px-7 mt-[-36px] rounded' >
            <div className='flex justify-between items-center'>
                <div>
                    <input className='bg-transparent text-white outline-none' type="text" placeholder='Where are you going'/>
                </div>
                <div>
                    <AiFillCalendar
                    className='w-5 h-5 '
                    />
                    <span>

                    </span>
                </div>
                <div>
                    <div className='flex items-center'>
                        <span><FaUser/></span>
                        <span>
                            1 Adult - 0 Children - 0 Babies - Room-1   
                        </span>
                
                    </div>
                </div>
                <div>
                <button class="btn-xs bg-[#374ea2fb] rounded">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Details;