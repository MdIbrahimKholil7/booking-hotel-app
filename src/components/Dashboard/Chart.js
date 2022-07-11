import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
const Chart = () => {
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
    return (
        <div className='mb-20'>
            <div className='border-solid border-[1px] rounded-md p-5 border-gray-600'>
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
        </div>
    );
};

export default Chart;