import { format, parseISO } from 'date-fns';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillCalendar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchCard from './SearchCard';
import axios from "axios";
import Loading from '../Shared/Loading'
import { signOut } from 'firebase/auth';
import auth from '../../firebase_init';

const SearchResult = () => {

  const location = JSON.parse(localStorage.getItem('time-zone'))
  const [city, setCity] = useState(location?.place)
  const [locationCity, setLocationCity] = useState(location?.place)
  const [searchRoom, setSearchRoom] = useState([])
  const navigate=useNavigate()
  const [load, setLoad] = useState(true)
  const [place, setPlace] = useState('')
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
  const destination = [
    'Dhaka', 'Chittagong', 'Sylhet', 'Coxs Bazar'
  ]


  useEffect(() => {

    fetch(`https://mighty-beyond-31065.herokuapp.com/getRoom/room?room=${city}`, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('hotelAccessToken')}`
      }
    })
      .then(res => {
        console.log(res)
        if(res.status === 401 || res.status===403) {
          signOut(auth) 
          navigate('/login')
        }
       return res.json()})
      .then(data => {
        setSearchRoom(data.result)
        setLoad(false)
        console.log(data)})
  }, [city])

  if (load) {
    console.log('click')
    return <Loading />
  }

  const handleOption = (e) => {
    setPlace(e.target.value)

  }
  const handleOptions = (name, quantity) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: quantity === 'increment' ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const handleSearch = () => {
    if (place === '' || place === 'Change your destination') {
      return toast.error('Please select a destination', {
        pauseOnHover: true,
        autoClose: 2000,
      })
    }
    setLocationCity(place)
    setCity(place)
  }


  return (
    <div className='px-5 mt-16'>
      <div className='flex items-start w-full justify-center md:justify-between  flex-col lg:flex-row'>
        <div className='max-w-sm p-3 mx-auto lg:mx-0 lg:sticky top-20 '>
          <div className='shadow-md rounded-md mb-5 py-3 text-center'>
            <h1 className=''>Your Location Is {locationCity}</h1>
          </div>
          {/* arrival div  */}
          <div className='flex justify-between items-center my-9 '>
            <div className='shadow-md rounded-md px-3 py-4'>
              <span className='text-[12px] text-gray-400'>Arrival</span>
              <div className='flex justify-between items-center'>
                <p className='text-[14px]'>
                  {
                    format(parseISO(location?.date[0]?.startDate), 'dd/MM/yy')
                  }
                </p>
                <span>
                  <AiFillCalendar
                    className='w-5 ml-3'
                  />
                </span>
              </div>
            </div>
            <div className='shadow-md rounded-md px-3 py-4'>
              <span className='text-[12px] text-gray-400'>Departure</span>
              <div className='flex justify-between items-center'>
                <p className='text-[14px]'>
                  {
                    format(parseISO(location?.date[0]?.endDate), 'dd/MM/yy')
                  }
                </p>
                <span>
                  <AiFillCalendar
                    className='w-5 ml-3'
                  />
                </span>
              </div>
            </div>
          </div>
          {/* select box  */}
          <select onClick={handleOption} class="select shadow-lg text-[16px] w-full max-w-xs ">
            <option disabled selected>Change your destination</option>
            {
              destination?.map((elem, index) => <option
                key={index}
                value={elem}
                className='text-black'
              >
                {elem}
              </option>)
            }
          </select>

          <div className='text-[14px] mt-9 shadow-md p-1'>
            <div className='flex items-center'>
              <span
                className='mr-2'
              >{/* <FaUser /> */}</span>


              <div className=' w-[230px]  p-3'>
                <div className='flex justify-between mb-5'>
                  <span className='text-[16px]'>Adult</span>
                  <div className='font-[600]'>
                    <button disabled={options.adult <= 1} onClick={() => handleOptions('adult', 'decrement')} class="px-2 text-[20px] rounded">-</button>
                    <span className='px-2'>{options.adult}</span>
                    <button onClick={() => handleOptions('adult', 'increment')} class="px-2 text-[20px] rounded">
                      +
                    </button>
                  </div>
                </div>
                <div className='flex justify-between mb-5'>
                  <span className='text-[16px]'>Children</span>
                  <div className='font-[600]' >
                    <button disabled={options.children <= 1} onClick={() => handleOptions('children', 'decrement')} class="px-2 text-[20px]  rounded">-</button>
                    <span className='px-2'>{options.children}</span>

                    <button onClick={() => handleOptions('children', 'increment')} class=" px-2 text-[20px]  rounded">
                      +
                    </button>
                  </div>
                </div>

                <div className='flex justify-between '>
                  <span className='text-[16px]'>Rooms</span>
                  <div className='font-[600]'>
                    <button disabled={options.room <= 1} onClick={() => handleOptions('room', 'decrement')} class=" px-2 text-[20px]  rounded">-</button>
                    <span className='px-2'>{options.room}</span>
                    <button onClick={() => handleOptions('room', 'increment')} class=" px-2 text-[20px]  rounded">
                      +
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div onClick={handleSearch} className='mt-7 mb-9 text-center shadow-xl py-3 rounded-lg px-2'>
            <button className=''>Search</button>
          </div>
        </div>
        <div className=' lg:w-[70%] w-full mb-[70px] flex flex-col items-center '>
          {
            searchRoom && searchRoom.map(elem => <SearchCard
              key={elem._id}
              elem={elem}
              location={location}
            />)
          }
        </div>
      </div>
      <div>

      </div>
      <ToastContainer />
    </div>

  );
};

export default SearchResult;