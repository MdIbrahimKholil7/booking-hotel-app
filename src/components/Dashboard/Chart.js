import React, { useEffect, useState } from 'react';
import { XAxis, YAxis, CartesianGrid, ComposedChart, Tooltip, Legend, AreaChart, Area, PieChart, Pie, Bar, Line } from 'recharts';
import fetcher from '../../api/fetcher';
const Chart = () => {


    const [bookedRoomCount, setBookedRoomCount] = useState(0)
    const [allRoomCount, setAllRoomCount] = useState(0)
    useEffect(() => {
        (async () => {
            const { data } = await fetcher.get('/getRoom/allRoom-count')
            setAllRoomCount(data.result)
        })()
    }, [])
    useEffect(() => {
        (async () => {
            const { data } = await fetcher.get('/getRoom/booked-room-count')
            setBookedRoomCount(data.result)
        })()
    }, [])

    const data = [
        {
            "name": "Sun",
            "uv": 800,
            "pv": 600,
            "amt": 2400
        },
        {
            "name": "Mon",
            "uv": 300,
            "pv": 500,
            "amt": 2210
        },
        {
            "name": "Tue",
            "uv": 650,
            "pv": 400,
            "amt": 2290
        },
        {
            "name": "Web",
            "uv": 780,
            "pv": 608,
            "amt": 2000
        },
        {
            "name": "Thur",
            "uv": 390,
            "pv": 600,
            "amt": 2181
        },
        {
            "name": "Friday",
            "uv": 590,
            "pv": 500,
            "amt": 2500
        },
        {
            "name": "Sat",
            "uv": 290,
            "pv": 400,
            "amt": 2100
        }
    ]

    const data1 = [
        { name: 'Total Room', value: allRoomCount },
        { name: 'Booked', value: bookedRoomCount },

    ];
    const data3 = [
        {
            "name": "Week1",
            "uv": 500,
            "pv": 400,
            "amt": 300
        },
        {
            "name": "Week2",
            "uv": 500,
            "pv": 398,
            "amt": 2210
        },
        {
            "name": "Week3",
            "uv": 700,
            "pv": 800,
            "amt": 2290
        },
        {
            "name": "Week4",
            "uv": 780,
            "pv": 908,
            "amt": 2000
        },
        {
            "name": "Week5",
            "uv": 590,
            "pv": 200,
            "amt": 2181
        },

    ]

    return (
        <div className='mb-20'>
            <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 hidden md:block'>
                <h1 className='text-xl mb-20 font-bold'>Guest Activity</h1>
                <div>

                    <AreaChart width={800} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F8857D" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#F8857D" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>

                </div>
            </div>
            <div className='flex justify-between flex-col md:flex-row items-center mt-20'>
                <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 h-[450px]'>
                    <h1 className='font-[600] text-xl mb-4'>Rooms Availability</h1>
                    <div style={{ width: '100%', height: 300 }}>
                        <PieChart width={300} height={200}>
                            <Pie dataKey="value" data={data1} fill="#8884d8" label={data1} />
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div >
                                <div>
                                    <span className='bg-[#8884d8] p-[7px] rounded-md mr-2  inline-block'></span> <span>Available</span>
                                </div>
                                <div>
                                    <span className='bg-[#8884d8] p-[7px] rounded-md mr-2 inline-block'></span> <span>Booked</span>
                                </div>
                            </div>
                            <div>
                                <p>{allRoomCount} Rooms</p>
                                <p>{bookedRoomCount} Rooms</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-solid border-[1px] rounded-md p-5 border-gray-600 '>
                    <div>
                        <h1 className='font-[600] text-[16px] mb-2'>Visitors</h1>
                        <p className='font-[600] text-xl mb-6'>3,033</p>
                    </div>
                    <ComposedChart width={330} height={327} data={data3}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;