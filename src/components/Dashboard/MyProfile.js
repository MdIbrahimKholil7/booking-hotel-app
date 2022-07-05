import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiPencil } from 'react-icons/bi';
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';
import userImg from '../../assets/images/single-01.png'
const MyProfile = () => {

    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    const { img, userName, _id,email,phone } = userData || {}
    useEffect(() => {
        (async () => {
            const { data } = await fetcher(`user/user-data?email=${user.email}`)
            setUserData(data)
        })()
    }, [])
    return (

        <div className='bg-[#19223c] text-white w-full h-full flex justify-center pt-9 px-4'>
            <div className='w-full'>
                <div className='flex justify-between w-full items-center'>
                    <h1 className='text-2xl'>My Profile</h1>
                    <button className='flex items-center'><BiPencil
                        className='mr-1'
                    /> Edit</button>
                </div>
                <div className="w-full h-[3px] bg-[#fff] my-9"></div>
                <div className='flex gap-12'>
                    <div className='min-w-[170px] rounded-full bg-black h-48 p-7 flex justify-center items-center'>
                        <img className='w-40 rounded-full' src={`${img ? img : userImg}`} alt="userImg" />
                    </div>

                    <div className=' w-full mt-7'>
                        <div className='text-[17px]'>
                            <div className='mb-4' >
                                <h1 className='mb-1 text-[15px]'>Customer Id :</h1>
                                <p>User-{_id}</p>
                            </div>
                           {(userName || user?.displayName )&& <div className='mb-4'>
                                <h1 className='mb-1 text-[15px]'>Full Name</h1>
                                <p>{userName ? userName : user?.displayName}</p>
                            </div>}
                            <div className='mb-4'>
                                <h1 className='mb-1 text-[15px]'>Email Address</h1>
                                <p>{email}</p>
                            </div>
                            {phone&&<div className='mb-4'>
                                <h1 className='mb-1 text-[15px]'>Phone</h1>
                                <p></p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;