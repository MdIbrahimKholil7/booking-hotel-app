import React from 'react';
import google from '../../../assets/images/search 1.png'
const Social = () => {
    return (
        <div>
             <button class="btn btn-primary w-full flex justify-center items-center"><img className='w-8 mr-3' src={google} alt="googleImg" /> Sign in with Google</button>

        </div>
    );
};

export default Social;