import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageClasses = () => {
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
      .patch(`/manageClasses/${value?.id}`, { status: value?.statusValue})
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
      <SectionTitle title="Manage Classes"></SectionTitle>
      <div>
        <div className="overflow-x-auto bg-slate-200 rounded-xl">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Instructor</th>
                <th>Status</th>
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
                  <td>
                    <select onChange={(e) => handleChangeStatus({statusValue: e.target.value, id:classItem._id })} defaultValue={classItem?.status} className={`select  select-bordered select-sm  max-w ${classItem?.status === "pending" ? "bg-warning" : classItem?.status === "approved" ? "bg-green-400" : "bg-red-400"}`}>
                      <option value="approved">Approved</option>
                      <option value="denied">Denied</option>
                      <option value="pending">Pending</option>
                    </select>
                  </td>
                  <th>
                    <button
                      onClick={() => handleRemoveClass(classItem?._id)}
                      className=" bg-red-500"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
