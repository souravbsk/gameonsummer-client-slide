import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgKey = import.meta.env.VITE_IMGBB_KEY;
const AddAClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;

  const onSubmit = (data) => {
    const { availableSeats, className, image, price } = data;
    const inputImage = image[0];
    const formData = new FormData();
    formData.append("image", inputImage);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgUrl = imageResponse.data?.display_url;
          const newClass = {
            className,
            classImage: imgUrl,
            instructorName: user?.displayName,
            instructorEmail: user?.email,
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price),
            enrolled: 0,
            status: "pending",
          };
          axiosSecure.post("/classes", newClass).then((res) => {
            if (res?.data?.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Class Successfully Added",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            }
          });
        }
      });
  };
  return (
    <div className="w-full p-3 md:p-12">
      <SectionTitle title="Add A Class"></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card border-2xl bg-slate-100 p-3 md:p-10"
        >
          {/* //first row  */}
          <div className=" flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Class Name*</span>
              </label>
              <input
                type="text"
                {...register("className", { required: true, maxLength: 20 })}
                placeholder="class name"
                className="input input-bordered w-full"
              />
              {errors.className && (
                <p className="text-red-500">{errors.className?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Instructor name*</span>
              </label>
              <input
                type="text"
                readOnly
                {...register("instructorName", { required: true })}
                defaultValue={user?.displayName}
                placeholder="Instructor name"
                className="input input-bordered w-full"
              />
              {errors.instructorName && (
                <p className="text-red-500">{errors.instructorName?.message}</p>
              )}
            </div>
          </div>
          {/* second row */}
          <div className=" flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Instructor email*</span>
              </label>
              <input
                readOnly
                type="email"
                {...register("instructorEmail", { required: true })}
                defaultValue={user?.email}
                placeholder="Instructor email"
                className="input input-bordered w-full"
              />
              {errors.instructorEmail && (
                <p className="text-red-500">
                  {errors.instructorEmail?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                min={0}
                {...register("price", { min: 0, required: true })}
                placeholder="Price"
                className="input input-bordered w-full"
              />
              {errors.price?.type === "min" && (
                <p className="text-red-600">Please Enter Valid Price</p>
              )}
              {errors.price && (
                <p className="text-red-500">
                  {errors.instructorEmail?.message}
                </p>
              )}
            </div>
          </div>
          {/* third row */}
          <div className=" flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Available seats*</span>
              </label>
              <input
                type="number"
                min={0}
                {...register("availableSeats", { min: 0, required: true })}
                placeholder="available seats"
                className="input input-bordered w-full"
              />
              {errors.availableSeats?.type === "min" && (
                <p className="text-red-600">Please Enter Valid Price</p>
              )}
              {errors.availableSeats && (
                <p className="text-red-500">{errors.availableSeats?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Class Image*</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="bg-[#75D5E3] ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
