import React, { useState } from "react";
import Lottie from "lottie-react";

import signupAnime from "../../assets/Login/signup.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [confirmError, setConfirmError] = useState("");
  const [showPass, setShowPass] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setConfirmError("");

    if (data?.confirmpassword !== data?.password) {
      setConfirmError("confirm password does not matched");
      return;
    }
    console.log(data);
  };

  return (
    <div>
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content  container flex-col lg:flex-row">
          <div className="text-center flex-1 lg:text-left">
            <Lottie
              className=" mx-auto md:w-10/12"
              animationData={signupAnime}
              loop={true}
            />
            ;
          </div>
          <div className="card w-full flex-1 shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center mb-3 font-bold">Sign In</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="enter your email"
                    className="input input-bordered w-full"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                  <input
                    type={showPass ? "password" : "text"}
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="password"
                    className="input input-bordered w-full"
                  />

                  
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute -translate-y-1/2 top-1/2 right-0 px-3 text-lg">
                    {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                  </div>
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn hover:text-slate-800 text-white bg-[#065C97]"
                    value="Sign Up"
                    type="submit"
                  />
                </div>
              </form>
              <p className="text-center mt-5">
                Create An Account ?{" "}
                <Link to="/register" className="font-medium text-[#065C97]">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
