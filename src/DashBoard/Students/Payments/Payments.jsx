import React, { useContext } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useCart from '../../../Hooks/useCart';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import PageHelmet from '../../../Components/PageHelmet/PageHelmet';
import { ThemeMoodContext } from '../../../Providers/ThemeProvider';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_TOKEN)
const Payments = () => {
    const [carts,refetch] = useCart();
    const {id} = useParams();
    const cartItem = carts?.find(item => item?._id === id);
    const price = parseFloat(cartItem?.price?.toFixed(2));

    console.log(carts);
    const {Dark} = useContext(ThemeMoodContext)

    return (
        <div className='w-full overflow-hidden p-3 md:p-12'>
            <PageHelmet>Check Out</PageHelmet>

            <SectionTitle title="Payments"></SectionTitle>
            <div>
                <div>
                    <h2 className={`text-xl md:text-4xl text-center md:mb-5 font-medium ${Dark && "text-white"}`}>Price: ${price || 0}</h2>
                    <h2 className={`text-xl md:text-4xl text-center mb-5 font-medium ${Dark && "text-white"} `}>Class Name: {cartItem?.course || ""}</h2>
                </div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm refetch={refetch} cart={cartItem} price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payments;