import { useEffect } from "react";
import { useState } from "react";

const useLog = (error) => {
    const [logError, setLogError] = useState('')
    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case 'auth/user-not-found':
                    setLogError('User not found');
                    break;
                case 'EMAIL_EXISTS':
                    setLogError('Email already exist');
                    break;
                case 'auth/invalid-email':
                    setLogError('Email is not valid');
                    break;
                case 'auth/invalid-password':
                    setLogError('Wrong password');
                    break;
                default:
                    setLogError(`Something went wrong`);
            }
        }
    }, [error])
    return [logError]
}
export default useLog