
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useStudent = () => {

    const {user} = useAuth();
    console.log(user);
    const [axiosSecure]= useAxiosSecure();
    const {data:isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey:['isStudent', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`)
            return res.data.student
        }
    })
    console.log(isStudent);
    return [isStudent, isStudentLoading];

    
};

export default useStudent;