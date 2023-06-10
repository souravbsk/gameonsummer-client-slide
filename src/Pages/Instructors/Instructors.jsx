import React from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import InstructorCard from '../../Components/InstructorCard/InstructorCard';
import PageHelmet from '../../Components/PageHelmet/PageHelmet';

const Instructors = () => {

    const instructorsData = useLoaderData();
    console.log(instructorsData);

    return (
        <div className='container pt-32'>
            <PageHelmet>Instructors</PageHelmet>
            <div>
                <SectionTitle title="Instructors"></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {
                    instructorsData.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                } 
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Instructors;