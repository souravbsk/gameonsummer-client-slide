import React, { useState } from "react";
import Lottie from "lottie-react";

import signupAnime from "../../assets/Login/signup.json";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(true);
  const {loginUser} = useAuth();
  const navigate =  useNavigate();
  const location  = useLocation();
  console.log(location);
  const from = location?.state?.from?.pathname || "/";
  console.log(from);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setErrorMessage("");
    const {email,password} = data;
    loginUser(email,password)
    .then(result => {
      const user = result.user;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'you are successfully login',
        showConfirmButton: false,
        timer: 1500
      })
      reset()
      navigate(from,{replace:true})
    })
    .catch(err => {
      setErrorMessage(err.message)
    })


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

                  
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute  m-0 bg-transparent shadow-none  -translate-y-1/2 top-1/2 text-slate-800 right-0 px-3 text-lg">
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
              <p className="text-center text-red-600">{errorMessage}</p>
              <SocialLogin from={from}></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
