import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
const AddReview = () => {

    const [rating, setRating] = useState(0)
    const handleStar = rating => {
        setRating(rating)
        console.log(rating)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (e.target.review.value === '') {
            return
        }
        
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
                <form>
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