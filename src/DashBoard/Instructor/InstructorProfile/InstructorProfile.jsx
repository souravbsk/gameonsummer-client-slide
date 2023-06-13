import React, { useContext, useEffect, useState } from "react";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { useForm } from "react-hook-form";
import PageHelmet from "../../../Components/PageHelmet/PageHelmet";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
const InstructorProfile = () => {
  const { Dark } = useContext(ThemeMoodContext);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [show, setShow] = useState(false);

  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["studentProfile", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(
        `https://summer-camp-server-one.vercel.app/instructorProfile/${user?.email}`
      );
      console.log(res);
      return res.data;
    },
  });
  console.log(userData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosSecure
      .put(`https://summer-camp-server-one.vercel.app/instructorProfile/${userData?._id}`, data)
      .then((updateData) => {
        console.log(updateData);
        if (updateData.data.matchedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your profile has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // spring animation
  const zoomIn = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
  });

  return (
    <div className="w-full p-5 md:p-14">
      <SectionTitle title="Profile"></SectionTitle>
      <PageHelmet>Profile</PageHelmet>
      <div>
        <div>
          <div className="max-w-full relative mx-auto md:w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 py-6"></div>
            <div className="flex flex-col md:flex-row px-10 gap-6 items-center pb-10">
              <img
                className="w-32 h-32 mb-3 rounded-full shadow-lg"
                src={userData?.image}
                alt="Bonnie image"
              />
              <div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {userData?.name || "not found"}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  role: {userData?.role}
                </span>
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Phone: {userData?.phone || "  "}
                </span>
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Email: {user?.email || " "}
                </span>
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Address: {userData?.address || " "}
                </span>
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gender: {userData?.gender || " "}
                </span>
              </div>
              <button
                onClick={() => setShow(!show)}
                className="rounded-full top-0 right-5 bg-[#75D5E3] absolute"
              >
                <FaRegEdit></FaRegEdit>
              </button>
            </div>
          </div>

          <animated.div
            style={{ ...zoomIn }}
            className={`card mt-12 w-full ${
              show ? "opacity-100" : "opacity-0"
            } border flex-1 shadow-2xl ${
              Dark ? "text-white" : "text-slate-800"
            }`}
          >
            <div className="card-body">
              <h1 className="text-3xl text-center mb-3 font-bold">
                Update Profile
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex md:flex-row flex-col items-center gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Name</span>
                    </label>
                    <input
                      name="name"
                      {...register("name", {
                        required: true,
                        maxLength: 80,
                      })}
                      defaultValue={userData?.name}
                      placeholder="enter your name"
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Email</span>
                    </label>
                    <input
                      name="email"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      readOnly
                      defaultValue={userData?.email}
                      aria-invalid={errors.email ? "true" : "false"}
                      placeholder="enter your email"
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col items-center gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      defaultValue={userData?.phone}
                      {...register("phone", { required: true })}
                      placeholder="Phone Number     "
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Address</span>
                    </label>
                    <input
                      type="address"
                      defaultValue={userData?.address}
                      {...register("address", { required: true })}
                      placeholder="address"
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Photo Url</span>
                    </label>
                    <input
                      type="text"
                      {...register("image", { required: true })}
                      defaultValue={userData?.image}
                      placeholder="Photo URL"
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Gender: </span>
                    </label>
                    <select
                      defaultValue={userData?.gender}
                      className={`select bg-transparent  ${
                        Dark
                          ? "border-gray-400 bg-[#1D232A] text-gray-500"
                          : "bg-white text-slate-900"
                      } select-bordered max-w-xs w-full`}
                      {...register("gender")}
                    >
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn hover:text-slate-800 text-white bg-[#75d5e3]"
                    value="Update Info"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
