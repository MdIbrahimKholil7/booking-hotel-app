import React from 'react';

const PopularRoomCard = ({ room,index,indexs }) => {
    console.log(room)
    const {booked,roomType}=room || {}
    return (
        <div className='w-[230px] h-[290px] '>
            <div 
                className={`gap-5 w-full h-full ${index === indexs ? 'roomCard':'room'} relative`}
            >
                <img className=' object-cover w-full h-full' src={room.img} alt="" />
                <div className='text-white absolute bottom-[40px] left-[10px]'>
                    <button className={`px-4 py-2 rounded-md text-white ${booked ? 'bg-[#F8857D]':'bg-[#78d69d]'}`}>{booked?'booked':'Available'}</button>
                    <p className='text-[18px] font-bold my-4'>{roomType}</p>
                    <p className='text-[12px] font-bold'>Type 234</p>
                </div>
            </div>
        </div>
    );
};

export default PopularRoomCard;