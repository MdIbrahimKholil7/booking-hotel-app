import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';
import house from '../../../assets/images/login.png'
import { useForm } from 'react-hook-form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import Loading from '../Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLog from '../../hooks/useLog';
const Login = () => {
    const [email, setEmail] = useState('second')
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    // pssword reset 
    const [sendPasswordResetEmail, sending, setError] = useSendPasswordResetEmail(
        auth
      );
    //   login function 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [logError]=useLog(error || setError)
    console.log(logError)
    console.log(error)
    if(loading) return <Loading/>
    const passReset=async()=>{
        await sendPasswordResetEmail(email)
        toast.success('Check email for password reset')
    }
    const onSubmit = data => {
        const { email, password } = data
        signInWithEmailAndPassword(email, password)
        reset()
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-100 px-5 my-9">
                <div class=" grid lg:grid-cols-2 gap-7 ">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-2xl mt-3 font-bold'>Please Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" class="input input-bordered"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Please provide a valid Email'
                                            },
                                            onChange: e => setEmail(e.target.value)
                                        })}
                                    />
                                    {
                                        (errors.email?.type === 'required' || errors.email?.type === 'pattern') && <label className="label">
                                            {errors.email?.type === 'required'&&<span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    }
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" class="input input-bordered"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Please enter your password'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Password should be greater than 6'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                    </label>
                                    <label class="label">
                                       <p onClick={passReset} className='text-[14px] cursor-pointer'>Forgot password</p>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                                {
                                    logError && <p className='text-center text-red-500 my-2'>{logError}</p>
                                }
                                <div className='mt-3'>
                                    <p>Don't have an account ? <Link className='text-primary font-bold' to='/signup'>SignUp</Link></p>
                                </div>
                                <div class="divider">OR</div>
                                <Social />
                            </div>
                            <ToastContainer/>
                        </form>
                    </div>
                    <div class=" bg-red-500 lg:flex hidden">
                        <img className='w-full h-full object-cover' src={house} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;