import React, { useContext } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { PushSpinner } from "react-spinners-kit";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";
import PageHelmet from "../../../Components/PageHelmet/PageHelmet";

const ManageUsers = () => {
  const {Dark} = useContext(ThemeMoodContext)
  const [axiosSecure] = useAxiosSecure();
  const {
    data: users = [],
    isLoading: userLoading,
    refetch,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleUpdateRole = (user) => {
    axiosSecure.patch(`/users/instructor/${user?._id}`).then((res) => {
      if (res?.data?.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is an instructor now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't make admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, dot it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
          if (res?.data?.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is an admin now`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  //handle remove user
  const handleRemoveUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't Remove  this User",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/admin/${id}`).then((res) => {
          console.log(res);
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `user remove success`,
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
      <PageHelmet>Manage Users</PageHelmet>
      <SectionTitle title="Manage Users"></SectionTitle>
      <div>
      <div>
          <h3 className={`text-2xl font-mono font-bold ${Dark && "text-white"}`}>
            total Users: {users.length}
          </h3>
         
        </div>
        <div className="flex items-center justify-center">
          <PushSpinner size={30} color="#6772E5" loading={userLoading} />
        </div>
        <div className="overflow-x-auto bg-slate-200 rounded-xl">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>admin</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>
                    
                  <div className="avatar ">
    <div className={`w-10 rounded-full ring-4 ring-offset-base-100 ring-offset-2 ${user?.role === "admin" ? "ring-[#7F4BF6]" : user?.role === "instructor" ? "ring-[#6772E5]" : "ring-slate-700" }`}>
      <img src={user?.image} />
    </div>
  </div>
                    

                    </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      <span className="badge bg-[#570df8b6] text-white font-semibold">
                        admin
                      </span>
                    ) : (
                      <button onClick={() => handleMakeAdmin(user)}>
                        <FaUserShield></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td>
                    {user?.role === "admin" ? (
                      ""
                    ) : user?.role === "instructor" ? (
                      <span className="badge font-semibold text-white bg-[#6772E5] badge-accent">
                        instructor
                      </span>
                    ) : (
                      <select
                        onChange={() => handleUpdateRole(user)}
                        defaultValue={user?.role}
                        className="select  max-w"
                      >
                        <option value="student">student</option>
                        <option value="instructor">instructor</option>
                      </select>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleRemoveUser(user?._id)}
                      className="bg-red-600"
                    >
                      <FaTrashAlt></FaTrashAlt>
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
                <th>Name</th>
                <th>Email</th>
                <th>admin</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
