import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className='flex justify-center items-center'>
                <div><span className="loading loading-infinity loading-lg text-primary mt-64"></span></div>
        </div>
    }
    if(user && isAdmin){
        return children;
    }
    
    return <Navigate to="/login" state={{from:location}} replace/>
      
};

export default AdminRoute;