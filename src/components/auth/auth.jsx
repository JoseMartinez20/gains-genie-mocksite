import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { Button } from "../../sections/landingPage/HeroSection";

const Auth = () => {
  const checkUser = () => {
    console.log(auth?.currentUser?.email);
    // return auth?.currentUser;
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
 
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Button onClick={signInWithGoogle}> Get Started</Button>
      <Button onClick={checkUser}> Get user</Button>
      <Button onClick={logout}> logout</Button>
    </div>
  );
};

export default Auth;
