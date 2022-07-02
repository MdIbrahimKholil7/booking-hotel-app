import React from 'react';
import loading from '../../assets/images/original.gif'
const Loading = () => {
    return (
        <div className='h-screen w-screen'>
            <div className=' w-screen h-screen flex justify-center items-center'>
                <div class="flex items-center justify-center ">
                    <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;