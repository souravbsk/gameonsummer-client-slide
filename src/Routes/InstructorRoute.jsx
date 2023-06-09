import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../Hooks/useInstructor';
import { CubeSpinner } from 'react-spinners-kit';

const InstructorRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    if(loading || isInstructorLoading){
        return (
            <div className="flex justify-center items-center h-screen">
              <CubeSpinner size={30} color="#6772E5" loading={loading} />
            </div>
          );
    }
    if(user && isInstructor){
        return children
    }

    
    return <Navigate to="/" state={{from:location}} replace></Navigate>
};


export default InstructorRoute;