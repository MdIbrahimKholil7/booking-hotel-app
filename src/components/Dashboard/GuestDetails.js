import React, { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import DeleteModal from './DeleteModal';
import GuestDetailsCard from './GuestDetailsCard';
import Loading from '.././Shared/Loading'
// import { motion } from "framer-motion"
const GuestDetails = () => {

    const [users, setUser] = useState([])
    const [filterUser, setFilterUser] = useState([])
    const [btnStyle, setBtnStyle] = useState('all')
    const [openModal, setOpenModal] = useState(null)
    const url = `https://hotel-server-2.vercel.app/user/delete-user`

    const { loading, data, refetch } = useQuery(['all-user'], () => fetcher('/user/all-user'))
    useEffect(() => {
        setUser(data?.data)
        setFilterUser(data?.data)
    }, [data])

    if (loading) {
        return <Loading />
    }

    const handleName = (e) => {

        const value = e.target.value
        console.log(typeof value)
        if (!e.target.value) return
        const data = users.filter(user => (user?.name.toLowerCase().includes(value.toLowerCase())))
        console.log(data)
        setFilterUser(data)
    }
    const handleGuest = (status) => {
        if (status === 'all') {
            setBtnStyle('all')
            return setFilterUser(users)
        }
        if (status === 'Active') {
            const data = users.filter(user => user.active === 'Active')
            setFilterUser(data)
            setBtnStyle('Active')
            return
        }
        if (status === 'Inactive') {
            const data = users.filter(user => user.active === 'Inactive')
            setFilterUser(data)
            setBtnStyle('Inactive')
        }
    }

    return (
        <div className='px-5 my-20'>
            <div className='mt-9 flex flex-col md:flex-row justify-between '>
                <div>
                    <button onClick={() => handleGuest('all')} className={`mr-7 ${btnStyle === 'all' ? 'md:px-2 px-1 py-2  shadow-xl rounded-md ' : 'md:px-2 px-1 py-2 '}`}>All Status</button>
                    <button onClick={() => handleGuest('Active')} className={`mr-7 ${btnStyle === 'Active' ? 'md:px-2 px-1 py-2 shadow-xl rounded-md ' : 'md:px-2 px-1 py-2 '}`}>Active</button>
                    <button onClick={() => handleGuest('Inactive')} className={`mr-7 ${btnStyle === 'Inactive' ? 'md:px-2 px-1 py-2 shadow-xl rounded-md ' : ' md:px-2 px-1 py-2'}`}>Inactive</button>
                </div>
                <div className='mt-16 md:mt-0 flex items-center gap-2'>
                    <label htmlFor="">Search:</label>
                    <input onChange={handleName} type="text" placeholder="Search by name" class="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div
                layout 
                className='grid md:grid-cols-2 grid-cols-1 gap-7 justify-content-center mt-20 overflow-x-hidden'>

               
                    {
                        filterUser?.length ? filterUser?.map(user => <div
                          
                        >
                            <GuestDetailsCard
                                key={user._id}
                                user={user}
                                setOpenModal={setOpenModal}
                            />
                        </div>) :
                            <div>
                                <h1 className='text-center mt-20 md:text-3xl text-xl font-bold text-red-500'>No Inactive User</h1>
                            </div>
                    }
               
            </div>
            <div>
                {
                    openModal && <DeleteModal
                        refetch={refetch}
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                        url={url}
                    />
                }
            </div>
        </div>
    );
};

export default GuestDetails;