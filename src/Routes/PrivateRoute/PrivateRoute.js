import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center items-center'>
                <div><span className="loading loading-infinity loading-lg text-primary mt-64"></span></div>
        </div>
    }
    if(user){
        return children;
    }
    
    return <Navigate to="/login" state={{from:location}} replace/>
      
};

export default PrivateRoute;