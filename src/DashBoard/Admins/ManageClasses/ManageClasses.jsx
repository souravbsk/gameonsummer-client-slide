import React, { useContext } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { PushSpinner } from "react-spinners-kit";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";
import PageHelmet from "../../../Components/PageHelmet/PageHelmet";

const ManageClasses = () => {
  const {Dark} = useContext(ThemeMoodContext)
  const [axiosSecure] = useAxiosSecure();
  const {
    data: classesData,
    isLoading: isLoadingClasses,
    refetch,
  } = useQuery({
    queryKey: ["manageClass"],
    queryFn: async () => {
      const res = await axiosSecure.get("/manageClasses");
      return res.data;
    },
  });

  console.log(classesData);
  const handleChangeStatus = (value) => {
    axiosSecure
      .patch(`/manageClasses/${value?.id}`, { status: value?.statusValue })
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Class ${value?.statusValue} Done`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleRemoveClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to remove this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/manageClasses/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class Deleted Done",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full p-3 md:p-12">
      <PageHelmet>Manage Classes</PageHelmet>
      <SectionTitle title="Manage Classes"></SectionTitle>
      <div>
      <div>
          <h3 className={`text-2xl font-mono font-bold ${Dark && "text-white"}`}>
            total Classes: {classesData?.length}
          </h3>
         
        </div>
      <div className="flex items-center justify-center">
                <PushSpinner size={30} color="#6772E5" loading={isLoadingClasses} />
              </div>
        <div className="overflow-x-auto bg-slate-200 rounded-xl">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Instructor</th>
                <th>Available seats</th>
                <th>Status</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            
            
            <tbody>
              {classesData?.map((classItem, i) => (
                <tr key={classItem._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classItem?.classImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{classItem?.className}</div>
                        <div className="text-sm font-medium ">
                          Price: ${classItem?.price}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>

                    <p> Email: {classItem?.instructorEmail}</p>
                    <br />
                    <span className="badge badge-ghost badge-md">
                      Name: {classItem?.instructorName}
                    </span>
                  </td>
                  <td className="text-center">
                    {classItem?.availableSeats}
                  </td>
                  <td>
                    <span className={`badge ${
                        classItem?.status === "pending"
                          ? "bg-warning"
                          : classItem?.status === "approved"
                          ? "bg-green-400"
                          : "bg-red-400"
                      }`}>{classItem?.status}</span>
      

                     
              
                  </td>
                  <td>
                  <button   onClick={() =>
                        handleChangeStatus({
                          statusValue: "approved",
                          id: classItem._id,
                        })
                      }  disabled={classItem?.status === "approved" || classItem?.status === "denied" } className="btn text-sm btn-sm bg-green-400">Approved</button>
                      <button 
                      
                      onClick={() =>
                        handleChangeStatus({
                          statusValue: "denied",
                          id: classItem._id,
                        })
                      } 

                      disabled={classItem?.status === "approved" || classItem?.status === "denied" } className="btn text-sm py-0 btn-sm bg-red-400">denied</button>
                    <Link to={`/dashboard/manageclasses/${classItem._id}`}>
                      {" "}
                      <button  className="badge btn-sm ">send feedback</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemoveClass(classItem?._id)}
                      className=" bg-red-500"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Action</th>
                <th>Review</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
