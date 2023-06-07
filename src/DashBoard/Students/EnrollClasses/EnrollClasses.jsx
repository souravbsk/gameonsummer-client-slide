import React, { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const EnrollClasses = () => {
    const [axiosSecure] = useAxiosSecure();

    const {user,loading} = useAuth();
    const { refetch, data: enrollClass = [] } = useQuery({
        queryKey: ['enrollClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/enrollClasses?email=${user?.email}`)
            return res.data;
        },
    })

    console.log(enrollClass);
    return (
        <div className="w-full p-3 md:p-12">
      <SectionTitle title="Enrolled Classes"></SectionTitle>
      <div>
        <div className="flex flex-col md:flex-row mb-5 md:items-center justify-between gap-5 px-5">
          <h3 className="text-2xl font-mono font-bold">
            total Course: {enrollClass.length}
          </h3>
         
        </div>
        <div className="overflow-x-auto bg-gray-100 rounded-lg">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Classes</th>
                <th>Available Sites</th>
                <th>instructor Email</th>
                <th>instructor Name</th>
                <th>Price</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {enrollClass.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.classImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.className}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.availableSeats}</td>
                  <td>{item?.instructorEmail}</td>

                  <td>{item?.instructorName}</td>
                  <td className="text-xl font-medium">${item?.price}</td>
                  <th>
                    <button className="btn text-white  hover:text-slate-800 bg-[#065c97] btn-ghost btn-xs">
                    Done
                    </button>
                  </th>
                  
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>#</th>
                <th>Classes</th>
                <th>instructor Email</th>
                <th>instructor Name</th>
                <th>Price</th>
                <th>Payment Status</th>
               
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    );
};

export default EnrollClasses;