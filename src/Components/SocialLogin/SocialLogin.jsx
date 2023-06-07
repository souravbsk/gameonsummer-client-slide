import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();
    const [error,setError] = useState();
    const navigate = useNavigate();
    const handleSignInGoogle = () => {
        setError("")
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            axios.post("http://localhost:5000/users",{email:user?.email})
            .then(res => {
                navigate("/")
            })
        })
        .catch(err => {
            setError(err.message)
        })
    }
    return (
        <div>
            <p className='text-center text-red-600'>{error}</p>
             <div className="divider">OR</div>
             <div className='flex items-center justify-center'>
                <button onClick={handleSignInGoogle} className='text-2xl shadow-lg bg-[#065C97] btn-circle flex items-center justify-center text-white'><FaGoogle></FaGoogle></button>
             </div>
        </div>
    );
};

export default SocialLogin;