import React from 'react';

const ReviewCard = ({ review, index, num }) => {
    console.log(review)
    const { name, review: reviews, img, rating, } = review || {}
    
    return (
        <div>
            <div>
                <div className='flex justify-center items-center '>
                    <div 
                     className={`gap-5 ${index === num ? 'reviewCard':'review'} relative py-5`}
                    >
                        
                            <img className='h-[170px] mx-auto w-[170px] rounded-full object-cover ' src={img} alt="Shoes" />
                    
                        <div class="card-body items-center text-center">
                           
                            <p className='font-bold text-[25px]'>{name}</p>
                            <div class="card-actions">
                                <p>{reviews.slice(0,90)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;