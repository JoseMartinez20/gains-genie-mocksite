import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../sections/landingPage/HeroSection";
import NavBar from "./NavBar"
import Profile from "./Profile"

function Dashboard() {
  return (
    <div>
      <Heading>You're logged in</Heading>
      <NavBar>NavBar</NavBar>
      {/* <Profile>Profile Breakdown</Profile> */}
    </div>
  );
}
export default Dashboard;

const Heading = styled.h1`
  color: white;
`;
