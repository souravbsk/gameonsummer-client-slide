import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useCart from '../../../Hooks/useCart';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_TOKEN)
const Payments = () => {
    const [carts,refetch] = useCart();
    const total = carts.reduce((sum,item) => sum + item.price,0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className='w-full overflow-hidden p-3 md:p-12'>
            <SectionTitle title="Payments"></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={carts} price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payments;