import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useCart from '../../../Hooks/useCart';

const Payments = () => {
    const [carts,refetch] = useCart();

    return (
        <div className='w-full p-3 md:p-12'>
            <SectionTitle title="Payments"></SectionTitle>
        </div>
    );
};

export default Payments;