import React, { useContext } from "react";
import { ScrollRestoration, useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ClassCard from "../../Components/ClassCard/ClassCard";
import PageHelmet from "../../Components/PageHelmet/PageHelmet";
import {SlUserFollow} from "react-icons/sl"
import useAuth from "../../Hooks/useAuth";
import { ThemeMoodContext } from "../../Providers/ThemeProvider";
import useStudent from "../../Hooks/useStudent";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const InstructorsClasses = () => {
  const instructorsData = useLoaderData();
  const {user} = useAuth();
  const {Dark} = useContext(ThemeMoodContext)
  const [isStudent] = useStudent();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate =useNavigate();
  const [axiosSecure] = useAxiosSecure()
  console.log(isStudent);

  const handleFollowMe = (id) => {
    if(user){
      axiosSecure.put(`http://localhost:5000/followInstructor/${user?.email}`,{followId: id})
      .then(res => {
        console.log(res);
      })
      // 











    }
    else{
      Swal.fire({
        title: 'Are you sure?',
        text: "Please Login First ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")

        }
      })
    }
  }

  console.log(instructorsData);
  return (
    <div className="container pb-8 md:pb-32 pt-32">
      <PageHelmet>Instructor Classes</PageHelmet>
      <div className={`card items-center flex-col md:flex-row border-2 overflow-hidden card-side shadow-xl ${Dark ? "text-[#A6ADBA]" : "text-[#1D232A]"}`}>
        <img className="md:w-5/12 w-full   max-w-full" src={instructorsData?.user?.image} alt="Movie" />

        <div className="card-body">
          <h2 className="card-title text-xl md:text-4xl">{instructorsData?.user?.name}</h2>
          <p className="text-sm md:text-base font-semibold font-mono">Email: {instructorsData?.user?.email}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Phone: {instructorsData?.user?.phone || "not found"}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Total Student: {instructorsData?.totalEnrolled}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Total Available: {instructorsData?.availableSeats}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Class Quantity: {instructorsData?.classQuantity}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Classes Name: {instructorsData?.ClassesName.map(item => <span className="badge md:text-xl px-3 py-3 mr-2 badge-secondary">{item}</span>) }</p>
        </div>
        <div className="pr-10">
          <button disabled={isAdmin || isInstructor} onClick={() => handleFollowMe(instructorsData?.user?._id)} className="btn text-white hover:text-slate-900 bg-[#75d5e3]">
            <SlUserFollow className="text-xl"></SlUserFollow>
            Follow</button>
        </div>
      </div>
      <div className="md:mt-32 mt-8">
    <SectionTitle title={`Classes`}></SectionTitle>
    <div className="grid gap-8 md:grid-cols-3">

        {
            instructorsData?.classes?.map(item =>  <ClassCard key={item._id} classItem={item}></ClassCard>
            )
        }
    </div>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default InstructorsClasses;
