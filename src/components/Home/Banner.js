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
            <div class="hero h-[76vh]">
                <div class="hero-overlay bg-[#000] bg-opacity-[0.4]"></div>
                <div class="hero-content justify-start w-full text-start text-neutral-content">
                    <div class="max-w-md">
                        <h1 className='font-oleo text-white text-2xl md:text-3xl mb-3'>Welcome to Vilena</h1>
                        <h1 class="mb-5 text-4xl md:text-5xl font-[800] font leading-7 text-white">
                            <span>Everything </span>
                            is here right where
                            you need it
                        </h1>
                        <button class="btn bg-[#1b2857fb] outline-none text-white border-0">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;