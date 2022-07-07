import React from 'react';

const EditProfile = () => {
    return (
        <div className='px-5'>
            <div className='mt-5'>
                <h1 className='text-2xl text-gray-400'>Edit your profile</h1>
                <div className='w-full h-[2px] bg-gray-400 my-7'></div>

                <form className='w-[70%] mx-auto '>
                    <div>

                        <div className='flex gap-7'>
                            <div className='w-full'>
                                <label htmlFor="">Full Name</label>
                                <input className='block edit-input w-full mt-2' type="text" name='name' placeholder='Name' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="">Address</label>
                                <input className='block edit-input w-full mt-2' type="text" name='address' placeholder='Address' />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label>Profession</label>
                            <input className='block edit-input w-full mt-2' type="text" name='profession' placeholder='Profession' />
                        </div>
                        <div className='mt-3'>
                            <label>Phone</label>
                            <input className='block edit-input w-full mt-2' type="number" name='phone' placeholder='Phone' />

                        </div>
                        <div>
                            <input className='btn btn-primary block mt-7 mx-auto' type="submit" value='Submit'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;