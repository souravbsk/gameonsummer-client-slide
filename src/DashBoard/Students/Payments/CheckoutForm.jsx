import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./CheckoutForm.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, cart,refetch }) => {
  const stripe = useStripe();
  const element = useElements();
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  console.log(cart);
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
    }

    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      setTransactionId("");
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: cart?.length,
        cartItem: cart.map((item) => item._id),
        classItemId: cart.map(item => item.classId),
      };

      axiosSecure.post("/payments",payment)
      .then(res => {
        if(res?.data?.result.insertedId){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Payment Success',
                showConfirmButton: false,
                timer: 1500
              })

              refetch()
              
        }
      })

    }

    console.log(paymentIntent);
  };

  return (
    <div>
      <form className="max-w-full mx-auto md:w-1/2 " onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            disabled={!stripe || !clientSecret || processing}
            className="btn btn-wide hover:text-slate-800 text-white bg-[#065c97]"
            type="submit"
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-center mt-10 text-red-600">{cardError}</p>
      {transactionId && (
        <p className="text-green-600">
          Transaction Success: Transaction Id : {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
