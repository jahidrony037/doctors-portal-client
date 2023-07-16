import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashBoardLayout = () => {

    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);


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
                   
                    <li><Link to='/dashboard'>MY Appointments</Link></li>
                    {
                        isAdmin && <>
                            <li className='mt-4'><Link  to='/dashboard/users'>All Users</Link></li>
                            <li className='mt-4'><Link to='/dashboard/add-doctor'>Add a Doctor</Link></li>
                            <li className='mt-4'><Link to='/dashboard/manage-doctors'>Mange Doctors</Link></li>
                        </>
                    }
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;