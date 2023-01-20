import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import fetcher from '../../api/fetcher';
import SearchCard from '../SearchResult/SearchCard';
import Loading from '../Shared/Loading';

const AllRoom = () => {
    const [room, setRoom] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(4)


    const { data, loading, refetch } = useQuery(['all-room'], () => fetcher(`getRoom/getRoomByPagination?page=${page}&size=${size}`))

    useEffect(() => {
        (async () => {
            const { data } = await fetcher('getRoom/getRoomCount')
            const length = Math.ceil(data.result / 4)
            setCount(length)
        })()
    }, [count])

    if (loading) {
        return <Loading />
    }

    // console.log(count)
    const handlePageClick = data => {
        setPage(data.selected)
        refetch()
    }
    return (
        <div className='mt-20'>

            {
                loading && <div className='min-h-screen'>

                    <h1 className='text-center mt-20'>Loading...</h1>
                </div>
            }
            {
                data?.data.length &&
                <div>
                    <div className='flex justify-center items-center'>
                        <div className=' lg:w-[90%] w-full mb-[70px] flex flex-col items-center '>
                            {
                                data?.data.map(elem => <SearchCard
                                    elem={elem}
                                />)
                            }
                        </div>
                    </div>

                    <div className='flex justify-end items-end mb-5'>
                        <div className='w-full   flex items-end justify-end '>
                            <ReactPaginate
                                previousLabel={'Prev'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                pageCount={count}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName={'paginateContainer'}
                                pageClassName={'page-btn'}
                                previousClassName={'previous'}
                                previousLinkClassName={'link-btn'}
                                pageLinkClassName={'link-btn'}
                                nextClassName={'previous'}
                                breakClassName={'page-btn'}
                                breakLinkClassName={'link-btn'}
                                nextLinkClassName={'link-btn'}
                                activeClassName={'active-btn'}
                            />
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default AllRoom;