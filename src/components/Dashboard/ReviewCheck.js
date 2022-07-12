import React, { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import ReviewCheckCard from './ReviewCheckCard';

const ReviewCheck = () => {
    const [review, setReview] = useState([])
    const [filterReview, setFilterReview] = useState([])
    const { loading, data, refetch } = useQuery(['get-review'], () => fetcher('/review/get-review'))
    const [btnStyle, setBtnStyle] = useState('all')
    useEffect(() => {
        setReview(data?.data)
        setFilterReview(data?.data)
    }, [data])
    console.log(review)

    const handleGuest = (status) => {
        if (status === 'all') {
            setBtnStyle('all')
            return setFilterReview(review)
        }
        if (status === 'published') {
            const data = review.filter(user => user.accepted === true)
            setFilterReview(data)
            setBtnStyle('Active')
            return
        }

    }

    return (
        <div className='px-5 mt-10'>
            <div>
                <h1 className='text-3xl font-bold '>Reviews</h1>
            </div>
            <div className='mt-9'>
                <div>
                    <button onClick={() => handleGuest('all')} className={`mr-7 ${btnStyle === 'all' ? 'px-3 py-2 shadow-xl rounded-md ' : ''}`}>All Status</button>
                    <button onClick={() => handleGuest('published')} className={`mr-7 ${btnStyle === 'Active' ? 'px-3 py-2 shadow-xl rounded-md ' : ' '}`}>Active</button>
                </div>
            </div>
            {
                filterReview?.map(review=><ReviewCheckCard
                key={review._id}
                review={review}
                />)
            }
        </div>
    );
};

export default ReviewCheck;