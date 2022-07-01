import React from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';
import house from '../../../assets/images/login.png'
const Login = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100 px-5 my-9">
                <div class=" grid lg:grid-cols-2 gap-7 ">
                   
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                            <div className='mt-3'>
                                <p>Don't have an account ? <Link className='text-primary font-bold' to='/signup'>SignUp</Link></p>
                            </div>
                            <div class="divider">OR</div>
                            <Social/>
                        </div>
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