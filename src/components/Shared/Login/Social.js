import React from 'react';
import google from '../../../assets/images/search 1.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import Loading from '../Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(loading){
        return <Loading/>
    }
    if(error){
        console.log(error)
    }
    // console.log(user)
    return (
        <div>
             <button onClick={()=>signInWithGoogle()} class="btn btn-primary w-full flex justify-center items-center"><img className='w-8 mr-3' src={google} alt="googleImg" /> Sign in with Google</button>

        </div>
    );
};

export default Social;