import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";
const ReviewClasses = () => {
    const { id } = useParams();
    const [rating, setRating] = useState(0)
  const [axiosSecure] = useAxiosSecure();
  const { data: manageClassReview, isLoading: isManageClassReview } = useQuery({
    queryKey: ["reviewClass", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/manageClasses/${id}`);
      return res.data;
    },
  });
  console.log(manageClassReview);
  console.log(rating);


  const handleReviewSubmit = (e) => {
    e.preventDefault()
    const reviewText = e.target.reviewDetail.value;
    const review = {
        rating,
        reviewText,
    }

    axiosSecure
      .put(`/manageClasses/${id}`, review)
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Class Review Update Done`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });


   
  }










  


  return (
    <div className="w-full p-3 md:p-20">
      <div>
        <div className="card border flex-col md:flex-row overflow-hidden card-side bg-base-100 shadow-xl">
          <img
            className="md:w-96 h-72 max-w-full"
            src={manageClassReview?.classImage}
            alt="Movie"
          />

          <div className="card-body">
            <h2 className="card-title">{manageClassReview?.className}</h2>
            <p>availableSeats: {manageClassReview?.availableSeats}</p>
            <p>enrolled: {manageClassReview?.enrolled}</p>
            <p>instructorEmail: {manageClassReview?.instructorEmail}</p>
            <p>instructorName: {manageClassReview?.instructorName}</p>
            <p className="font-bold text-2xl">
              price: ${manageClassReview?.price}
            </p>
            <div className="card-actions justify-end">
              {
                <span className="badge badge-primary">
                  {manageClassReview?.status}
                </span>
              }
            </div>
          </div>
        </div>

        <div className="bg-slate-100 border  rounded-2xl shadow-lg mt-20">
            <h2 className="text-center md:text-2xl font-medium my-6">Rate This Course</h2>
            <div className="flex items-center justify-center">
            <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
            </div>
          <form onSubmit={handleReviewSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Kindly express your review in short way.</span>
              </label>
              <textarea
                type="text"
                required
                name="reviewDetail"
                placeholder="Review in detail"
                className="input border p-5 h-40 resize-none"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="">Review Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewClasses;
