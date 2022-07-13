import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import DeleteModal from './DeleteModal';
const ManageAllBook = () => {
    const [orders, setOrder] = useState([])
    const [filterOrder, setFilterOrder] = useState([])
    const [openModal, setOpenModal] = useState(null)
    const [btnStyle, setBtnStyle] = useState('all')
    const url = `http://localhost:5000/order/delete-order`
    const { loading, data, refetch } = useQuery(['all-order'], () => fetcher('/order/all-order'))
    useEffect(() => {
        setOrder(data?.data)
        setFilterOrder(data?.data)
    }, [data])
    const handlePending = async (_id) => {
        const { data } = await axios.patch('http://localhost:5000/order/update-order', { _id })
        console.log(data)
        refetch()

    }
    const handleBook=async(status)=>{

        if (status === 'all') {
            setBtnStyle('all')
            return setFilterOrder(orders)
        }
        if (status === 'paid') {
            const data = orders.filter(order => order.pending === true)
            setFilterOrder(data)
            setBtnStyle('paid')
            return
        }
        if (status === 'pending') {
            const data = orders.filter(order => order.pending === false)
            setFilterOrder(data)
            setBtnStyle('pending')
        }
    }
    const handleName = (e) => {

        const value = e.target.value
        console.log(typeof value)
        if (!e.target.value) return
        const data = orders.filter(order => (order?.name.toLowerCase().includes(value.toLowerCase())))
        console.log(data)
        setFilterOrder(data)
    }
    return (
        <div className='my-14 px-5'>
            <div className='p-4 shadow-lg rounded-lg '>
                <h1 className='text-2xl text-[#787676]'>All Booking List</h1>
            </div>
            <div className='mt-9 flex flex-col md:flex-row justify-between '>
                <div>
                    <button onClick={() => handleBook('all')} className={`mr-7 ${btnStyle === 'all' ? 'px-3 py-2 shadow-xl rounded-md ' : ''}`}>All</button>
                    <button onClick={() => handleBook('paid')} className={`mr-7 ${btnStyle === 'paid' ? 'px-3 py-2 shadow-xl rounded-md ' : ' '}`}>Paid</button>
                    <button onClick={() => handleBook('pending')} className={`mr-7 ${btnStyle === 'pending' ? 'px-3 py-2 shadow-xl rounded-md ' : ' '}`}>Pending</button>
                </div>
                <div className='mt-16 md:mt-0 flex items-center gap-2'>
                    <label htmlFor="">Search:</label>
                    <input onChange={handleName} type="text" placeholder="Search by name" class="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div>
                <div className="overflow-x-auto px-3 py-12">
                    <table className="table table-zebra w-full">

                        <thead>
                            <tr className='text-center'>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Transaction Id</th>
                                <th>Room Type</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                filterOrder?.map(({ name, img, transactionId, roomBooked, roomType, _id, pending }, index) => <tr
                                    key={_id}
                                    className='text-center'
                                >
                                    <td className='text-left '>{name}</td>
                                    <td><img className='mask mask-squircle w-12 h-12' src={img} alt={name} /></td>
                                    <td>{transactionId}</td>
                                    <td>{roomType}</td>
                                    <td>{pending ? <span className='bg-[#edfaf2]px-2 py-1 rounded-md text-[#78d69d]'>Paid</span> : <span onClick={() => handlePending(_id)} className='bg-[#78d69d] text-white rounded-md px-2 py-1 cursor-pointer'>Pending</span>}</td>
                                    <td>
                                        <label onClick={() => setOpenModal({ _id })} for="deleteUser" className='btn btn-primary'>Delete</label>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>




                </div>

            </div>
            {
                openModal && <DeleteModal
                    refetch={refetch}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    url={url}
                />
            }
        </div>
    );
};

export default ManageAllBook;