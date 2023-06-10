import React, { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { PushSpinner } from 'react-spinners-kit';

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
        <div>
          <h3 className="text-2xl font-mono font-bold">
            total Course: {enrollClass.length}
          </h3>
         
        </div>
        <div className="flex items-center justify-center">
                <PushSpinner size={30} color="#6772E5" loading={isLoadingClasses} />
              </div>
        <div className="overflow-x-auto bg-gray-100 rounded-lg">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
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
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.course}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.instructorEmail}</td>

                  <td>{item?.instructorName}</td>
                  <td className="text-xl font-medium">${item?.price}</td>
                  <th>
                    <button className="btn py-0 text-white  hover:text-slate-800 bg-[#75d5e3] btn-ghost btn-xs">
                    Paid
                    </button>
                  </th>
                  
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
            <tr>
                <th>#</th>
                <th>Image</th>
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