import React, { useContext } from "react";
import useCart from "../../Hooks/useCart";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import PageHelmet from "../../Components/PageHelmet/PageHelmet";
import { ThemeMoodContext } from "../../Providers/ThemeProvider";

const MyClasses = () => {
  const {Dark} = useContext(ThemeMoodContext)
  const [carts, refetch] = useCart();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  console.log(user);

  const totalPrice = carts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  console.log(totalPrice);

  const handleDeleteCartItem = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((data) => {
          if (data?.data?.deletedCount > 0) {
            refetch();
            Swal.fire(
              "Deleted!",
              "Your class Item has been deleted.",
              "success"
            );
          }
        });
      }
    });
  };

  return (
    <div className="w-full p-3 md:p-12">
      <PageHelmet>My Classes</PageHelmet>
      <SectionTitle title="My Class"></SectionTitle>
      <div>
        <div className=" mb-5 px-5">
          <h3 className={`text-2xl font-mono font-bold ${Dark && "text-white"}`}>
            total Class: {carts.length}
          </h3>
          
        </div>
        <div className="overflow-x-auto bg-gray-100 rounded-lg">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Classes</th>
                <th>instructor Name</th>
                <th>Price</th>
                <th>Pay Now</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             
              {carts.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.courseImg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.course}</div>
                      </div>
                    </div>
                  </td>

                  <td>{item?.instructorName}</td>
                  <td className="text-xl font-medium">${item?.price}</td>
                  <th>
                   <Link to={`/dashboard/payment/${item?._id}`}>
                   <button className="btn hover:text-slate-800 text-white px-3 btn-sm bg-[#6772e5]">
                      Pay Now
                    </button>
                   </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteCartItem(item._id)}
                      className="btn btn-circle btn-sm btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
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
                <th>instructor Name</th>
                <th>Price</th>
                <th>Pay Now</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
