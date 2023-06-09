import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../Hooks/useInstructor';

const InstructorRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isInstructor){
        return children
    }

    
    return <Navigate to="/" state={{from:location}} replace></Navigate>
};


export default InstructorRoute;