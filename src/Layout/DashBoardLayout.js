import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                            <Outlet/>
                    
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard'>MY Appointments</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;