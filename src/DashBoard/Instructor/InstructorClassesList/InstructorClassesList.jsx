import React, { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import { PushSpinner } from "react-spinners-kit";

const InstructorClassesList = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: classesData = [],
    isLoading: isLoadingClasses,
    refetch,
  } = useQuery({
    queryKey: ["instructorClassList", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/instructorClasses?email=${user?.email}`
      );
      return res.data;
    },
  });

  console.log(classesData);
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
      <SectionTitle title="Ours Classes"></SectionTitle>
      <div>
      <div>
          <h3 className="text-2xl font-mono font-bold">
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
                <th>enroll</th>
                <th>availableSeats</th>
                <th>price</th>
  
                <th>Review</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classesData?.map((classItem, i) => (
                <tr className={classItem?.status === "denied" && "bg-red-300"} key={classItem._id}>
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
                  <td className="font-bold">{classItem?.enrolled}</td>
                  <td className="font-bold">{classItem?.availableSeats}</td>
                  <td className="font-bold">${classItem?.price}</td>
                  
                  <td>
                    <div>
                      <Rating
                      readOnly
                        style={{ maxWidth: 100 }}
                        value={classItem?.review?.rating || 0}
                       
                      />
                    </div>
                    <br />
                    <span >
                      {classItem?.review?.reviewText || "  ..."}
                    </span>
                  </td>
                  <th>
                    {classItem?.status === "pending" ? (
                      <button
                        disabled
                        className="badge text-black bg-warning badge-primary"
                      >
                        pending
                      </button>
                    ) : classItem?.status === "approved" ? (
                      <button
                        disabled
                        className="badge text-black bg-green-400 badge-primary"
                      >
                        approved
                      </button>
                    ) : (
                      <button
                        disabled
                        className="badge bg-red-400 text-black badge-primary"
                      >
                        denied
                      </button>
                    )}
                  </th>

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
                <th>Course</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorClassesList;
