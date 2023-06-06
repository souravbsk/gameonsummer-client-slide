import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    //create new user
    const createNewUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }


    //login user
    const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password) 
    }

    //update user name and photo

    const updateUserProfile = (currentUser, name, photo) => {
        setLoading(true)
        return updateProfile(currentUser,{
            displayName:name,
            photoURL:photo
        })
    } 






    const authInfo = {
        user,
        createNewUser,
        loginUser,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;