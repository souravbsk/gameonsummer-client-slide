import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThemeMoodContext } from '../../Providers/ThemeProvider';

const SocialLogin = ({from}) => {
    const {Dark} = useContext(ThemeMoodContext)
    const {signInWithGoogle} = useAuth();
    const [error,setError] = useState();
    const navigate = useNavigate();
    const handleSignInGoogle = () => {
        setError("")
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            axios.post("http://localhost:5000/users",{email:user?.email,name: user?.displayName, image: user?.photoURL })
            .then(res => {
                navigate(from,{replace:true})
            })
        })
        .catch(err => {
            setError(err.message)
        })
    }
    return (
        <div>
            <p className='text-center text-red-600'>{error}</p>
             <div className={`divider ${Dark ? "before:bg-white after:bg-white" : ""}`}>OR</div>
             <div className='flex items-center justify-center'>
                <button onClick={handleSignInGoogle} className='text-2xl shadow-lg bg-[#75d5e3] btn-circle flex items-center justify-center text-white'><FaGoogle></FaGoogle></button>
             </div>
        </div>
    );
};

export default SocialLogin;