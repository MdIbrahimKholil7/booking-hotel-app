import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Dashboard = () => {
    return (
        <div>
            <SideBar>
                <Outlet/>
            </SideBar>
        </div>
    );
};

export default Dashboard;