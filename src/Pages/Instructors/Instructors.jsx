import React from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import InstructorCard from '../../Components/InstructorCard/InstructorCard';
import PageHelmet from '../../Components/PageHelmet/PageHelmet';
import { useSpring,animated} from '@react-spring/web';

const Instructors = () => {

    const instructorsData = useLoaderData();
    console.log(instructorsData);


    const springs = useSpring({
        from: { y: 100 },
        to: { y: 0 },
      })
    

    return (
        <div  className='container pt-32 pb-8 md:pb-32'>
            <PageHelmet>Instructors</PageHelmet>
            <div>
                <SectionTitle title="Instructors"></SectionTitle>
            </div>
            <animated.div style={{reverse:true,...springs}} className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {
                    instructorsData.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                } 
            </animated.div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Instructors;