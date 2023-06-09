import React from 'react';
import notFoundAnime from "../../assets/NotFound/notFound.json"
import Lottie  from 'lottie-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
             <div className="text-center">
            <Lottie
              className="md:w-1/2 h-96 mx-auto"
              animationData={notFoundAnime}
              loop={true}
            />
            <div>
             <Link to="/"><button>Back To Home </button></Link>
            </div>
          </div>
        </div>
    );
};

export default NotFound;