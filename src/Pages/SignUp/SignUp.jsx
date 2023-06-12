import React, { useContext, useState } from "react";
import Lottie from "lottie-react";

import signupAnime from "../../assets/Login/signup.json";
import { useForm } from "react-hook-form";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { ThemeMoodContext } from "../../Providers/ThemeProvider";
import PageHelmet from "../../Components/PageHelmet/PageHelmet";
import { useSpring,animated } from "@react-spring/web";

const SignUp = () => {
  const {Dark} = useContext(ThemeMoodContext)
  const [confirmError, setConfirmError] = useState("");
  const { createNewUser, updateUserProfile } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate =  useNavigate();
  const location  = useLocation();
  console.log(location);
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setErrorMessage("");
    setConfirmError("");
    if (data?.confirmpassword !== data?.password) {
      setConfirmError("confirm password does not matched");
      return;
    }

    const { email, fullName, address, password, gender, photoURL, phone } =
      data;
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(result.user, fullName, photoURL);
        const newUser = {name:fullName, email: email.toLowerCase(), address, gender, phone, image:photoURL };
        console.log(newUser,'nere');
        axios.post("https://summer-camp-server-one.vercel.app/users", newUser).then((res) => {
          console.log(res);
          if (res?.data?.insertedId) {
            reset();
            navigate(from,{replace:true});
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Register Success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });

    console.log(data);
  };



    // spring animation
    const zoomIn = useSpring({
      from: { transform: 'scale(0)' },
      to: { transform: 'scale(1)' },
    });
  
  

  return (
    <div className="pt-32 pb-8 md:pb-32">
      <PageHelmet>Sign Up</PageHelmet>
      <div className=" hero w-full  min-h-screen ">
        <div className=" flex flex-col md:flex-row  items-center justify-between container">
          <div className="text-center flex-1 lg:text-left">
            <Lottie
              className="max-w-full mx-auto md:w-10/12"
              animationData={signupAnime}
              loop={true}
            />
            ;
          </div>
          <animated.div style={{...zoomIn}} className={`card w-full border flex-1 shadow-2xl ${Dark ? "text-white" : "text-slate-800"}`}>
            <div className="card-body">
              <h1 className="text-3xl text-center mb-3 font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex md:flex-row flex-col items-center gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Name</span>
                    </label>
                    <input
                      name="name"
                      {...register("fullName", {
                        required: true,
                        maxLength: 80,
                      })}
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
                      aria-invalid={errors.email ? "true" : "false"}
                      placeholder="enter your email"
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Password</span>
                    </label>
                    <input
                      required
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                      })}
                      placeholder="password"
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be 6 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have one Uppercase one special character.
                      </p>
                    )}
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("confirmpassword", { required: true })}
                      name="confirmpassword"
                      placeholder="Confirm password"
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                    <p className="text-red-600">{confirmError}</p>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col items-center gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Phone Number</span>
                    </label>
                    <input
                      type="tel"
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
                      {...register("photoURL", { required: true })}
                      placeholder="Photo URL"
                      className="input input-bordered bg-transparent border-gray-400 w-full"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Gender: </span>
                    </label>
                    <select
                      className={`select bg-transparent  ${Dark ? "border-gray-400 bg-[#1D232A] text-gray-500" : "bg-white text-slate-900"} select-bordered max-w-xs w-full`}
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
                    value="Sign Up"
                    type="submit"
                  />
                </div>
              </form>
              <p className="text-center mt-5">
                Already have an account ?{" "}
                <Link to="/login" className="font-medium text-[#75d5e3]">
                  Sign In
                </Link>{" "}
              </p>
              <p className="text-center text-red-600">{errorMessage}</p>
              <SocialLogin from={from}></SocialLogin>
            </div>
          </animated.div>
        </div>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default SignUp;
