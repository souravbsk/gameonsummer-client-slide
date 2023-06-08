import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    console.log(location);
    if(user && isAdmin){
        return children
    }
    console.log(location);


    
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;