import React, { useContext } from 'react';
import { ThemeMoodContext } from '../../Providers/ThemeProvider';

const SectionTitle = ({title}) => {
    const {Dark} = useContext(ThemeMoodContext)

  
    return (
        <div>
            <h1 className={`mb-8 md:mb-12 text-center  ${Dark ? "text-white" : "text-slate-800" }    text-xl md:text-4xl font-bold`}>{title}</h1>
        </div>
    );
};

export default SectionTitle;