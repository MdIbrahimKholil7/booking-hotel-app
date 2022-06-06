import React from 'react';

const RoomsCard = ({ room }) => {
    const { roomType, city, desc, img, price } = room || {}
    return (
        <div>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <img className='h-[300px]' src={img} alt={roomType} />
                <div class="card-body">
                    <h2 class="card-title text-[#1b2857fb]">
                        {roomType}
                    </h2>
                    <p className='text-gray-500'>{desc}</p>
                    <div class="card-actions items-center justify-start">
                        <p className='text-2xl font-bold'>{price}<span className='text-gray-500 text-xl font-[400]' >/Night</span></p>
                        <button class="btn btn-outline btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;