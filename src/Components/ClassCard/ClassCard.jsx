import React, { useContext } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { ThemeMoodContext } from "../../Providers/ThemeProvider";

const ClassCard = ({ classItem }) => {
  const {Dark} = useContext(ThemeMoodContext)
  const {user} = useAuth();
  const navigate = useNavigate()
  const [,refetch] = useCart();
  const [isAdmin] =useAdmin();
  const [isInstructor] = useInstructor();

  const {
    availableSeats,
    className,
    classImage,
    enrolled,
    _id,
    instructorEmail,
    instructorName,
    price,
  } = classItem || {}; 



  const handleAddCart = () => {
    const newCourse = {
        classId:_id,
        course: className,
        courseImg: classImage,
        userName: user?.displayName,
        userEmail: user?.email,
        instructorName,
        instructorEmail,
        price
    }

    if(user && user?.email){
      axios.post("https://summer-camp-server-one.vercel.app/carts",newCourse)
      .then(data => {
        if(data?.data?.insertedId){
          refetch()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Class Successfully add to cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })      
    }
    else{
      Swal.fire({
        title: 'Are you sure?',
        text: "You Have to First Login",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go to login '
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
        }
      })
    }
   
  }


  return (
    <div className={`card border-2 bg-base-100 ${Dark ? "text-[#A6ADBA]" : "text-[#1D232A]"} shadow-xl  ${!availableSeats ? "bg-red-200" : "bg-transparent"}`}>
      <figure className="">
        <img src={classImage} alt="Shoes" className="rounded-xl rounded-b-none h-64 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Students: {enrolled}</p>
        <p>Available Seats: {availableSeats}</p>
        <p>Instructor Name: {instructorName}</p>

        <div className=" shrink-0 border-t-2 pt-3 flex items-center w-full">
          <button disabled={!availableSeats || isInstructor || isAdmin} onClick={handleAddCart} className={`btn text-white hover:text-slate-900 bg-[#75d5e3]`}>Enroll Now</button>
          <p className="text-right text-2xl font-bold ">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
