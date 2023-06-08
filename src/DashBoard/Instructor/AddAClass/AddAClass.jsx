import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const AddAClass = () => {
  const { user } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                <p className="text-red-500">{errors.instructorEmail?.message}</p>
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
                <p className="text-red-500">{errors.instructorEmail?.message}</p>
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
            <button className="">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
