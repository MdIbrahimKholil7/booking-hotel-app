import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = ({children}) => {

    const menus = [
        { name: 'Home', to: '/' },
        { name: 'All Room', to: '/' },
        { name: 'Contact Us', to: '/' },
    ]

    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div
            
            class="drawer-content flex flex-col text-black">
                {/* <!-- Navbar --> */}
                {/* bg-[#2623a2af] */}
                <div class="w-full navbar p-0 nav-border bg-white">
                    <div class="flex-1 px-2 mx-2">Navbar Title</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-5 text-black">
                            {/* <!-- Navbar menu content here --> */}
                            {
                                menus.map(({ name, to }, index) => <li
                                    key={index}
                                    className='relative'
                                >
                                    <NavLink  className={({ isActive }) => isActive ? 'active-border' : ''} to={to}>{name}</NavLink>
                                </li>)

                            }
                            <>
                                <li> <Link to='/login'>Login</Link></li>
                            </>
                        </ul>
                    </div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {/* Content */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>

            </div>
        </div>
    );
};

export default Header;