import React, { useRef, useState } from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Details = ({setRoomInformation}) => {
    const navigate = useNavigate()
    const optionRef = useRef()
    const [open, setOpen] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [place, setPlace] = useState('')
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

    const destination = [
        'Dhaka', 'Chittagong', 'Sylhet', 'Coxs Bazar'
    ]

    // increase and decrease quantity 
    const handleOptions = (name, quantity) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: quantity === 'increment' ? options[name] + 1 : options[name] - 1
            }
        })
    }
    // get destination value 
    const handleOption = (e) => {
        setPlace(e.target.value)
    }
    // search function 
    const handleSearch = () => {
        if (place === '' || place === 'What is your destination') {
            return toast.error('Please select a destination', {
                pauseOnHover: true,
                autoClose: 2000,
            })
        }
        // navigate to search page 
        navigate('searchResult', {
            state: {
                place,
                options,
                date,
            }
        })

        localStorage.setItem('time-zone',JSON.stringify({place,date,options}))
        // send data to the app component for context api
        setRoomInformation({place,options,date})
    }
    return (
        <div className='w-[95%] mx-auto text-white bg-[#1b2857fb] border-solid border-2 border-indigo-600 py-5 px-7 mt-[-87px] md:mt-[-45px] lg:mt-[-46px] rounded  text-[14px] ' >
            <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center items-center grid-cols-1 gap-5'>
                <div>
                    {/*   <input className='bg-transparent text-white outline-none' type="text" placeholder='Where are you going' /> */}
                    <select ref={optionRef} onClick={handleOption} class="select text-[13px] w-full max-w-xs bg-transparent">
                        <option disabled selected>What is your destination</option>
                        {
                            destination.map((elem, index) => <option
                                key={index}
                                value={elem}
                                className='text-black'
                            >
                                {elem}
                            </option>)
                        }
                    </select>
                </div>
                <div className='cursor-pointer relative' >
                    <div className='flex ' onClick={() => setOpen(!open)}>
                        <AiFillCalendar
                            className='w-5 h-5 mr-2'
                        />

                        <span>
                            {
                                `${format(date[0].startDate, 'dd/MM/yy')} to ${format(date[0].endDate, 'dd/MM/yy')}`
                            }
                        </span>
                    </div>
                    {
                        open && <span className='absolute z-10 top-[46px] md:left-[-136px] left-[-90px]'>
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
                <div className='z-10 text-[14px] relative'>
                    <div className='flex items-center'>
                        <span
                            className='mr-2'
                        ><FaUser /></span>
                        <span className='cursor-pointer' onClick={() => setOpenOptions(!openOptions)}>
                            {options.adult} Adult - {options.children} Children - {options.room} Room
                        </span>
                        {
                            openOptions && <div className='absolute top-[46px] w-[230px] bg-[#171538] p-3'>
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
                <div className='flex justify-end'>
                    <button onClick={handleSearch} class="btn-xs bg-[#374ea2fb] rounded">Search</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;