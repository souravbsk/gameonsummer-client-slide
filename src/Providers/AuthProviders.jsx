import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //create new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update user name and photo

  const updateUserProfile = (currentUser, name, photo) => {
    setLoading(true);
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

//   console.log(user);

  //google Sign IN
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //get user

  useEffect(() => {
    const subScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser?.email })
          .then((data) => {
            const token = data.data.token;
            localStorage.setItem("gameonsummer-token", token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("gameonsummer-token");
        setLoading(false);

      }

    //   setLoading(false);
    });
    return () => {
      subScribe();
    };
  });

  //singOut
  const LogOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    createNewUser,
    loginUser,
    updateUserProfile,
    signInWithGoogle,
    LogOut,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
