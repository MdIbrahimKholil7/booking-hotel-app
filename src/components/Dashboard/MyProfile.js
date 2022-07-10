import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiPencil } from 'react-icons/bi';
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';
import userImg from '../../assets/images/single-01.png'
import { useNavigate } from 'react-router-dom';
const MyProfile = () => {

    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    const { img, userName, _id, email, phone, address, profession } = userData || {}
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const { data } = await fetcher(`user/user-data?email=${user?.email}`)
            setUserData(data)
        })()
    }, [user])
    console.log(userData)
    return (

        <div className='bg-white pb-20 text-black w-full h-full flex justify-center pt-9 px-4'>
            <div className='w-full'>
                <div className='flex justify-between w-full items-center'>
                    <h1 className='text-2xl'>My Profile</h1>
                    <button onClick={() => navigate('/dashboard/editProfile')} className='flex items-center'><BiPencil
                        className='mr-1'
                    /> Edit</button>
                </div>
                <div className="w-full h-[2px] bg-[#000] my-9"></div>
                <div className='flex gap-12 flex-col lg:flex-row justify-center'>
                    <div className='w-[200px] mx-auto h-48 rounded-full bg-white p-7 flex justify-center items-center'>
                        <img className='w-40 rounded-full' src={`${img ? img : userImg}`} alt="userImg" />
                    </div>

                    <div className=' w-full mt-7'>
                        <div className='text-[17px]'>
                            <div className='mb-4' >
                                <h1 className='mb-1 text-[13px]'>Customer Id :</h1>
                                <p>User-{_id}</p>
                            </div>
                            {(userName || user?.displayName) && <div className='mb-4'>
                                <h1 className='mb-1 text-[13px]'>Full Name</h1>
                                <p>{userName ? userName : user?.displayName}</p>
                            </div>}
                            <div className='mb-4'>
                                <h1 className='mb-1 text-[13px]'>Email Address</h1>
                                <p>{email}</p>
                            </div>
                            {profession && <div className='mb-4'>
                                <h1 className='mb-1 text-[13px]'>Profession</h1>
                                <p>{profession}</p>
                            </div>}
                            {address && <div className='mb-4'>
                                <h1 className='mb-1 text-[13px]'>Address</h1>
                                <p>{address}</p>
                            </div>}
                            {phone && <div className='mb-4'>
                                <h1 className='mb-1 text-[13px]'>Phone</h1>
                                <p>{phone}</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;