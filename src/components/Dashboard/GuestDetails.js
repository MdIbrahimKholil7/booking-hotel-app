import React, { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import DeleteModal from './DeleteModal';
import GuestDetailsCard from './GuestDetailsCard';
import Loading from '.././Shared/Loading'
const GuestDetails = () => {

    const [users, setUser] = useState([])
    const [filterUser, setFilterUser] = useState([])
    const [btnStyle, setBtnStyle] = useState('all')
    const [openModal, setOpenModal] = useState(null)
    const [singleUser, setSingleUser] = useState({})
 /*    useEffect(() => {
        (async () => {
            const { data } = await fetcher('/user/all-user')
            setUser(data)
            console.log(data)
            setFilterUser(data)
        })()
    }, [])
 */
    const { loading, data, refetch } = useQuery(['all-user'], () => fetcher('/user/all-user'))
    useEffect(()=>{
        setUser(data?.data)
        setFilterUser(data?.data)
    },[data])
    /* setUser(data)
    console.log(data)
    setFilterUser(data)
    console.log(users) */
    if(loading){
        return <Loading/>
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
            <div className='mt-9'>
                <div>
                    <button onClick={() => handleGuest('all')} className={`mr-7 ${btnStyle === 'all' ? 'px-3 py-2 shadow-xl rounded-md ' : ''}`}>All Status</button>
                    <button onClick={() => handleGuest('Active')} className={`mr-7 ${btnStyle === 'Active' ? 'px-3 py-2 shadow-xl rounded-md ' : ' '}`}>Active</button>
                    <button onClick={() => handleGuest('Inactive')} className={`mr-7 ${btnStyle === 'Inactive' ? 'px-3 py-2 shadow-xl rounded-md ' : ' '}`}>Inactive</button>
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-7 justify-content-center mt-20'>

                {
                    filterUser?.length ? filterUser?.map(user => <GuestDetailsCard
                        key={user._id}
                        user={user}
                        setOpenModal={setOpenModal}
                    />) :
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
                    />
                }
            </div>
        </div>
    );
};

export default GuestDetails;