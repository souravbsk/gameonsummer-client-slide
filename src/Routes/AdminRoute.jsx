import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { CubeSpinner } from 'react-spinners-kit';

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin()

    if(loading || isAdminLoading){
        return (
            <div className="flex justify-center items-center h-screen">
              <CubeSpinner size={30} color="#6772E5" loading={loading} />
            </div>
          );
    }
    console.log(location);
    if(user && isAdmin){
        return children
    }
    console.log(location);


    
    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminRoute;