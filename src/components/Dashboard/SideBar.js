import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({children}) => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content  justify-center">
                    {/* <!-- Page content here --> */}
                    {children}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side " >
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content bg-slate-400">
                        {/* <!-- Sidebar content here --> */}
                        <Link to='/dashboard'>My Profile</Link>
                        <Link to='/dashboard/yourBooking'>Your Booking</Link>
                        <Link to='/dashboard/addReview'>Add Review</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;