import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/g-dumbbell.svg";
import { Link } from "react-router-dom";
import LogOutButton from "../../components/auth/logoutButton";
import { auth, googleProvider } from "../../config/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

function ProfileHeader() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <div>
          <HeaderBox>
            <Welcome>Welcome {auth.currentUser.displayName}</Welcome>
            <LogOutButton onClick={logout} title="Log Out" />
          </HeaderBox>
        </div>
      </div>
    </div>
  );
}

const HeaderBox = styled.div.attrs({
  className: "HeaderButton",
})`
  max-width: 100%;
  height: 60px;
  background: white;
  border-radius: 30px;
`;

const Welcome = styled.div.attrs({
  className: "Welcome",
})`
  position: relative;
  overflow-x: hidden;
  font-size: 30px;
  font-weight: 1000;
  font-family: "Inter";
  text-align: center;
  top: 8%;
`;

export default ProfileHeader;
