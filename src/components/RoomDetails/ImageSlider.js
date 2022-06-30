import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ImageSlider = ({ img }) => {

   
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // const room = [img, room1, room2, room3, room4, room5]
    return (
        <div>
            <Slider {...settings}>
{/* 
                {
                    room.map((img, index) => <div>
                        <img
                            key={index}
                            className='w-full h-[90vh] object-cover'
                            src={img} alt='room pic' />
                    </div>)
                }

 */}
            </Slider>
        </div>

    );
};

export default ImageSlider;