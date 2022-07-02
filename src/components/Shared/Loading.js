import React from 'react';
import loading from '../../assets/images/original.gif'
const Loading = () => {
    return (
        <div className='absolute top-0 left-0 w-screen h-screen'>
            <img className='w-full h-full' src={loading} alt="loading" />
        </div>
    );
};

export default Loading;