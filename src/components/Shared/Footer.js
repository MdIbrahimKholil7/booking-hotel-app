import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import {  BsFillTelephoneFill} from 'react-icons/bs';
const Footer = () => {
    return (
        <div>
            <footer className="footer md:justify-items-center z-[-10px] md:grid-cols-4 p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title text-xl">Get In Touch</span>
                    <div className='flex justify-between items-center leading-6'>
                        <MdLocationOn
                            className='w-14 h-9 mr-3 text-black'
                        />
                        <span className='text-[16px]'>Level 13, 2 Elizabeth St,
                            Melbourne, Victoria 3000 Dhaka</span>
                    </div>
                    <div className='flex justify-between items-center leading-6'>
                        <MdEmail
                            className='w-5 h-9 mr-3 text-black'
                        />
                        <span className='text-[16px]'>example@gmail.com</span>
                    </div>
                    <div className='flex justify-between items-center leading-6'>
                        <BsFillTelephoneFill
                            className='w-5 h-9 mr-3 text-black'
                        />
                        <span className='text-[16px]'>+1-000-991-8830</span>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-xl">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title text-xl">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title text-xl">Newsletter</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative w-[255px] ">
                            <input type="text" placeholder="username@site.com" className="input input-bordered " />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;