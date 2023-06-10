import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageHelmet = ({children}) => {
    return (
        <Helmet>
            <title>{children} - GameOnSumer</title>
        </Helmet>
    );
};

export default PageHelmet;