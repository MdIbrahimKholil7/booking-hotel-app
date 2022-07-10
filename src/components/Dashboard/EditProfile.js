import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import fetcher from '../../api/fetcher';
import auth from '../../firebase_init';

const EditProfile = () => {
    const [updateProfile, updating, uodateError] = useUpdateProfile(auth);
    const [disabled, setDisabled] = useState(true)
    const [userData, setUserData] = useState({
        name: '',
        address: '',
        profession: '',
        phone: ''
    })
    const [user] = useAuthState(auth)
    useEffect(() => {
        (async () => {
            const { data } = await fetcher(`user/user-data?email=${user?.email}`)
            setUserData({
                name: user?.displayName,
                address: data?.address,
                profession: data?.profession,
                phone: data?.phone
            })
        })()
    }, [user])

    console.log(userData)

    const handleName = e => {
        setUserData({ ...userData, name: e.target.value })
        setDisabled(false)
    }
    const handlePhone = e => {
        setUserData({ ...userData, phone: e.target.value })
        setDisabled(false)
    }
    const handleAddress = e => {
        console.log(e.target.value)
        setUserData({ ...userData, address: e.target.value })
        setDisabled(false)
    }
    const handleProfession = e => {
        setUserData({ ...userData, profession: e.target.value })
        setDisabled(false)
    }


    const handleSubmit = async e => {
        e.preventDefault()
    /*     const name = e.target.name.value
        const address = e.target.address.value
        const profession = e.target.profession.value
        const phone = e.target.phone.value

        setUserData({ name, address, profession, phone }) */
        await updateProfile({ displayName: userData?.name })

        const { data } = await axios.put('http://localhost:5000/user/put-userInformation', {
            address: userData?.address,
            profession: userData?.profession,
            phone: userData?.phone,
            email: user?.email
        })

        console.log(userData)
        console.log(data)
    }
    return (
        <div className='px-5'>
            <div className='mt-5'>
                <h1 className='text-2xl text-gray-400'>Edit your profile</h1>
                <div className='w-full h-[2px] bg-gray-400 my-7'></div>

                <form
                    className='w-[70%] mx-auto '
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className='flex flex-col md:flex-row md:gap-7 gap-2'>
                            <div className='w-full'>
                                <label htmlFor="">Full Name</label>
                                <input onChange={handleName} value={userData?.name} className='block edit-input input w-full mt-2' type="text" name='name' placeholder='Name' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="">Address</label>
                                <input onChange={handleAddress} value={userData?.address} className='block input edit-input w-full mt-2' type="text" name='address' placeholder='Address' />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label>Profession</label>
                            <input onChange={handleProfession} value={userData?.profession} className='block edit-input input w-full mt-2' type="text" name='profession' placeholder='Profession' />
                        </div>
                        <div className='mt-3'>
                            <label>Phone</label>
                            <input onChange={handlePhone} value={userData?.phone} className='block edit-input input w-full mt-2' type="number" name='phone' placeholder='Phone' />

                        </div>
                        <div>
                            <input className='btn btn-primary input block mt-7 mx-auto' type="submit" disabled={disabled} value='Submit' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;