import React from 'react';
import banner from '../../assets/images/banner.jpg'
const Banner = () => {
    return (
        <div
            style={{
                background: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'

            }}
        >
            <div class="hero h-[70vh]">
                <div class="hero-overlay bg-[#000] bg-opacity-[0.3]"></div>
                <div class="hero-content justify-start w-full text-start text-neutral-content">
                    <div class="max-w-md">
                        <h1 className='font-oleo text-white text-3xl mb-3'>Welcome to Vilena</h1>
                        <h1 class="mb-5 text-5xl font-bold font leading-[55px]  text-white">
                            <span>Everything </span>
                            is here right where
                            you need it
                        </h1>

                        <button class="btn bg-[#2523a2fb] outline-none text-white border-0">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;