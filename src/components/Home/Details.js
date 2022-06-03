import React, { useState } from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
const Details = () => {
    const [open, setOpen] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ])
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOptions = (name, quantity) => {
        setOptions(prev => {
            // console.log(prev)
            return {
                ...prev,
                [name]: quantity === 'increment' ? options[name] + 1 : options[name] - 1
            }
        })
    }
    return (
        <div className='w-[90%] mx-auto text-white bg-[#1b2857fb] border-solid border-2 border-indigo-600 py-5 px-7 mt-[-36px] rounded relative' >
            <div className='flex justify-between items-center'>
                <div>
                    <input className='bg-transparent text-white outline-none' type="text" placeholder='Where are you going' />
                </div>
                <div className='cursor-pointer' >
                    <div className='flex ' onClick={() => setOpen(!open)}>
                        <AiFillCalendar
                            className='w-5 h-5 mr-2'
                        />

                        <span>
                            {
                                `${format(date[0].startDate, 'MM/dd/yy')} to ${format(date[0].endDate, 'MM/dd/yy')}`
                            }
                        </span>
                    </div>
                    {
                        open && <span className='absolute z-10 top-[67px] left-48 '>
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                            // maxDate={date[0].startDate}
                            />
                        </span>
                    }
                </div>
                <div>
                    <div className='flex items-center'>
                        <span
                            className='mr-2'
                        ><FaUser /></span>
                        <span className='cursor-pointer' onClick={() => setOpenOptions(!openOptions)}>
                            {options.adult} Adult - {options.children} Children - {options.room} Room
                        </span>
                        {
                            openOptions && <div className='absolute top-[67px] w-[230px] bg-[#171538] p-3'>
                                <div className='flex justify-between mb-5'>
                                    <span>Adult</span>
                                    <div>
                                        <button disabled={options.adult <= 1} onClick={() => handleOptions('adult', 'decrement')} class="border-solid border-[1px] px-2 text-[18px] border-indigo-600 rounded">-</button>
                                        <span className='px-2'>{options.adult}</span>
                                        <button onClick={() => handleOptions('adult', 'increment')} class="border-solid border-[1px] px-2 text-[18px] border-indigo-600 rounded">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className='flex justify-between mb-5'>
                                    <span>Children</span>
                                    <div>
                                        <button disabled={options.children <= 1} onClick={() => handleOptions('children', 'decrement')} class="border-solid border-[1px] px-2 text-[18px] border-indigo-600 rounded">-</button>
                                        <span className='px-2'>{options.children}</span>

                                        <button onClick={() => handleOptions('children', 'increment')} class="border-solid border-[1px] px-2 text-[18px] border-indigo-600 rounded">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className='flex justify-between '>
                                    <span>Rooms</span>
                                    <div>
                                        <button disabled={options.room <= 1} onClick={() => handleOptions('room', 'decrement')} class="border-solid border-[1px] px-2 text-[18px] border-indigo-600 rounded">-</button>
                                        <span className='px-2'>{options.room}</span>
                                        <button onClick={() => handleOptions('room', 'increment')} class="border-solid border-[1px] px-2 text-[18px] border-indigo-600 rounded">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <button class="btn-xs bg-[#374ea2fb] rounded">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Details;