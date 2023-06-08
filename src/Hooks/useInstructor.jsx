import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
   const [axiosSecure] = useAxiosSecure();
   const {user} = useAuth();
   const {data: isInstructor , isLoading: isInstructorLoading} = useQuery({
    queryKey:["isInstructor", user?.email],
    queryFn: async () => {
         const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
         return res.data?.instructor

    } 
   })
   console.log(isInstructor);
   return [isInstructor, isInstructorLoading]
};

export default useInstructor;