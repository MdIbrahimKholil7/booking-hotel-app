import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading';
import img from '../../assets/images/single-01.png'
const YourBooking = () => {
    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    const { userImg, _id } = userData || {}
    const { loading, data } = useQuery(['book-room', user], () => fetcher(`getRoom/book-room?email=${user?.email}`))
    useEffect(() => {
        (async () => {
            const { data } = await fetcher(`user/user-data?email=${user?.email}`)
            setUserData(data)
        })()
    }, [user])
    console.log(data)
    console.log(loading)

    if (loading) {
        return <Loading />
    }
    return (
        <div className='px-5 py-9'>

            <div>
                <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 flex gap-9'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={`${userImg ? userImg : img}`} alt='userImage' />
                        </div>

                    </div>
                    <div>
                        <h1>{user?.displayName}</h1>
                        <p>Id:{_id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourBooking;