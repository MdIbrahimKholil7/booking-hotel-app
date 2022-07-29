import React from 'react';

const ReviewCard = ({ review, index, num }) => {
    console.log(review)
    const { name, review: reviews, img, rating, } = review || {}
    
    return (
        <div>
            <div>
                <div className='flex justify-center items-center '>
                    <div 
                     className={`gap-5 ${index === num ? 'reviewCard':'review'} relative py-5 pl-2`}
                    >
                        
                            <img className='h-[170px] mx-auto w-[170px] rounded-full object-cover ' src={img} alt="Shoes" />
                    
                        <div class="card-body sm:p-2 p-1 items-center text-center">
                           
                            <p className='font-bold lg:text-[25px] sm:text-[20px] text-[18px]'>{name}</p>
                            <div class="card-actions text-[14px] md:text-[16px]">
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