import React from 'react';
import host from '../../../assets/images/rowdra.jpg'
const WhosComing = () => {
    return (
        <div className='mt-9'>
            <div className='flex justify-between gap-4 items-end'>
                <div>
                    <h1 className='text-xl font-bold mb-2'>Traveling for work?</h1>
                    <p className='text-[13px] leading-7'>Say hello to your host</p>
                    <p className='text-[13px] leading-7'>Let Rowdra know a little bit about your self why you are coming</p>
                </div>
                <div>
                    <div class="avatar">
                        <div class="md:w-16 w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={host} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <textarea class="textarea textarea-bordered w-[70%]" placeholder="Please write something about yourself"></textarea>
                <button class="btn btn-active btn-primary mt-5 block">Continue</button>
            </div>
        </div>
    );
};

export default WhosComing;