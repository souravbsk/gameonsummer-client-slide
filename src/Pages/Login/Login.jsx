import React, { useContext, useState } from "react";
import Lottie from "lottie-react";

import signupAnime from "../../assets/Login/signup.json";
import { useForm } from "react-hook-form";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { ThemeMoodContext } from "../../Providers/ThemeProvider";
import PageHelmet from "../../Components/PageHelmet/PageHelmet";
import { useSpring,animated } from "@react-spring/web";
const Login = () => {
  const {Dark} = useContext(ThemeMoodContext)
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



  // spring animation
  const zoomIn = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
  });


  return (
    <div>
      <PageHelmet>Sign In</PageHelmet>
      <div className="hero w-full pt-32 min-h-screen ">

        <div className="hero-content  container flex-col lg:flex-row">
          <div className="text-center flex-1 lg:text-left">
            <Lottie
              className=" mx-auto md:w-10/12"
              animationData={signupAnime}
              loop={true}
            />
            ;
          </div>
          <animated.div style={{...zoomIn}} className={`card w-full flex-1  shadow-2xl border ${Dark ? "text-white" : "text-slate-800"}`}>
            <div className="card-body">
              <h1 className="text-3xl text-center mb-3 font-bold">Sign In</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    className="input bg-transparent border-gray-400 input-bordered w-full"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="">Password</span>
                  </label>
                  <div className="relative">
                  <input
                    type={showPass ? "password" : "text"}
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="password"
                    className="input bg-transparent border-gray-400 input-bordered w-full"
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
                    className={`btn hover:text-slate-800  text-white bg-[#75d5e3]`}
                    value="Sign Up"
                    type="submit"
                  />
                </div>
              </form>
              <p className="text-center mt-5">
                Create An Account ?{" "}
                <Link to="/register" className="font-medium text-[#75d5e3]">
                  Sign Up
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

export default Login;
