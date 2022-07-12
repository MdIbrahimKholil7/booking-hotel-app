import React from 'react';
import userImg from '../../assets/images/single-01.png'
import { AiFillStar } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
const ReviewCheckCard = ({ review }) => {
    const { name, img, rating, accepted, _id, review: reviews } = review || {}
    return (
        <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 w-full my-7'>
            <div className='flex flex-col md:flex-row gap-7'>
                <div>
                    <div className='flex gap-5'>
                        <img className='w-[90px] h-[90px] rounded-full' src={img ? img : userImg} alt="userImg" />
                        <div className=''>
                            <p className='font-[600] text-[#111214]'>{name}</p>
                            <p className='text-[#717579]'>#User-{_id.slice(0, 5)}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row mt-9 md:mt-0 justify-center items-center pl-9'>
                    <div className='pr-5'>
                        <h1 className='text-[22px] font-[500] mb-3'>I Love That Room Service</h1>
                        <article className='text-[#717579]'>
                            {reviews}
                        </article>
                    </div>
                    <div>
                        <p className='text-center text-[18px] font-bold mb-1'>{rating}</p>
                        <div className='flex gap-1'>
                            {
                                [...Array(Number(rating))].map((star, index) => <AiFillStar
                                    key={index}
                                    className='text-[#f5584d]'
                                />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='bg-[#78d69d] px-3 text-white py-1 rounded-md text-[14px]'>{accepted?<span className='flex gap-2 items-center'>Published <AiFillCheckCircle
                className='text-[21px] text-white'
                /></span>:<span className='flex gap-2 items-center'>Accept <AiFillCheckCircle
                className='text-[21px] text-white'
                /></span>}</button>
                <button></button>
            </div>
        </div>
    );
};

export default ReviewCheckCard;