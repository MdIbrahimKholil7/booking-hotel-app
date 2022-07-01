import { format, parseISO } from 'date-fns';
import React from 'react';
import { FaBabyCarriage } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { FaSmoking } from 'react-icons/fa';
const ReviewHouse = () => {

    const time = JSON.parse(localStorage.getItem('time-zone'))

    const startDate = format(parseISO(time?.date[0]?.startDate), 'dd/MM/yy').split('/')
    const endDate = format(parseISO(time?.date[0].endDate), 'dd/MM/yy').split('/')
    const startDate1 = format(parseISO(time?.date[0].startDate), 'PP').split('/')
    const endDate2 = format(parseISO(time?.date[0].endDate), 'PP').split('/')
    const startDate2 = format(parseISO(time?.date[0].startDate), 'PPPP').split('/')
    const endDate3 = format(parseISO(time?.date[0].endDate), 'PPPP').split('/')
    const result = endDate[0] - startDate[0]
    
    return (
        <div>
            <div>
                <h1 className='font-bold text-3xl my-5'>Review house rules</h1>
                <p className='text-xl font-bold font-sans'>{Number(result) + 1} nights in {time.place}</p>
                <div className='flex justify-between gap-5 flex-col lg:flex-row mt-5'>
                    <div className='flex '>
                        <span className='bg-gray-200 rounded-md p-1 flex justify-center items-center mr-4 font-bold'>{startDate1[0].split(',')[0]}</span>
                        <div className='text-[#9e9a9a]'>
                            <p >{startDate2[0].split(',')[0]} check-in</p>
                            <p>After 12:00 AM</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <span className='bg-gray-200 rounded-md p-1 flex justify-center items-center mr-4 font-bold'>{endDate2[0].split(',')[0]}</span>
                        <div className='text-[#9e9a9a]'>
                            <p>{endDate3[0].split(',')[0]} checkout</p>
                            <p>After 11:00 AM</p>
                        </div>
                    </div>
                </div>
                <p className='mt-5'>Self check-in with building staff</p>
                <div className='divider'></div>
                <h2>Things tp keep in mind</h2>
                <div>
                    <div className='flex items-center mb-3 mt-5 font-[500]'>
                        <span className='border-solid border-[1px] p-2 f border-[#9e9a9a] flex justify-center items-center mr-3 '>
                            <FaBabyCarriage
                                className='w-5'
                            />
                        </span>
                        <p>Suitable for children and Infants</p>
                    </div>
                    <div className='flex items-center mb-3 mt-5 font-[500]'>
                        <span className='border-solid border-[1px] p-2 f border-[#9e9a9a] flex justify-center items-center mr-3 '>
                            <MdPets
                                className='w-5'
                            />
                        </span>
                        <p>Pets allowed</p>
                    </div>
                    <div className='flex items-center mb-3 mt-5 font-[500]'>
                        <span className='border-solid border-[1px] p-2 f border-[#9e9a9a] flex justify-center items-center mr-3 '>
                            <ImCross
                                className='w-5'
                            />
                        </span>
                        <p>No parties or event</p>
                    </div>
                    <div className='flex items-center mb-3 mt-5 font-[500]'>
                        <span className='border-solid border-[1px] p-2 f border-[#9e9a9a] flex justify-center items-center mr-3 '>
                            <FaSmoking
                                className='w-5'
                            />
                        </span>
                        <p>Smoking allowed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewHouse;