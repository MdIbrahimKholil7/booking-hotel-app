import { format, parseISO } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import userImg from '../../assets/images/single-01.png'
import auth from '../../firebase_init';
const GuestDetailsCard = ({ user:users,setOpenModal }) => {
    const {img,date,profession,active,name,_id}=users || {}
    const [open, setOpen] = useState(false)
    const dates=format(parseISO(date),'PP')


    const handleDelete=()=>{
        setOpen(!open)
    }

    const openDeleteModal=()=>{
        setOpenModal(users)
    }
    return (
        <div className='flex justify-center items-center'>
            <div class="card max-w-[320px] bg-base-100 shadow-xl">
                <figure class="px-5 pt-10">
                    <img src={img ? img:userImg} alt="user" class="rounded-full w-[130px] h-[130px] object-cover"  />
                </figure>
                <div class="card-body items-center text-center">
                    <div>
                    <p>{name}</p>
                    </div>
                    <div className='relative flex bg-[#bbb7b7]  justify-center w-7 h-7  items-center  rounded-full '>
                        <p onClick={handleDelete} className='  text-xl mb-3'>...</p>
                        {
                            open && <div 
                            className='absolute top-4 right-8'
                            >
                                <label onClick={openDeleteModal} for="deleteUser" className='btn bg-[#ee0b0b] text-white rounded-md px-3 py-1'>Delete</label>
                            </div>
                        }
                    </div>
                   <div className='flex justify-between items-center mt-10'>
                    <div>
                        <p className='text-[14px] mr-10'>Join at {dates}</p>
                    </div>
                    <button className={`${active === 'Active'?'px-2 py-1 bg-[#78d69d] rounded-md text-white':'px-2 py-1 bg-[#e41616] rounded-md text-white'}`}>{active === 'Active'?'Active':'Inactive'}</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default GuestDetailsCard;