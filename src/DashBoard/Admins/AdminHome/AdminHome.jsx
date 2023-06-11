import React, { useContext } from 'react';
import PageHelmet from '../../../Components/PageHelmet/PageHelmet';
import { ThemeMoodContext } from '../../../Providers/ThemeProvider';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AdminHome = () => {
    const {Dark} = useContext(ThemeMoodContext)
    
    return (
        <div>
            <PageHelmet>Dashboard</PageHelmet>
            <h1>Welcome Admin</h1>
        </div>
    );
};

export default AdminHome;