import React, { useContext } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import moment from 'moment/moment';
import { PushSpinner } from 'react-spinners-kit';
import { ThemeMoodContext } from '../../../Providers/ThemeProvider';
import PageHelmet from '../../../Components/PageHelmet/PageHelmet';

const PaymentHistory = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {Dark} = useContext(ThemeMoodContext)
    const {data: paymentHistoryData = [], isLoading:isPaymentHistoryLoading, refetch} = useQuery({
        queryKey: ["paymentHistory",user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/paymentHistory?email=${user?.email}`)
            return res.data;
        }
    })

    console.log(paymentHistoryData);

    return (
        <div className='w-full p-3 md:p-12'>
          <PageHelmet>Payment History</PageHelmet>
            <SectionTitle title="Payment History"></SectionTitle>
            <div>
            <div>
          <h3 className={`text-2xl font-mono font-bold ${Dark && "text-white"}`}>
            total History: {paymentHistoryData.length}
          </h3>
         
        </div>
        <div className="flex items-center justify-center">
                <PushSpinner size={30} color="#6772E5" loading={isPaymentHistoryLoading} />
              </div>
            <div className="overflow-x-auto bg-gray-100 rounded-lg">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Date</th>
                <th>transaction Id</th>
                <th>instructor Email</th>
                <th>instructor Name</th>
                <th>Price</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {paymentHistoryData?.map((item, i) => (
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
                  <td>{moment(item?.date).format("'MMMM Do YYYY, h:mm:ss a'")}</td>
                  <td className='text-green-600 font-medium'>{item?.transactionId}</td>
                  <td>{item?.instructorEmail}</td>

                  <td>{item?.instructorName}</td>
                  <td className="text-xl font-medium">${item?.price}</td>
                  <th>
                    <button className="btn py-0 text-white  hover:text-slate-800 bg-[#75d5e3] btn-ghost btn-xs">
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
                <th>Image</th>
                <th>transaction Id</th>
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

export default PaymentHistory;