import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/g-dumbbell.svg";
import { Link } from "react-router-dom";
import LogOutButton2 from "../../components/auth/logoutButton2";
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
            {/* <Welcome>Welcome {auth.currentUser.displayName}</Welcome> */}
            <LogOutButton2 onClick={logout} title="Log Out" />
          </HeaderBox>
        </div>
      </div>
    </div>
  );
}

const HeaderBox = styled.div.attrs({
  className: "HeaderButton",
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 100%;
  height: 60px;
  background: white;
  border-radius: 30px;
  padding: 0px;
  margin: 0px;
`;

const Welcome = styled.div.attrs({
  className: "Welcome",
})`
  position: relative;
  top: 8%;
  right: 30%;
  /* overflow-x: hidden; */
  font-size: 40px;
  font-weight: 1000;
  font-family: "Inter";
`;

// const LogOutButtonStyled = styled(LogOutButton).attrs({
//   className: "LogOutButtonStyled",
// })`
//   /* position: relative; */
//   /* overflow-x: hidden; 
//   margin-left: 50%;
//   margin-right: 50%; */
//   font-size: 80px;
//   font-weight: 500;
//   left: 50%;
//   font-family: "Inter";
//   right: 40%;
//   margin-left: 0%;
// `;

export default ProfileHeader;
