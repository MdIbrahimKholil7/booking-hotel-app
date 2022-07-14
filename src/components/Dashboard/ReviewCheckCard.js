import React from 'react';
import userImg from '../../assets/images/single-01.png'
import { AiFillStar } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
const ReviewCheckCard = ({ review, refetch, setOpenModal }) => {
    const { name, img, rating, accepted, _id, review: reviews } = review || {}
    const [user] = useAuthState(auth)

    const handleReview = async (id) => {
        const { data } = await axios.patch(`https://mighty-beyond-31065.herokuapp.com/review/update-review`, { id })
        console.log(data)
        refetch()
    }
    const openDeleteModal = () => {
        setOpenModal(review)
    }
    return (
        <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 w-full my-7 mb-9'>
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
                        <div className='flex gap-4 mt-7'>
                            <button className={`${accepted ? "bg-[#edfaf2] text-[#78d69d]" : 'bg-[#78d69d] text-white'} text-[17px] px-3 py-1 rounded-md`}>{accepted ? <span className='flex gap-2 items-center'>Published <AiFillCheckCircle
                                className='text-[21px] text-[#78d69d]'
                            /></span> : <span onClick={() => handleReview(_id)} className='flex gap-2 items-center'>Accept <AiFillCheckCircle
                                className='text-[21px] text-white'
                            /></span>}</button>

                            <label onClick={openDeleteModal} for="deleteReview" className='bg-[#f8857d] text-white px-3 py-1 rounded-md ml-5 flex items-center justify-center gap-3'>Reject <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.50742 0 0 4.50742 0 10C0 15.4926 4.50742 20 10 20C15.4926 20 20 15.4926 20 10C20 4.50742 15.4926 0 10 0ZM14.9719 13.3148L13.3148 14.9719L10 11.6571L6.68523 14.9719L5.02812 13.3148L8.34289 10L5.02812 6.68523L6.68523 5.02812L10 8.34289L13.3148 5.02812L14.9719 6.68523L11.6571 10L14.9719 13.3148Z" fill="white"></path>
                            </svg></span></label>
                        </div>
                    </div>
                    <div className='mt-5 md:mt-0'>
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

        </div>
    );
};

export default ReviewCheckCard;