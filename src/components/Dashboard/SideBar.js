import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';
import useAdmin from '../hooks/useAdmin';

const SideBar = ({ children }) => {
    const [user] = useAuthState(auth)
    const [adminLoading, admin] = useAdmin(user)
    console.log(admin)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content justify-center overflow-hidden">
                    {/* <!-- Page content here --> */}
                    <div className='app'>
                        {children}
                    </div>

                </div>
                <div class="drawer-side ul" >
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu md:bg-white bg-slate-500 p-4 overflow-y-auto w-52 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li className='sidebar'><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <>
                                <li className='sidebar'> <Link to='/dashboard/yourBooking'>Your Booking</Link></li>
                                <li className='sidebar'><Link to='/dashboard/addReview'>Add Review</Link></li>
                            </>
                        }
                        {
                            admin && <>
                                <li className='sidebar'><Link to='/dashboard/allStatus'>All Status</Link></li>
                                <li className='sidebar'><Link to='/dashboard/guestDetails'>Guest Details</Link></li>
                                <li className='sidebar'><Link to='/dashboard/manageBook'>Manage Book</Link></li>
                                <li className='sidebar'><Link to='/dashboard/reviewCheck'>Review Check</Link></li>
                                <li className='sidebar'><Link to='/dashboard/AddRoom'>Add Room</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;