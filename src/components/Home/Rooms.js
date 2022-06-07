import React, { useEffect, useState } from 'react';
import fetcher from '../../api/fetcher';
import RoomsCard from './RoomsCard';

const Rooms = () => {
    const [rooms, setRoom] = useState([])
   useEffect(()=>{
       (async()=>{
        const {data}=await fetcher.get('room')
        setRoom(data)
       })()
   },[])
   console.log(rooms)
    return (
        <div className='my-9 px-5'>
            <div>
            <h1 className='text-4xl font-oleo text-center '><span className='relative room-title ' >Our Rooms</span></h1>
            <p className='text-center my-5 tracking-[7px] md:text-[17px] text-[14px] text-gray-500'>ACROSS THE STREET FROM THE ORDINARY</p>
            </div>
            <div className='grid lg:grid-cols-3 justify-center md:grid-cols-2 gap-x-7 gap-y-9 mt-20'>
                {
                    rooms.map(room=><RoomsCard
                    key={room._id}
                    room={room}
                    />)
                }
            </div>
        </div>
    );
};

export default Rooms;