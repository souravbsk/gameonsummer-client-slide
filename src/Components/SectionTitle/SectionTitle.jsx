import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div>
            <h1 className='mb-8 md:mb-12 text-center text-slate-900 text-xl md:text-4xl font-bold'>---------{title}--------</h1>
        </div>
    );
};

export default SectionTitle;