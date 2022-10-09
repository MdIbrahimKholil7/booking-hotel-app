import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import { useLocation,Navigate } from 'react-router-dom';
import Loading from './Loading';
import useAdmin from '../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({children}) => {
    const [user,loading]=useAuthState(auth)
    const location=useLocation()
    const [adminLoading,admin]=useAdmin(user)
    console.log(admin)
    if(loading || adminLoading){
        return <Loading/>
    }
    if(!user || !admin){
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default RequireAdmin;