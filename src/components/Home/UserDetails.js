import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import userImg from '../../assets/images/single-01.png'
import { useEffect } from 'react';
import fetcher from '../../api/fetcher';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const UserDetails = () => {

    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    const { email, img } = userData || {}
    useEffect(() => {
        (async () => {
            const { data } = await fetcher(`user/user-data?email=${user.email}`)
            setUserData(data)
        })()
    }, [user])
    return (
        <div className='rounded-lg absolute top-16 right-4 bg-[#19223c] text-white text-center p-7'>
            <div>
                <div>
                    <div class="avatar">
                        <div class="w-20 rounded-full">
                            <img className='w-' src={`${img ? img : userImg}`} alt="" />
                        </div>
                    </div>
                    <div className='mt-9'>
                        <h2 className='text-2xl mb-2'>{user?.displayName}</h2>
                        <p>{user?.email}</p>
                        <div className="w-full  h-[3px] bg-white my-5"></div>
                        <div className='text-left'>
                            <ul>
                                <li className='my-3 font-bold text-[17px]'><Link to='/dashboard'>Dashboard</Link></li>
                                <li className='my-3 block font-bold text-[17px]'><button onClick={()=>signOut(auth)}>Logout</button></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;