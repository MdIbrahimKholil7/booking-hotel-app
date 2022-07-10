import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ children }) => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content justify-center overflow-hidden">
                    {/* <!-- Page content here --> */}
                    {children}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side ul" >
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu  p-4 overflow-y-auto w-52 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li className='sidebar'><Link to='/dashboard'>My Profile</Link></li>
                        <li className='sidebar'> <Link to='/dashboard/yourBooking'>Your Booking</Link></li>
                        <li className='sidebar'><Link to='/dashboard/addReview'>Add Review</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;