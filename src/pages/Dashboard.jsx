import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../sections/landingPage/HeroSection";

function Dashboard() {
  return (
    <div>
      <Heading>You're logged in</Heading>
    </div>
  );
}
export default Dashboard;

const Heading = styled.h1`
  color: white;
`;
