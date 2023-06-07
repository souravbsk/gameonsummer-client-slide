import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuth();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;