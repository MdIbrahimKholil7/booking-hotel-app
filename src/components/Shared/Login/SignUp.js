import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from './Social';
import house from '../../../assets/images/login.png'
import { useForm } from "react-hook-form";
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import useLog from '../../hooks/useLog';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [passError, setPassError] = useState('')
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth)
    const [token]=useToken(user)
    const location=useLocation()
    const navigate=useNavigate()
    const from=location?.state?.from.state?.from?.pathname || '/'
    console.log(location)
    const [
        createUserWithEmailAndPassword,
        passUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, uodateError] = useUpdateProfile(auth);
    const [logError] = useLog(error)

    if (loading || updating) {
        return <Loading />
    }
    if(token) return navigate(from,{replace:true})
    const onSubmit = async (data) => {
        console.log(data)

        const { name, email, password, conPass, } = data
        if (password !== conPass) {
            return setPassError('Password not match')
        }
        await createUserWithEmailAndPassword(email, password)
        toast.success('Email verification sent')
        await updateProfile({ displayName: name })
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
                                        <span class="label-text">Full Name</span>
                                    </label>
                                    <input
                                        name='name'
                                        type="text"
                                        placeholder="Name"
                                        class="input input-bordered"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Please Enter your name'
                                            },

                                        })}
                                    />
                                    {
                                        errors.name?.type === 'required' && <label className="label">
                                            {<span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                        </label>
                                    }
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" class="input input-bordered"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Please provide a valid Email'
                                            }
                                        })}
                                    />

                                    {
                                        (errors.email?.type === 'required' || errors.email?.type === 'pattern') && <label className="label">
                                            {<span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    }
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input name='password' type="text" placeholder="password" class="input input-bordered"
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
                                        {
                                            passError && <span className="label-text-alt text-red-500">{passError}</span>
                                        }
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Confirm Password</span>
                                    </label>
                                    <input name='conPass' type="text" placeholder="Confirm password" class="input input-bordered"
                                        {...register("conPass", {
                                            required: {
                                                value: true,
                                                message: 'Please enter your confirm password'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Password should be greater than 6'
                                            }
                                        })}
                                    />
                                    {
                                        (errors.conPass?.type === 'required' || errors.conPass?.type === 'minLength') && <label className="label">
                                            {<span className="label-text-alt text-red-500">{errors.conPass.message}</span>}
                                            {errors.conPass?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.conPass.message}</span>}
                                        </label>

                                    }
                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary">SignUp</button>
                                </div>
                                {
                                    logError && <p className='text-center text-red-500 my-2'>{logError}</p>
                                }
                                <div className='mt-3'>
                                    <p>Already have an account ? <Link className='text-primary font-bold' to='/login'>Login</Link></p>
                                </div>
                                <div class="divider">OR</div>
                                <Social />
                            </div>
                            <ToastContainer />
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

export default SignUp;