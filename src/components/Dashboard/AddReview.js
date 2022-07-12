import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';
const AddReview = () => {

    const [rating, setRating] = useState(0)
    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    useEffect(() => {
        (async () => {
            const { data } = await fetcher(`user/user-data?email=${user?.email}`)
            setUserData(data)
        })()
    }, [user])
    console.log(userData)
    const handleStar = rating => {
        setRating(rating)
        console.log(rating)
    }
    const handleSubmit = async e => {
        e.preventDefault()
        if (e.target.review.value === '') {
            return
        }
        const { data } = await axios.put(`http://localhost:5000/review/put-review`,{
            review:e.target.review.value,
            rating,
            img:userData?.img,
            name:userData?.name,
            accepted:false
        })
        console.log(data)
        e.target.reset()
    }
    return (
        <div>
            <h1 className='text-2xl text-center font font-bold my-9'>Add Your Review</h1>
            <div className='w-[70%] mx-auto '>
                <div className='flex justify-center mb-9'>
                    <ReactStars
                        count={5}
                        onChange={handleStar}
                        size={34}
                        activeColor="#ffd700"
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='w-full mt-5'>
                        <textarea class="textarea textarea-bordered w-full min-h-[160px]" name='review' placeholder="Add Your Review"></textarea>
                    </div>
                    <div className='text-center mt-3' >
                        <input className='btn btn-primary' type="submit" value='Submit' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;