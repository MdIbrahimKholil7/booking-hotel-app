import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { format } from 'date-fns';
const SearchCard = ({ elem, location }) => {
    const { city, desc, roomType, price, img, ratings } = elem || {}
    console.log(location)
    const startDate = format(location.state.date[0].startDate, 'dd/MM/yy').split('/')
    const endDate = format(location.state.date[0].endDate, 'dd/MM/yy').split('/')
    const result = Number(endDate[0]) - Number(startDate[0]) + 1
    console.log(result)
    return (
        <div>
             <div class="card card-side h-[280px] bg-base-100 shadow-xl mb-9 hidden lg:flex">
                <div>
                    <img className='w-[280px] h-full object-cover' src={img} alt={roomType} />
                </div>
                <div class="card-body">
                    <h2 class="card-title">{roomType}</h2>
                    <p className=''>{desc}</p>
                    <p className='mt-1'>With Air Condition</p>
                    <div class="card-actions justify-between items-center">
                        <div className='flex justify-between items-center md:w-[70%] w-full'>
                            <div className='flex'>
                                {
                                    [...Array(Number(ratings))].map((star, index) => <AiFillStar
                                        key={index}
                                        className='md:w-5 w-3 text-yellow-600'
                                    />)
                                }
                            </div>

                            <div>
                                <h3 className='mb-1'><span className='font-bold md:text-xl text-[17px]'>${price}/</span>night</h3>
                                <p className='text-[13px] text-gray-500'>${price * result} total</p>
                            </div>
                        </div>
                        <button class="btn btn-primary">Book</button>
                    </div>
                </div>
            </div> 

            {/* mobile card  */}
            <div class="card lg:card-side bg-base-600 w-80 px-2 shadow-xl lg:hidden mb-7">
               <img src={img} alt="Album" />
                <div class="card-body">
                    <h2 class="card-title">{roomType}</h2>
                    <p className=''>{desc}</p>
                    <p className='mt-1'>With Air Condition</p>
                    <div class="card-actions justify-end">
                        <div className='flex justify-between items-center md:w-[70%] w-full'>
                            <div className='flex'>
                                {
                                    [...Array(Number(ratings))].map((star, index) => <AiFillStar
                                        key={index}
                                        className='md:w-5 w-3 text-yellow-600'
                                    />)
                                }
                            </div>

                            <div>
                                <h3 className='mb-1'><span className='font-bold md:text-xl text-[17px]'>${price}/</span>night</h3>
                                <p className='text-[13px] text-gray-500'>${price * result} total</p>
                            </div>
                        </div>
                        <button class="btn btn-primary">Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;