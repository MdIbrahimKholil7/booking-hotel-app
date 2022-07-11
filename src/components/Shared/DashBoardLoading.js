import React from 'react';

const DashBoardLoading = () => {
    return (
        <div>
            <div className='w-full h-screen'>
                <div className=' w-full h-full flex justify-center items-center'>
                    <div class="flex items-center justify-center ">
                        <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLoading;