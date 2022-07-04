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
    const [size, setSize] = useState(3)


    const { data, loading, refetch } = useQuery(['all-room'], () => fetcher(`getRoom/getRoomByPagination?page=${page}&size=${size}`))

    useEffect(() => {
        (async () => {
            const { data } = await fetcher('getRoom/getRoomCount')
            const length = Math.ceil(data.result / 3)
            console.log(data)
            setCount(length)
        })()
    }, [count])

    if (loading) {
        return <Loading />
    }
    console.log(data)
    // console.log(count)
    const handlePageClick = data => {
        console.log(data)
        setPage(data.selected)
        refetch()

    }
    return (
        <div className='mt-20'>

            <div className='flex justify-center items-center'>
                <div className=' lg:w-[70%] w-full mb-[70px] flex flex-col items-center '>
                    {
                        data?.data.map(elem => <SearchCard
                            elem={elem}
                        />)
                    }
                </div>
            </div>

            <div className='flex justify-center items-center mb-5 bg-base-300'>
                <div className='w-[100%]  flex items-center justify-center'>
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
    );
};

export default AllRoom;