import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase_init';
import userImg from '../../assets/images/single-01.png'
import fetcher from '../../api/fetcher';
import UserDetails from './UserDetails';
const Header = ({ children }) => {
    const [user] = useAuthState(auth)
    const menus = [
        { name: 'Home', to: '/' },
        { name: 'All Room', to: '/allRoom' },
        { name: 'Contact Us', to: '/contactUs' },
    ]
    const [userData, setUserData] = useState({})
    const [open, setOpen] = useState(false)
    const { img } = userData || {}
    useEffect(() => {
        (async () => {
            const { data } = await fetcher(`user/user-data?email=${user?.email}`)
            setUserData(data)
        })()
    }, [user])

    const handleDetails=()=>{
        setOpen(!open)
    }
    return (
        <div class="drawer drawer-end relative">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div

                class="drawer-content flex flex-col text-black">
                {/* <!-- Navbar --> */}
                {/* bg-[#2623a2af] */}
                <div class="w-full navbar p-0 nav-border bg-white z-[999] sticky top-0 left-0">
                    <div class="flex-1 px-2 text-3xl font-bold mx-2">Villena</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-5 text-black">
                            {/* <!-- Navbar menu content here --> */}
                            {
                                menus.map(({ name, to }, index) => <li
                                    key={index}
                                    className='relative font-[500]'
                                >
                                    <NavLink className={({ isActive }) => isActive ? 'active-border' : ''} to={to}>{name}</NavLink>
                                </li>)

                            }
                            <>
                                {
                                    user ? <button onClick={handleDetails} className='font-[500] mr-2'>
                                        <span class="">
                                            <span class=" rounded-full">
                                                <img class="w-10 h-12 rounded-full" src={`${img ? img : userImg}`} alt="" />
                                            </span>
                                        </span>
                                    </button> : <li className='font-[500] mr-2'> <NavLink className={({ isActive }) => isActive ? 'flex items-center active-border' : ''} to='/login'>Login</NavLink></li>
                                }
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
            {
                (open&&user) && <UserDetails/>
            }
        </div>
    );
};

export default Header;