import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClassCard from '../../../Components/SocialLogin/ClassCard/ClassCard';

const PopularClasses = () => {
    const [classes,setClasses] = useState([]);

   useEffect(() => {
    axios.get("http://localhost:5000/classes")
    .then(res => {
        setClasses(res.data);
    })
   },[])



    return (
        <div className='mt-32 container'>
            <div>
                <h3 className='text-center text-4xl font-bold font-mono underline mb-12'>Popular Classes</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
 {
    classes.map(classItem => <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)
 }
            </div>
        </div>
    );
};

export default PopularClasses;