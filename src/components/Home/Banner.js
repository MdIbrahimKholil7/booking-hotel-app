import React from 'react';
import banner from '../../assets/images/banner.jpg'
import { motion } from 'framer-motion'
const Banner = () => {

    const span1_Variants = {
        show: {
            y: 0,
            transition: {
                delay: .2,
                ease: 'linear',
                duration: .4
            },
            opacity: 1
        },
        hide: {
            y: 15,
            opacity: 0,
            delay: .5,
        }
    }
    const span2_Variants = {
        show: {
            y: 0,
            transition: {
                delay: .5,
                ease: 'linear',
                duration: .4
            },
            opacity: 1
        },
        hide: {
            y: 15,
            opacity: 0,
            delay: .5,
        }
    }
    const span3_Variants = {
        show: {
            y: 0,
            transition: {
                delay: .7,
                ease: 'linear',
                duration: .4
            },
            opacity: 1
        },
        hide: {
            y: 15,
            opacity: 0,
            delay: .5,
        }
    }
    
    return (
        <div
            style={{
                background: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'

            }}
        >
            <div class="hero h-[76vh] overflow-x-hidden">
                <div class="hero-overlay bg-[#000] bg-opacity-[0.4]"></div>
                <div class="hero-content justify-start w-full text-start text-neutral-content">
                    <div class="max-w-md">
                        <h1 className='font-oleo text-white text-2xl md:text-3xl mb-3'>Welcome to Vilena</h1>
                        <h1 class="mb-5 text-4xl md:text-5xl font-[800] font leading-7 text-white">
                            <motion.span
                            variants={span1_Variants}
                            initial='hide'
                            animate='show'
                            className='block'
                            >Everything  is here</motion.span>
                            <motion.span
                             variants={span2_Variants}
                             initial='hide'
                             animate='show'
                             className='block'
                            > right where you</motion.span>
                            <motion.span
                              variants={span3_Variants}
                              initial='hide'
                              animate='show'
                              className='block'
                            > need it</motion.span>
                        </h1>
                        <button class="btn bg-[#1b2857fb] outline-none text-white border-0">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;